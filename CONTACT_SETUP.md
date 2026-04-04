# Contact Form Setup Instructions

This document explains how to set up the contact form functionality with email notifications and Google Calendar integration.

## Prerequisites

1. **Google Cloud Console Project**
2. **Outlook Email Account** (jrafael11@outlook.com)
3. **Node.js and npm**

## Step 1: Google Calendar API Setup

### 1.1 Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Calendar API

### 1.2 Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:5000/auth/google/callback` (for development)
   - `https://yourdomain.com/auth/google/callback` (for production)
5. Note down your Client ID and Client Secret

### 1.3 Get Refresh Token

1. Use the OAuth 2.0 Playground: https://developers.google.com/oauthplayground/
2. Set your OAuth 2.0 configuration
3. Select "Google Calendar API v3" > "Calendar API v3"
4. Authorize and exchange for refresh token

## Step 2: Outlook Email Setup

### 2.1 Enable App Passwords

1. Go to [Microsoft Account Security](https://account.microsoft.com/security)
2. Enable 2-factor authentication
3. Generate an app password for your application

## Step 3: Environment Variables

Create a `.env` file in your project root with:

```bash
# Google Calendar API Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback
GOOGLE_REFRESH_TOKEN=your_google_refresh_token_here

# Outlook Email Configuration
OUTLOOK_EMAIL=jrafael11@outlook.com
OUTLOOK_PASSWORD=your_outlook_app_password_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

## Step 4: Install Dependencies

```bash
npm install nodemailer googleapis google-auth-library dotenv
npm install --save-dev @types/nodemailer
```

## Step 5: Test the Setup

1. Start your server: `npm run dev`
2. Test the contact form at `/api/contact/health`
3. Submit a test contact form

## Features

✅ **Contact Form Modal**

- Professional design matching your website
- Form validation
- Responsive layout

✅ **Email Notifications**

- Sends to jrafael11@outlook.com
- Includes all contact details
- HTML formatted emails

✅ **Google Calendar Integration**

- Automatically creates meetings
- Sets reminders (1 day + 15 minutes before)
- Includes attendee details

✅ **Time Constraints**

- Weekdays: Only after 8:00 PM
- Weekends: Any time 9:00 AM - 8:00 PM

✅ **Bilingual Support**

- English and Spanish translations
- Automatic language detection

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact/health` - Health check

## Troubleshooting

### Common Issues:

1. **Google Calendar API errors**: Check credentials and refresh token
2. **Email sending fails**: Verify Outlook app password
3. **CORS issues**: Ensure proper origin headers

### Debug Mode:

Set `NODE_ENV=development` for detailed error logs.

## Security Notes

- Never commit `.env` files to version control
- Use app passwords, not regular passwords
- Regularly rotate refresh tokens
- Implement rate limiting for production

## Support

For issues or questions, check the server logs and ensure all environment variables are properly set.












