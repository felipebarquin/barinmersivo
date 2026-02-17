import Link from "next/link";

const values = [
  {
    title: "Experience-first design",
    desc: "We treat immersion as a product: architecture, content, sound, and social energy engineered together.",
  },
  {
    title: "Scalable systems",
    desc: "From pilots to global rollout: standardized tech stack, operations, and partnership inventory.",
  },
  {
    title: "Partner-aligned growth",
    desc: "We build with brands, rights holders, and venues — designing integrations that add value to the fan experience.",
  },
];

const leadership = [
  {
    role: "Founder / Executive Lead",
    name: "Confidential (Stealth Mode)",
    desc: "Leading product vision, strategy, and international rollout. Background in immersive experiences (XR) and venture building.",
  },
  {
    role: "Operations & Venue Strategy",
    name: "To be announced",
    desc: "Venue playbooks, rollout operations, and unit economics. Responsible for pilot-to-flagship standardization.",
  },
  {
    role: "Partnerships & Sponsorships",
    name: "To be announced",
    desc: "Strategic partnerships, sponsorship inventory design, and global partner onboarding.",
  },
];

const advisory = [
  {
    focus: "Venue & Hospitality",
    desc: "Flagship venue design, fan flow, service model, and commercial optimization.",
  },
  {
    focus: "Sports Media & Rights",
    desc: "Content ecosystem, rights alignment, distribution strategy, and partner frameworks.",
  },
  {
    focus: "Immersive Technology (XR)",
    desc: "Large-format immersive systems, spatial audio, XR zones, and experiential hardware stack.",
  },
  {
    focus: "Global Expansion",
    desc: "Rollout strategy, franchising frameworks, and international go-to-market.",
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Partner with IMMERSIVE SPORTS SL to build Infinite Stadiums worldwide — premium sponsorship inventory designed for scale.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-10">
        <div className="text-xs tracking-[0.22em] text-white/60">ABOUT</div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          IMMERSIVE SPORTS SL
        </h1>
        <p className="mt-5 max-w-3xl text-white/70">
          A Spain-based company building <span className="text-white">Infinite Stadiums</span> — a scalable platform
          for premium, immersive sports viewing experiences designed for global expansion.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/infinite-stadiums"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
          >
            Discover the Vision
          </Link>
          <Link
            href="/partners"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white/35 hover:text-white"
          >
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Build premium shared-reality venues where fans experience live sports together — with immersion, emotion,
            and community — designed to scale across cities.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Create a global network of Infinite Stadiums — “stadiums everywhere” — enabling fans to access
            world-class sports experiences without traditional stadium constraints.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What we stand for</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          We combine design, technology, and operations into one repeatable system.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-semibold">{v.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/4 p-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Leadership</h2>
            <p className="mt-2 max-w-3xl text-sm text-white/70">
              We are building in a focused, partner-first approach. Some roles remain confidential while pilots and
              strategic agreements are finalized.
            </p>
          </div>
          <div className="text-xs text-white/50">Stealth mode: selective disclosure</div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs tracking-[0.2em] text-white/60">{p.role}</div>
              <div className="mt-2 text-base font-semibold">{p.name}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Advisory network</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          We collaborate with experts across venue operations, sports media, immersive technology, and expansion.
          Advisory profiles can be shared under NDA when relevant to partnership discussions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {advisory.map((a) => (
            <div key={a.focus} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-semibold">{a.focus}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/6 to-transparent p-10">
        <h2 className="text-2xl font-semibold">Interested in collaborating?</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          We’re selecting partners for pilot deployments and global rollout. Let’s explore how your brand or venue can
          become part of Infinite Stadiums.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
          >
            Contact us
          </Link>
          <Link
            href="/partners"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white/35 hover:text-white"
          >
            Partners & Sponsors
          </Link>
        </div>
      </section>
    </main>
  );
}
