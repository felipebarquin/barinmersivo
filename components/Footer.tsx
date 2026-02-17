import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="text-sm tracking-[0.2em] text-white/70">IMMERSIVE SPORTS SL</div>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            Building Infinite Stadiums: immersive sports venues, StadiumXR systems, and scalable franchise models.
          </p>
        </div>

        <div className="text-sm text-white/60">
          <div className="text-white/80">HQ</div>
          <p className="mt-2">Spain · Global expansion</p>
        </div>

        <div className="flex gap-4 text-sm">
          <Link className="text-white/70 hover:text-white" href="/contact">
            Contact
          </Link>
          <Link className="text-white/70 hover:text-white" href="/partners">
            Partners
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} IMMERSIVE SPORTS SL. All rights reserved.
      </div>
    </footer>
  );
}
