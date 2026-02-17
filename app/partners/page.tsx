import Link from "next/link";

const perks = [
  {
    title: "Premium audience, high attention",
    desc: "A sports-first venue where brand presence is integrated into the experience — not ignored like a banner.",
  },
  {
    title: "High-impact placements",
    desc: "Immersive screens, curated events, and StadiumXR zones create premium sponsorship inventory.",
  },
  {
    title: "Scalable global rollout",
    desc: "A repeatable playbook designed to expand across cities — with localized activation possibilities.",
  },
  {
    title: "First-mover advantage",
    desc: "A new category between home viewing and stadium attendance — early partners shape the ecosystem.",
  },
];

const inventory = [
  {
    title: "Naming & signature nights",
    desc: "Brand-led event series: race nights, derby nights, finals, world cups — with consistent branding and storytelling.",
  },
  {
    title: "Immersive screen takeovers",
    desc: "Opening moments, intermissions, leaderboard overlays, and sponsor-branded highlights integrated into the show.",
  },
  {
    title: "StadiumXR zones",
    desc: "Dedicated sponsor areas: tribune seating, premium lounges, XR experiences — designed as branded worlds.",
  },
  {
    title: "Tournaments & memberships",
    desc: "Sponsor-backed leagues, prizes, seasonal passes, and VIP access packages that drive recurring visits.",
  },
  {
    title: "Product integration",
    desc: "From beverage partnerships to hardware providers (screens, audio, XR) — co-branding and preferred supplier roles.",
  },
  {
    title: "Insights & performance",
    desc: "Event-based reporting: attendance, engagement proxies, conversion initiatives (subject to local regulations).",
  },
];

const roadmap = [
  { phase: "Phase 01", title: "Pilot & validation", desc: "Pop-up StadiumXR deployments + early partner activations." },
  { phase: "Phase 02", title: "First flagship venue", desc: "Immersive sports bar model consolidated with scalable operations." },
  { phase: "Phase 03", title: "International expansion", desc: "Franchise-ready playbook and multi-city rollout with partners." },
];

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        {/* Hero */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-10">
          <div className="text-xs tracking-[0.22em] text-white/60">PARTNERS & SPONSORS</div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Partner with IMMERSIVE SPORTS SL
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">
            We build <span className="text-white">Infinite Stadiums</span>: immersive sports venues and StadiumXR systems
            where fans experience live sports together — with premium brand integration designed for scale.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
            >
              Become a Partner
            </Link>
            <Link
              href="/infinite-stadiums"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white/35 hover:text-white"
            >
              Discover the Vision
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {perks.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Inventory */}
        <section>
          <h2 className="text-2xl font-semibold">Sponsorship inventory</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Sponsorship is designed as part of the experience — not an afterthought. Choose from modular packages or
            build a custom partnership across locations.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {inventory.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-base font-semibold">{item.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="rounded-3xl border border-white/10 bg-white/4 p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Roadmap to global rollout</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            We start with pilots, consolidate a flagship model, and scale internationally with partners.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {roadmap.map((r) => (
              <div key={r.phase} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs tracking-[0.2em] text-white/60">{r.phase}</div>
                <div className="mt-2 text-base font-semibold">{r.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{r.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/6 to-transparent p-10">
          <h2 className="text-2xl font-semibold">Let’s build this together</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            If you’re a brand, rights holder, venue operator, or technology partner — we’d love to explore a partnership.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
            >
              Contact us
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white/35 hover:text-white"
            >
              View Solutions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
