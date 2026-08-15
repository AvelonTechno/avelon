import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avelon - Fast Micro-SaaS Tools for Creators & Indie Hackers.",
  description: "Supercharge your solo workflow with Avelon. Fast, affordable micro-SaaS tools built specifically for creators, freelancers, and indie hackers.",
  icons: {
    icon: "/logo.svg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30`}>
        
        {/* Subtle Technical Dot Matrix Background */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none"></div>

        {/* The children prop will render our new full-height page.tsx */}
        {children}

      </body>
    </html>
  );
}