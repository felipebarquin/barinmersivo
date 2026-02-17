import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact IMMERSIVE SPORTS SL to explore partnerships, venue deployments, sponsorships, and global expansion.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
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

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <ContactForm />

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
