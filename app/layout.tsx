import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FlickeringGridBg from "../components/ui/FlickeringGridBg";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { DockBar } from "@/components/DockBar"; // ✅ new magic DockBar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakul Kumar Singh",
  description: "Portfolio of Nakul Kumar Singh — AI/Backend Software Engineer at FindMyLawyer, final-year B.Tech student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
      >
        <FlickeringGridBg />

        {/* ✅ Use new DockBar instead of old Dock */}
        <DockBar />

        <ScrollProgress className="top" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
