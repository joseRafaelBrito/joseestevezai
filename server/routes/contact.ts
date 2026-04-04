import express from "express";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import config from "../config";

const router = express.Router();

// Google Calendar API configuration
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const GOOGLE_CLIENT_ID = config.google.clientId;
const GOOGLE_CLIENT_SECRET = config.google.clientSecret;
const GOOGLE_REDIRECT_URI = config.google.redirectUri;
const GOOGLE_REFRESH_TOKEN = config.google.refreshToken;

// Outlook email configuration
const OUTLOOK_EMAIL = config.outlook.email;
const OUTLOOK_PASSWORD = config.outlook.password;

// Create OAuth2 client
const oauth2Client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

// Set refresh token if available
if (GOOGLE_REFRESH_TOKEN) {
  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });
}

// Create Google Calendar client
const calendar = google.calendar({ version: "v3", auth: oauth2Client });

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: OUTLOOK_EMAIL,
      pass: OUTLOOK_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
};

// Helper function to create Google Calendar event
const createCalendarEvent = async (contactData: any) => {
  try {
    const { firstName, lastName, email, message, date, time } = contactData;

    // Parse date and time
    const [year, month, day] = date.split("-").map(Number);
    const [hour, minute] = time.split(":").map(Number);

    const startDate = new Date(year, month - 1, day, hour, minute);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration

    const event = {
      summary: `Meeting with ${firstName} ${lastName}`,
      description: `Contact: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${
        message || "No message provided"
      }`,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: "America/New_York",
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: "America/New_York",
      },
      attendees: [{ email: OUTLOOK_EMAIL }, { email: email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 1 day before
          { method: "popup", minutes: 15 }, // 15 minutes before
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
      sendUpdates: "all",
    });

    return response.data;
  } catch (error) {
    console.error("Error creating calendar event:", error);
    throw error;
  }
};

// Helper function to send email
const sendEmail = async (contactData: any) => {
  try {
    const transporter = createTransporter();
    const { firstName, lastName, email, message, date, time } = contactData;

    // Format date and time for display
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Message:</strong> ${message || "No message provided"}</p>
      
      <p>A meeting has been scheduled in your Google Calendar.</p>
    `;

    const mailOptions = {
      from: OUTLOOK_EMAIL,
      to: OUTLOOK_EMAIL,
      subject: `New Contact Form: ${firstName} ${lastName}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// POST /api/contact - Handle contact form submission
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, message, date, time } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !date || !time) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Create contact data object
    const contactData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      message: message ? message.trim() : "",
      date,
      time,
    };

    // Send email notification
    await sendEmail(contactData);

    // Create Google Calendar event
    if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET && GOOGLE_REFRESH_TOKEN) {
      await createCalendarEvent(contactData);
    }

    res.status(200).json({
      message: "Contact form submitted successfully",
      data: contactData,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
});

// GET /api/contact/health - Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Contact API is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;
