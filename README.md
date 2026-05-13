# Google Meet Integration using Node.js

## 🚀 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- Google APIs

---

## ✨ Features

- Google OAuth Authentication
- Create Google Meet Links Dynamically
- Google Calendar Integration
- Shareable Meeting URLs
- Anyone with the link can join the meeting
- Simple Frontend Integration

---

## 📚 Setup Guide

Follow the complete step-by-step integration guide here:

https://chatgpt.com/share/6a04b26f-6678-83e9-ab63-fcf8464621ea

---

## 🔧 Requirements

Before starting, make sure you have:

- Node.js installed
- A Google Cloud Project
- Google Calendar API enabled
- OAuth Credentials configured

---

## 📦 Main Packages Used

```bash
npm install express googleapis dotenv
```

---

## 📁 Suggested Project Structure

```txt
project/
│
├── server.js
├── .env
│
└── public/
    ├── index.html
    ├── style.css
    └── app.js
```

---

## 🔗 APIs & Services Used

- Google Calendar API
- Google OAuth 2.0
- Google Meet Conference Data

---

## ⚡ Workflow

1. User clicks “Create Meeting”
2. Google OAuth authentication starts
3. User grants calendar permissions
4. Backend creates a Google Calendar event
5. Google Meet link is generated automatically
6. Meeting link can be shared with anyone

---

## 🛠 Common Issues

### Error 403: access_denied
- Add your Gmail account in OAuth Test Users

### redirect_uri_mismatch
- Make sure your redirect URI matches exactly

### Calendar API Disabled
- Enable Google Calendar API from Google Cloud Console

---

## 📖 Useful Resources

- https://developers.google.com/calendar/api
- https://developers.google.com/identity/protocols/oauth2
- https://github.com/googleapis/google-api-nodejs-client
- https://expressjs.com
- https://nodejs.org
