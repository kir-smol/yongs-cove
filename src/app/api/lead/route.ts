import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, interest, message } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

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
        listing: "13 East Vista Terrace, Quinte West",
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
