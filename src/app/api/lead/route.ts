import { NextRequest, NextResponse } from "next/server";
import { sendCAPIEvent } from "@/lib/facebook-capi";

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, interest, message, listing, eventId, sourceUrl, fbc, fbp } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // --- Facebook Conversions API: Lead event (server-side) ---
    sendCAPIEvent({
      eventName: "Lead",
      eventSourceUrl: sourceUrl || req.headers.get("referer") || undefined,
      eventId,
      userData: {
        email,
        phone,
        firstName,
        lastName,
        clientIpAddress: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || undefined,
        clientUserAgent: req.headers.get("user-agent") || undefined,
        fbc,
        fbp,
      },
      customData: {
        content_name: listing ? `${listing} Inquiry` : "General Inquiry",
        content_category: "Real Estate",
      },
    }).catch((err) => console.error("CAPI Lead error:", err));

    // --- GHL Webhook ---
    if (!GHL_WEBHOOK_URL) {
      console.warn("GHL_WEBHOOK_URL not set — lead logged only:", body);
      return NextResponse.json({ ok: true, warn: "webhook_not_configured" });
    }

    const ghlPayload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      tags: ["yongs-cove", `interest-${interest || "general"}`],
      source: "Yongs Cove Landing Page",
      customField: {
        interest: interest || "",
        message: message || "",
        listing: listing || "General Inquiry",
      },
    };

    const ghlRes = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlRes.ok) {
      console.error("GHL webhook error:", ghlRes.status, await ghlRes.text());
      return NextResponse.json(
        { error: "Failed to submit lead" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
