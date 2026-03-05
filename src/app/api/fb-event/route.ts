import { NextRequest, NextResponse } from "next/server";
import { sendCAPIEvent } from "@/lib/facebook-capi";

/**
 * POST /api/fb-event
 * Generic endpoint for sending browser events to Facebook CAPI (server-side).
 * Used for Contact (phone click) and any other custom events.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventName, contentName, contentCategory, eventId, sourceUrl, fbc, fbp } = body;

    if (!eventName) {
      return NextResponse.json({ error: "eventName required" }, { status: 400 });
    }

    await sendCAPIEvent({
      eventName,
      eventSourceUrl: sourceUrl || req.headers.get("referer") || undefined,
      eventId,
      userData: {
        clientIpAddress: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || undefined,
        clientUserAgent: req.headers.get("user-agent") || undefined,
        fbc,
        fbp,
      },
      customData: {
        content_name: contentName,
        content_category: contentCategory,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("FB Event API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
