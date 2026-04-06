/**
 * Proxies browser chat requests to n8n so production avoids CORS
 * (browser → same-origin /api/n8n-chat → this function → n8n webhook).
 */
const N8N_WEBHOOK =
  "https://n8n-3-ydel.onrender.com/webhook/f48c8ac6-83e6-4db0-8474-7fc3e44a8abd/chat";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With, Accept, Origin",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors };
  }

  const target = new URL(N8N_WEBHOOK);
  if (event.queryStringParameters) {
    for (const [k, v] of Object.entries(event.queryStringParameters)) {
      if (v != null) target.searchParams.set(k, v);
    }
  }

  const forwardHeaders = {};
  const ct = event.headers["content-type"] || event.headers["Content-Type"];
  if (ct) forwardHeaders["Content-Type"] = ct;

  try {
    const res = await fetch(target.toString(), {
      method: event.httpMethod,
      headers: forwardHeaders,
      body:
        event.httpMethod !== "GET" && event.httpMethod !== "HEAD"
          ? event.body
          : undefined,
    });

    const contentType = res.headers.get("content-type") || "application/json";
    const body = await res.text();

    return {
      statusCode: res.status,
      body,
      headers: {
        "Content-Type": contentType,
        ...cors,
      },
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({
        error: "n8n proxy failed",
        message: err instanceof Error ? err.message : String(err),
      }),
      headers: {
        "Content-Type": "application/json",
        ...cors,
      },
    };
  }
};
