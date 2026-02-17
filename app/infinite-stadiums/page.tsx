import Link from "next/link";

const pillars = [
  {
    title: "Stadium energy, without stadium limits",
    desc: "A shared, premium atmosphere that feels live — without tickets, travel, or capacity constraints.",
  },
  {
    title: "Immersion as a product",
    desc: "Large-format immersive screens + spatial audio + curated seating create a new category of sports viewing.",
  },
  {
    title: "Built to scale",
    desc: "A repeatable venue system and operational playbook designed for multi-city rollout and franchising.",
  },
];

const steps = [
  {
    n: "01",
    title: "Design the experience",
    desc: "A venue layout with immersive viewing, StadiumXR seating, and modular zones for activations.",
  },
  {
    n: "02",
    title: "Deploy the system",
    desc: "From pop-ups inside existing venues to flagship builds — measured, iterative, and data-informed.",
  },
  {
    n: "03",
    title: "Activate partners",
    desc: "Sponsorship inventory is integrated into the experience: screens, events, memberships, and zones.",
  },
  {
    n: "04",
    title: "Scale globally",
    desc: "Standardize the model into a franchise-ready playbook and expand with strategic partners.",
  },
];

const roadmap = [
  {
    phase: "Phase 01",
    title: "Pilot & validation",
    desc: "StadiumXR pop-ups + early partner activations to validate demand, pricing, and operations.",
  },
  {
    phase: "Phase 02",
    title: "Flagship venue",
    desc: "A consolidated immersive sports venue model with repeatable operations and premium sponsorship inventory.",
  },
  {
    phase: "Phase 03",
    title: "International rollout",
    desc: "Multi-city expansion through franchising and partnerships — building a global network of Infinite Stadiums.",
  },
];

const faqs = [
  {
    q: "Is this a bar concept or a technology company?",
    a: "IMMERSIVE SPORTS SL is the parent company building a scalable venue system. A venue can include food & beverage, but the product is the experience.",
  },
  {
    q: "What makes it different from a sports bar with many screens?",
    a: "Infinite Stadiums focuses on immersion and social energy: large-format immersive viewing, spatial audio, StadiumXR seating, and integrated activations.",
  },
  {
    q: "How do sponsors integrate without feeling intrusive?",
    a: "Sponsorship is designed into the experience: screen moments, event series, zones, memberships, and premium inventory that aligns with attention peaks.",
  },
  {
    q: "Does it require building a new venue from scratch?",
    a: "Not necessarily. The model supports pop-ups inside existing venues first, then flagship builds once metrics are validated.",
  },
  {
    q: "What sports does it support?",
    a: "The platform is sport-agnostic: football, rugby, motorsports, combat sports, esports, and major global events.",
  },
  {
    q: "How does the franchise model work?",
    a: "We standardize the experience design, technical stack, content workflows, and operations into a playbook that can be replicated across cities.",
  },
  {
    q: "How do you handle rights and content?",
    a: "We work within local regulations and rights ecosystems. Content production and immersive capture are developed with partners and rights holders where applicable.",
  },
  {
    q: "What is the partner ask today?",
    a: "Pilot partners and sponsors to co-build initial deployments, define premium inventory, and scale into flagship venues and expansion.",
  },
];

export default function InfiniteStadiumsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-10">
        <div className="text-xs tracking-[0.22em] text-white/60">INFINITE STADIUMS</div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          A new category between home viewing and stadium attendance
        </h1>
        <p className="mt-5 max-w-3xl text-white/70">
          Infinite Stadiums delivers stadium-scale emotion in premium, immersive venues — built to scale globally
          through a repeatable system, partner activations, and franchising.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
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
            Talk to us
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-semibold">{p.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The gap: Home vs Stadium */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">The problem</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Watching at home is convenient, but it lacks energy. Stadium attendance is unforgettable, but it’s limited
            by cost, travel, time, and capacity. Most fans live between those extremes.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">The solution</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Infinite Stadiums creates a third option: a premium shared-reality venue that feels live — immersive viewing,
            StadiumXR seating, spatial audio, and integrated partner activations.
          </p>
        </div>
      </section>

      {/* Simple diagram (no images) */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/4 p-10">
        <h2 className="text-2xl font-semibold">Where Infinite Stadiums sits</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          Not a traditional sports bar. Not a cinema. Not a stadium. A premium venue engineered for sports energy, built
          to scale.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs tracking-[0.2em] text-white/60">HOME</div>
            <div className="mt-2 text-base font-semibold">Convenient</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Low energy</li>
              <li>• Individual viewing</li>
              <li>• Limited immersion</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <div className="text-xs tracking-[0.2em] text-white/60">INFINITE STADIUMS</div>
            <div className="mt-2 text-base font-semibold">Premium shared reality</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Stadium-scale emotion</li>
              <li>• Immersive screens + audio</li>
              <li>• Sponsor & partner activations</li>
              <li>• Designed to scale</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs tracking-[0.2em] text-white/60">STADIUM</div>
            <div className="mt-2 text-base font-semibold">Unforgettable</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• High cost</li>
              <li>• Travel & capacity limits</li>
              <li>• Not always accessible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          A system approach: experience design, tech stack, partner inventory, and a rollout playbook.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs tracking-[0.2em] text-white/60">{s.n}</div>
              <div className="mt-2 text-base font-semibold">{s.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/4 p-10">
        <h2 className="text-2xl font-semibold">Roadmap</h2>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          Start with pilots, consolidate a flagship model, then expand internationally through franchising and partners.
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

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-semibold">{f.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/6 to-transparent p-10">
        <h2 className="text-2xl font-semibold">Ready to partner?</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          We’re opening the first pilots and building the partner ecosystem for global expansion.
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
