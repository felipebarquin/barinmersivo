import Link from "next/link";

const cards = [
  {
    title: "Immersive Sports Venues",
    desc: "Premium shared-reality venues for live sports and major events.",
  },
  {
    title: "StadiumXR Modular Systems",
    desc: "Pop-up stadium experiences deployable inside existing venues.",
  },
  {
    title: "Global Franchise Model",
    desc: "A repeatable playbook designed for international expansion.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-transparent p-10">
        <div className="text-xs tracking-[0.22em] text-white/60">
          IMMERSIVE SPORTS SL · SPAIN HQ
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Estadios Infinitos
        </h1>

        <p className="mt-5 max-w-2xl text-white/70">
          Redefining the way the world experiences live sports — immersive venues, StadiumXR
          systems, and a scalable global franchise model designed for partners and sponsors.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/partners"
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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-base font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">Why now</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>• Fans want stadium energy without stadium constraints.</li>
            <li>• Immersive tech enables premium shared experiences.</li>
            <li>• Brands seek high-attention environments with measurable activation.</li>
            <li>• A scalable model creates global sponsorship inventory.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-2xl font-semibold">Global expansion vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Starting from Spain (HQ), expanding to Latin America, Europe, and North America through
            pilots, flagship venues, and a franchise-ready playbook.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
            {["Spain", "LatAm", "Europe", "North America"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/6 to-transparent p-10">
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
    </main>
  );
}
