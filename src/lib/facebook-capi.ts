/**
 * Facebook Conversions API (CAPI) — server-side event tracking.
 * Sends events directly to Meta servers for reliable attribution,
 * complementing the browser-side Pixel.
 */

const PIXEL_ID = process.env.FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_CAPI_ACCESS_TOKEN;
const API_VERSION = "v21.0";

interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbc?: string;   // _fbc cookie
  fbp?: string;   // _fbp cookie
}

interface CustomData {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

interface CAPIEvent {
  eventName: string;
  eventSourceUrl?: string;
  userData: UserData;
  customData?: CustomData;
  eventId?: string;  // for deduplication with browser pixel
}

function hashSHA256(value: string): Promise<string> {
  // Use Web Crypto API available in Next.js edge/node runtime
  const encoder = new TextEncoder();
  const data = encoder.encode(value.trim().toLowerCase());
  return crypto.subtle.digest("SHA-256", data).then((buf) => {
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  });
}

export async function sendCAPIEvent({
  eventName,
  eventSourceUrl,
  userData,
  customData,
  eventId,
}: CAPIEvent) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("FB CAPI: Missing PIXEL_ID or ACCESS_TOKEN — event not sent:", eventName);
    return null;
  }

  // Hash PII fields as required by Meta
  const hashedUserData: Record<string, string | undefined> = {};

  if (userData.email) {
    hashedUserData.em = await hashSHA256(userData.email);
  }
  if (userData.phone) {
    // Strip non-digits, keep +
    const cleaned = userData.phone.replace(/[^0-9]/g, "");
    hashedUserData.ph = await hashSHA256(cleaned);
  }
  if (userData.firstName) {
    hashedUserData.fn = await hashSHA256(userData.firstName);
  }
  if (userData.lastName) {
    hashedUserData.ln = await hashSHA256(userData.lastName);
  }
  if (userData.clientIpAddress) {
    hashedUserData.client_ip_address = userData.clientIpAddress;
  }
  if (userData.clientUserAgent) {
    hashedUserData.client_user_agent = userData.clientUserAgent;
  }
  if (userData.fbc) {
    hashedUserData.fbc = userData.fbc;
  }
  if (userData.fbp) {
    hashedUserData.fbp = userData.fbp;
  }

  const eventPayload = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: eventSourceUrl,
    event_id: eventId,
    action_source: "website",
    user_data: hashedUserData,
    custom_data: customData,
  };

  const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [eventPayload] }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("FB CAPI error:", JSON.stringify(result));
      return null;
    }

    console.log(`FB CAPI: ${eventName} sent successfully`);
    return result;
  } catch (err) {
    console.error("FB CAPI fetch error:", err);
    return null;
  }
}
