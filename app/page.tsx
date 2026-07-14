import { Zap, Blocks, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative overflow-hidden">
      {/* Page Wrapper: Added relative and overflow-hidden to contain the glows */}
      
      {/* --- Ambient Mesh Glows --- */}
      {/* 1. Hero Headline Glow (Electric Blue) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      {/* 2. Hero CTA Glow (Soft Neon Purple) */}
      <div className="absolute top-[400px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 flex flex-col items-center text-center px-6 relative z-10">
        <h1 className="max-w-4xl text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Software should get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">out of your way.</span>
        </h1>
        <p className="mt-6 max-w-[42rem] leading-relaxed text-zinc-400 sm:text-xl sm:leading-8">
          We build lightweight, highly focused micro-SaaS tools for the B2B marketplaces you already rely on. No bloated features. No required sales calls. Just clean, reliable products that solve immediate bottlenecks.
        </p>
        
        {/* Prominent Product CTA */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <Link 
            href="/elementor-zoho" 
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-zinc-900/80 border border-cyan-500/30 px-6 py-3 text-sm md:text-base font-semibold text-cyan-400 shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)] backdrop-blur-md transition-all duration-300 hover:bg-zinc-900 hover:border-cyan-400/80 hover:text-cyan-300 hover:shadow-[0_0_35px_-2px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            {/* Pulsing Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            
            View our latest release: Elementor to Zoho CRM Sync &rarr;
          </Link>
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-2">
            Zero-friction B2B tools. Built to work in minutes.
          </p>
        </div>
      </section>

      {/* Core Focus (3-Column Grid) */}
      <section className="w-full border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Card 1 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-900 bg-zinc-950 transition-all hover:border-zinc-800 hover:bg-zinc-900/50 group">
              <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Frictionless Adoption</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Our tools are strictly product-led. Install, connect, and see value in under five minutes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-900 bg-zinc-950 transition-all hover:border-zinc-800 hover:bg-zinc-900/50 group">
              <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                <Blocks className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Marketplace Native</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                We build directly into the ecosystems you already use, bridging the gaps in your daily workflow.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-900 bg-zinc-950 transition-all hover:border-zinc-800 hover:bg-zinc-900/50 group">
              <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                <Target className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Zero Bloat</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                We don’t build platforms; we build precision utilities. You only get exactly what you need to move faster.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Lab Section */}
      <section className="w-full py-24 px-6 flex justify-center relative z-10 overflow-hidden">
        {/* 3. Bottom Corner Fade (Forge Section) */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-3xl w-full relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 md:p-12 backdrop-blur-md">
          {/* Subtle glowing orb in the background */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
              Current Status
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-100">
              Currently in the Forge
            </h2>
            <p className="text-zinc-400 md:text-lg leading-relaxed max-w-2xl">
              Avelon is actively developing its first suite of B2B micro-tools. We are engineering fast, minimalist applications designed to make your existing operations seamless.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}