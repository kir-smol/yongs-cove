"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "./FacebookPixel";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Track lead event for Facebook Pixel
    trackEvent("Lead", {
      content_name: "Young's Cove Inquiry",
      content_category: "Real Estate",
    });

    // TODO: Connect to your backend / CRM / email service
    // For now, simulate submission
    await new Promise((r) => setTimeout(r, 1000));

    console.log("Lead captured:", Object.fromEntries(data));
    setSubmitted(true);
    setLoading(false);
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
            We&apos;ve received your inquiry. One of our agents will be in touch within 24 hours
            to schedule your private viewing of Young&apos;s Cove.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Interested in Young&apos;s Cove?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Schedule a private tour or request detailed information about this exceptional
              waterfront property. Our agents are ready to help you find your dream home.
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
                  <p className="text-sm text-muted">Young&apos;s Cove, New Brunswick, Canada</p>
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
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted">(555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-1.5">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="viewing">Scheduling a Viewing</option>
                  <option value="info">More Information</option>
                  <option value="pricing">Pricing Details</option>
                  <option value="financing">Financing Options</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about what you're looking for..."
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
                By submitting, you agree to receive communications about Young&apos;s Cove.
                We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
