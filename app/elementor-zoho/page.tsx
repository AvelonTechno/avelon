import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ElementorZohoWaitlist() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden px-4 font-sans selection:bg-blue-500/10">
      
      {/* Soft Pastel Ambient Mesh Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] pointer-events-none opacity-60 mix-blend-multiply z-0 flex justify-center items-center">
        <div className="absolute w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] -translate-x-32 -translate-y-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] translate-x-32 translate-y-20"></div>
      </div>

      {/* Main High-Contrast White Container */}
      <main className="relative z-10 w-full max-w-2xl p-8 md:p-16 flex flex-col items-center text-center rounded-3xl bg-white border border-slate-200 shadow-2xl">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold text-zinc-800 tracking-wide uppercase">
            Upcoming Release
          </span>
        </div>

        {/* Typography / Hero Copy */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tighter leading-tight">
          Connect Elementor to Zoho CRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">in seconds.</span>
        </h1>
        
        <p className="mt-6 text-base md:text-lg text-zinc-600 max-w-lg leading-relaxed">
          Stop losing leads to broken webhooks and skip the Zapier tax. A native, zero-friction integration that syncs your Elementor forms directly to Zoho CRM. Built for speed and reliability.
        </p>

        {/* The Capture Form */}
        <form className="mt-10 w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="name@company.com"
            required
            className="flex-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:border-transparent"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
          >
            Join the Waitlist
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Micro-copy */}
        <p className="mt-4 text-xs font-medium text-slate-400">
          No spam. Unsubscribe anytime.
        </p>
      </main>

      {/* Footer / Trust Indicator */}
      <footer className="relative z-10 mt-12 mb-6">
        <Link href="/" className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">
          Engineered by <span className="font-bold text-zinc-800 tracking-wider">AVELON.</span>
        </Link>
      </footer>
      
    </div>
  );
}