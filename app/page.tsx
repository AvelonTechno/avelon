import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden text-white">
      
      {/* Ambient Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Static Header */}
      <Navbar />

      {/* Centered Hero & Form Section (flex-1 forces it to fill remaining space) */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
        
        {/* Advanced Typography 4-Line Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.2] mb-8">
          <span className="block">The only SaaS</span>
          <span className="block">tools that you need to</span>
          <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-700 text-black px-3 py-1 rounded-md my-2 shadow-lg">
            turn your business
          </span>
          <span className="block">
            into a <span className="text-blue-500">BIG NAME.</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
          Stop paying for giant platforms when you only use 10% of the features. I build single-purpose, hyper-focused web apps that solve one problem flawlessly. Execute faster. Scale leaner.
        </p>
        
        {/* Capture Form */}
        <div className="w-full max-w-md flex flex-col items-center gap-4">
          <form className="w-full flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="flex-1 h-12 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-100 shadow-inner transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-100 px-6 py-2 text-sm font-bold text-zinc-950 shadow-md transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap"
            >
              Get Early Access
            </button>
          </form>
          
          <p className="text-sm text-zinc-500 font-medium">
            Time-to-value: &lt; 2 minutes. Join other solo builders waiting for Tool 01.
          </p>
        </div>
      </div>

      {/* Typographic Manifesto Footer */}
      <footer className="w-full max-w-3xl mx-auto text-center pb-6 px-4 relative z-10">
        <div className="flex flex-col gap-4 border-t border-zinc-800/50 pt-6">
          <p className="text-base md:text-lg text-zinc-300 font-medium leading-relaxed">
            Built by a solo developer, for solo operators. No VC fluff, no generic buzzwords—just clean code, sharp UI, and tools that get out of your way so you can do deep work.
          </p>
          <p className="text-sm text-zinc-500">
            We&apos;re building Tool 01 in public.{" "}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300 transition-all"
            >
              Follow the journey on X
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}