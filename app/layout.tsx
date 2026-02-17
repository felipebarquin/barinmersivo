import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IMMERSIVE SPORTS SL — Infinite Stadiums",
  description:
    "IMMERSIVE SPORTS SL builds Infinite Stadiums: immersive sports venues, StadiumXR systems, and scalable franchise models.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        <div className="min-h-[calc(100vh-220px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
