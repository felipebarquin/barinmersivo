import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://barinmersivo.vercel.app"),
  title: {
    default: "IMMERSIVE SPORTS SL — Infinite Stadiums",
    template: "%s — IMMERSIVE SPORTS SL",
  },
  description:
    "IMMERSIVE SPORTS SL builds Infinite Stadiums: immersive sports venues, StadiumXR systems, and scalable franchise models designed for global expansion.",
  applicationName: "IMMERSIVE SPORTS SL",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "IMMERSIVE SPORTS SL — Infinite Stadiums",
    description:
      "A scalable platform for premium immersive sports experiences: venues, StadiumXR modular systems, and franchising.",
    url: "/",
    siteName: "IMMERSIVE SPORTS SL",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IMMERSIVE SPORTS SL — Infinite Stadiums",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMMERSIVE SPORTS SL — Infinite Stadiums",
    description:
      "Immersive sports venues, StadiumXR systems, and scalable franchise models designed for global expansion.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        <div className="min-h-[calc(100vh-220px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
