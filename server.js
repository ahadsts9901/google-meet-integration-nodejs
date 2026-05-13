const express = require("express");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

app.use(express.static("public"));

app.get("/auth/google", (req, res) => {

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: [
            "https://www.googleapis.com/auth/calendar"
        ]
    });

    res.redirect(url);
});

app.get("/auth/google/callback", async (req, res) => {

    const code = req.query.code;

    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    const calendar = google.calendar({
        version: "v3",
        auth: oauth2Client
    });

    const event = {
        summary: "My Meeting",
        start: {
            dateTime: new Date(Date.now() + 60000).toISOString(),
            timeZone: "Asia/Karachi"
        },
        end: {
            dateTime: new Date(Date.now() + 3600000).toISOString(),
            timeZone: "Asia/Karachi"
        },
        conferenceData: {
            createRequest: {
                requestId: "sample123",
                conferenceSolutionKey: {
                    type: "hangoutsMeet"
                }
            }
        }
    };

    const response = await calendar.events.insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1
    });

    const meetLink =
        response.data.conferenceData.entryPoints[0].uri;

    res.send(`
    <h1>Google Meet Created</h1>
    <a href="${meetLink}" target="_blank">
      Join Meeting
    </a>
  `);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});