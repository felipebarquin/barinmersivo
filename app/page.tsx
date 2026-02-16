export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "72px 24px", background: "#0B0F19", color: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ opacity: 0.8, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12 }}>
          IMMERSIVE SPORTS SL · Spain HQ
        </div>

        <h1 style={{ fontSize: 56, lineHeight: 1.05, marginTop: 18 }}>
          Estadios Infinitos
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16, maxWidth: 720, color: "rgba(255,255,255,0.85)" }}>
          Redefining the way the world experiences live sports — immersive venues, StadiumXR systems,
          and a scalable global franchise model.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          <a href="/partners" style={{ background: "white", color: "#0B0F19", padding: "12px 16px", borderRadius: 10, fontWeight: 600 }}>
            Become a Partner
          </a>
          <a href="/infinite-stadiums" style={{ border: "1px solid rgba(255,255,255,0.25)", padding: "12px 16px", borderRadius: 10 }}>
            Discover the Vision
          </a>
        </div>

        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 48 }}>
          {[
            { title: "Immersive Sports Venues", desc: "Premium shared-reality venues for live sports and major events." },
            { title: "StadiumXR Modular Systems", desc: "Pop-up stadium experiences deployable inside existing venues." },
            { title: "Global Franchise Model", desc: "A repeatable playbook designed for international expansion." },
          ].map((c) => (
            <div key={c.title} style={{ padding: 18, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontWeight: 700 }}>{c.title}</div>
              <div style={{ marginTop: 8, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
