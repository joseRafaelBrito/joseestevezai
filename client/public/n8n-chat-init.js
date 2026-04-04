/**
 * Loaded as a static module so Vite does not strip it from index.html on build.
 * Production uses /api/n8n-chat (Netlify function → n8n) to avoid browser CORS.
 */
import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat@0.59.1/dist/chat.bundle.es.js";

const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const webhookUrl = isLocal
  ? "https://n8n-2-g1zv.onrender.com/webhook/983207f3-6370-4197-928b-691f23a6b049/chat"
  : `${window.location.origin}/api/n8n-chat`;

createChat({
  webhookUrl,
  target: "#n8n-chat",
  mode: "window",
  showWelcomeScreen: false,
  defaultLanguage: "en",
  initialMessages: ["Hi there! 👋", "How can I assist you today?"],
  i18n: {
    en: {
      title: "Hi there! 👋",
      subtitle: "Start a chat. We're here to help you 24/7.",
      footer: "",
      getStarted: "New Conversation",
      inputPlaceholder: "Type your question...",
    },
  },
  branding: { showPoweredBy: false },
});
