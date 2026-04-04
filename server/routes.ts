import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import contactRouter from "./routes/contact";

const N8N_WEBHOOK_URL = "https://n8n-2-g1zv.onrender.com/webhook/983207f3-6370-4197-928b-691f23a6b049/chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact API routes
  app.use("/api/contact", contactRouter);

  // Proxy for n8n chat widget to avoid CORS issues
  app.all("/api/chat", async (req: Request, res: Response) => {
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: req.method !== "GET" && req.method !== "HEAD" ? JSON.stringify(req.body) : undefined,
      });

      const data = await response.text();
      res.status(response.status).set("Content-Type", response.headers.get("content-type") || "application/json").send(data);
    } catch (err) {
      res.status(502).json({ error: "Chat service unavailable" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
