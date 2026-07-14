import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avelon | Zero-friction B2B tools",
  description: "Software should get out of your way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col selection:bg-cyan-500/30 pt-24 relative`}>
        
        {/* Subtle Technical Dot Matrix Background */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]"></div>

        {/* Our client-side dynamic Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Minimalist Footer */}
        <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-sm py-12 mt-auto">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="Avelon Logo" 
                className="h-5 w-auto object-contain grayscale opacity-60"
              />
              <span className="text-lg font-black tracking-widest uppercase text-zinc-400">Avelon</span>
            </div>
            
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Home</Link>
              <Link href="/philosophy" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Philosophy</Link>
            </div>

            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Avelon. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}