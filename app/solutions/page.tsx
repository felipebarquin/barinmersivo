import Link from "next/link";

const solutions = [
  {
    title: "Immersive Sports Venues",
    desc: "Flagship Infinite Stadium locations engineered for premium shared-reality sports experiences.",
    bullets: [
      "Large-format immersive screen environments",
      "StadiumXR seating zones",
      "Integrated sponsor inventory",
      "Event-based programming & memberships",
    ],
  },
  {
    title: "StadiumXR Modular Systems",
    desc: "Deployable immersive systems inside existing venues (bars, clubs, arenas, event spaces).",
    bullets: [
      "Semi-enveloping screen modules",
      "Portable spatial audio system",
      "Branded activation zones",
      "Low-CAPEX pilot entry model",
    ],
  },
  {
    title: "Immersive Content Production",
    desc: "Capture, adapt, and curate immersive sports content aligned with venue experiences.",
    bullets: [
      "360° & immersive capture workflows",
      "Event-specific show production",
      "Screen overlays & sponsor integration",
      "Global content partner alignment",
    ],
  },
  {
    title: "Franchise & Expansion Playbook",
    desc: "A structured operational and technical framework to scale across cities.",
    bullets: [
      "Venue design blueprint",
      "Technology stack standardization",
      "Sponsorship inventory framework",
      "Training & operational manuals",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-10">
        <div className="text-xs tracking-[0.22em] text-white/60">SOLUTIONS</div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          A scalable platform for immersive sports experiences
        </h1>
        <p className="mt-5 max-w-3xl text-white/70">
          IMMERSIVE SPORTS SL delivers modular systems, flagship venues, immersive content production,
          and a franchise-ready expansion model designed for global rollout.
        </p>
      </section>

      {/* Core Solutions */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-sm text-white/70">{s.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* MVP vs Flagship */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/4 p-10">
        <h2 className="text-2xl font-semibold">Deployment models</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          The Infinite Stadium system adapts to capital availability and strategic intent.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs tracking-[0.2em] text-white/60">MVP / PILOT</div>
            <h3 className="mt-2 text-lg font-semibold">StadiumXR Module</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Integrated inside existing venue</li>
              <li>• Semi-enveloping immersive screen</li>
              <li>• Limited but premium sponsorship inventory</li>
              <li>• Data-driven validation phase</li>
              <li>• Lower CAPEX entry</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-8">
            <div className="text-xs tracking-[0.2em] text-white/60">FLAGSHIP VENUE</div>
            <h3 className="mt-2 text-lg font-semibold">Full Infinite Stadium</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Purpose-designed immersive architecture</li>
              <li>• Multi-zone StadiumXR seating</li>
              <li>• Premium sponsor integrations</li>
              <li>• Recurring event calendar</li>
              <li>• Franchise-ready blueprint</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-lg font-semibold">Brands & Sponsors</h3>
          <p className="mt-3 text-sm text-white/70">
            High-attention environments with immersive integration and scalable global presence.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-lg font-semibold">Venue Operators</h3>
          <p className="mt-3 text-sm text-white/70">
            Upgrade existing spaces with premium immersive modules that increase dwell time and revenue.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-lg font-semibold">Investors & Franchisees</h3>
          <p className="mt-3 text-sm text-white/70">
            Participate in the rollout of a repeatable, scalable experiential sports platform.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/6 to-transparent p-10">
        <h2 className="text-2xl font-semibold">Let’s build the next generation of sports venues</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          We are currently selecting partners for pilot deployments and flagship expansion.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/partners"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
          >
            Become a Partner
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white/35 hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
