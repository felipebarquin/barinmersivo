"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
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
              <select className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-white/40">
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
              className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
