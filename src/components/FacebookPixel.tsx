"use client";

import Script from "next/script";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export default function FacebookPixel() {
  if (!FB_PIXEL_ID) return null;

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

/* ─── Cookie helpers for deduplication ─── */

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

/* ─── Browser Pixel tracking ─── */

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
}

export function trackCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
}

/* ─── Dual tracking: Browser Pixel + Server CAPI ─── */

/**
 * Send Contact + Lead events (phone click) to both browser pixel and server CAPI.
 */
export function trackPhoneClick(contentName: string) {
  const contactEventId = generateEventId();
  const leadEventId = generateEventId();

  if (typeof window !== "undefined" && window.fbq) {
    // Browser-side Contact event
    window.fbq("track", "Contact", {
      content_name: contentName,
      content_category: "Phone Call",
      eventID: contactEventId,
    });
    // Browser-side Lead event
    window.fbq("track", "Lead", {
      content_name: contentName,
      content_category: "Phone Call",
      eventID: leadEventId,
    });
  }

  const payload = {
    contentName,
    contentCategory: "Phone Call",
    sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    fbc: getCookie("_fbc"),
    fbp: getCookie("_fbp"),
  };

  // Server-side Contact CAPI
  fetch("/api/fb-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, eventName: "Contact", eventId: contactEventId }),
  }).catch((err) => console.error("CAPI phone Contact event error:", err));

  // Server-side Lead CAPI
  fetch("/api/fb-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, eventName: "Lead", eventId: leadEventId }),
  }).catch((err) => console.error("CAPI phone Lead event error:", err));
}

/**
 * Get deduplication params for Lead events (used by forms before submitting to /api/lead).
 */
export function getLeadEventMeta() {
  return {
    eventId: generateEventId(),
    sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    fbc: getCookie("_fbc") || "",
    fbp: getCookie("_fbp") || "",
  };
}
