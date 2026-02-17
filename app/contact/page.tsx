"use client";

import { useState } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with IMMERSIVE SPORTS SL to build Infinite Stadiums worldwide — premium sponsorship inventory designed for scale.",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-10">
        <div className="text-xs tracking-[0.22em] text-white/60">CONTACT</div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Let’s build Infinite Stadiums together
        </h1>
        <p className="mt-5 max-w-3xl text-white/70">
          Whether you're a brand, venue operator, rights holder, investor, or technology partner —
          we’d love to explore collaboration.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          {submitted ? (
            <div>
              <h2 className="text-2xl font-semibold">Thank you.</h2>
              <p className="mt-3 text-sm text-white/70">
                Your message has been received. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">Send us a message</h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm text-white/70">Full Name</label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70">Company</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70">I’m interested in</label>
                  <select
                    className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-white/40"
                  >
                    <option>Brand Partnership</option>
                    <option>Venue Deployment</option>
                    <option>Investment Opportunity</option>
                    <option>Franchise Expansion</option>
                    <option>Technology Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/70">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-white/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>

        {/* Info Panel */}
        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">Headquarters</h2>
          <p className="mt-4 text-sm text-white/70">
            IMMERSIVE SPORTS SL  
            <br />
            Spain · Global Expansion Platform
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">What happens next?</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Initial review within 48 hours</li>
              <li>• Strategic alignment call (if relevant)</li>
              <li>• Pilot or partnership roadmap discussion</li>
            </ul>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Currently open for:</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Pilot venue partners</li>
              <li>• Strategic brand sponsors</li>
              <li>• Regional expansion collaborators</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
