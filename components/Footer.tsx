import Link from "next/link";

const links = [
  { href: "/infinite-stadiums", label: "Infinite Stadiums" },
  { href: "/solutions", label: "Solutions" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-xs tracking-[0.28em] text-white/60">IMMERSIVE SPORTS</div>
            <div className="mt-2 text-lg font-semibold tracking-tight text-white">
              SL <span className="text-white/40 font-normal">· Spain HQ</span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Building <span className="text-white/80">Infinite Stadiums</span>: immersive sports venues, StadiumXR
              modular systems, content production, and a scalable franchise model for global rollout.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/partners"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
              >
                Become a Partner
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <div className="text-sm font-semibold text-white">Sitemap</div>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link className="text-white/60 hover:text-white transition" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <div>
                <div className="text-white/80">Headquarters</div>
                <div>Spain · Global expansion platform</div>
              </div>

              <div>
                <div className="text-white/80">Focus</div>
                <div>Partners, sponsors, venue operators, franchising</div>
              </div>

              <div>
                <div className="text-white/80">Status</div>
                <div>Pilot deployments · Selective partnerships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} IMMERSIVE SPORTS SL. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <span className="text-white/40">Privacy</span>
            <span className="text-white/40">Terms</span>
            <span className="text-white/40">Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
