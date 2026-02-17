"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/infinite-stadiums", label: "Infinite Stadiums" },
  { href: "/solutions", label: "Solutions" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="text-xs tracking-[0.28em] text-white/60 group-hover:text-white/80 transition">
              IMMERSIVE SPORTS
            </span>
            <span className="mt-1 text-sm font-semibold tracking-tight text-white">
              SL
              <span className="text-white/40 font-normal"> · Spain HQ</span>
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] w-full rounded-full transition ${
                      active ? "bg-white/70" : "bg-transparent"
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl border border-white/15 bg-white/0 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white md:inline-flex transition"
          >
            Contact
          </Link>

          <Link
            href="/partners"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </header>
  );
}
