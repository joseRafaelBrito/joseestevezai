/**
 * n8n chat — loaded from public/ so Vite does not strip it from index.html.
 * Dynamic import + try/catch so CDN or createChat failures never blank the page.
 * Production: same-origin /api/n8n-chat → Netlify function → n8n (avoids CORS).
 */
const CHAT_MODULE =
  "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

const N8N_WEBHOOK_DIRECT =
  "https://n8n-3-ydel.onrender.com/webhook/f48c8ac6-83e6-4db0-8474-7fc3e44a8abd/chat";

function isLocalDev() {
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1";
}

async function initN8nChat() {
  if (!document.getElementById("n8n-chat")) {
    console.warn("[n8n-chat] #n8n-chat missing, skip init");
    return;
  }

  let createChat;
  try {
    const mod = await import(CHAT_MODULE);
    createChat = mod.createChat;
    if (typeof createChat !== "function") {
      console.warn("[n8n-chat] createChat not exported");
      return;
    }
  } catch (err) {
    console.warn("[n8n-chat] failed to load chat bundle from CDN", err);
    return;
  }

  const webhookUrl = isLocalDev()
    ? N8N_WEBHOOK_DIRECT
    : `${window.location.origin}/api/n8n-chat`;

  try {
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
  } catch (err) {
    console.warn("[n8n-chat] createChat failed", err);
  }
}

initN8nChat().catch((err) => {
  console.warn("[n8n-chat] unexpected init error", err);
});
