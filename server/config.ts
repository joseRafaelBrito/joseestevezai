import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const config = {
  // Google Calendar API
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    redirectUri:
      process.env.GOOGLE_REDIRECT_URI ||
      "http://localhost:5000/auth/google/callback",
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN || "",
  },

  // Outlook Email
  outlook: {
    email: process.env.OUTLOOK_EMAIL || "jrafael11@outlook.com",
    password: process.env.OUTLOOK_PASSWORD || "",
  },

  // Server
  server: {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || "development",
  },

  // Time constraints for meetings
  meetingConstraints: {
    weekdays: {
      startTime: "20:00", // 8:00 PM
      endTime: "21:30", // 9:30 PM
    },
    weekends: {
      startTime: "09:00", // 9:00 AM
      endTime: "20:00", // 8:00 PM
    },
  },
};

export default config;










