"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "./FacebookPixel";
import { SHARED_AGENTS } from "@/data/properties";

export default function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const agent = SHARED_AGENTS[0];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    trackEvent("Lead", {
      content_name: "General Inquiry",
      content_category: "Real Estate",
    });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
    } catch (err) {
      console.error("Lead form error:", err);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Thank You!</h2>
          <p className="mt-3 text-muted">
            We&apos;ve received your inquiry. One of our agents will be in touch
            within 24 hours to assist you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left side */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Book a Viewing
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Interested in one of our luxury homes at Young&apos;s Cove? Schedule a
              private tour or request more information about any of our available
              properties. Our agents are ready to help.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted">Young&apos;s Cove, Quinte West, Ontario</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Viewing Hours</p>
                  <p className="text-sm text-muted">By appointment — 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us Directly</p>
                  <p className="text-sm text-muted">
                    <a href={`tel:${agent.phone}`} className="text-primary hover:underline">{agent.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Builder</p>
                  <p className="text-sm text-muted">Briarwood Homes — New construction, luxury finishes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="home-firstName" className="block text-sm font-medium text-foreground mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="home-firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="home-lastName" className="block text-sm font-medium text-foreground mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="home-lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="home-email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="home-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="home-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="home-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="(613) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="home-interest" className="block text-sm font-medium text-foreground mb-1.5">
                  I&apos;m interested in
                </label>
                <select
                  id="home-interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="viewing">Scheduling a Viewing</option>
                  <option value="info">More Information</option>
                  <option value="pricing">Pricing &amp; Financing</option>
                  <option value="similar">Available Properties at Young&apos;s Cove</option>
                </select>
              </div>

              <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us which property you're interested in, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-accent hover:bg-accent-light disabled:opacity-70 text-white font-semibold rounded-lg transition-colors"
              >
                {loading ? "Sending..." : "Get in Touch"}
              </button>

              <p className="text-xs text-muted text-center">
                By submitting, you agree to receive communications about our listings.
                We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
