import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden text-white">
      
      {/* Ambient Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Static Header */}
      <Navbar />

      {/* Centered Hero & Form Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
        
        {/* Advanced Typography 4-Line Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.2] mb-8">
          <span className="block whitespace-nowrap">The only SaaS</span>
          <span className="block whitespace-nowrap">tools you need to</span>
          <span className="block whitespace-nowrap">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-700 text-black px-2 py-1 md:px-4 md:py-2 rounded-md my-2 shadow-lg">
              turn your BRAND
            </span>
          </span>
          <span className="block whitespace-nowrap">
            into a <span className="text-blue-500">BIG NAME.</span>
          </span>
        </h1>
        
        {/* Responsive Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-10 max-w-[90%] md:max-w-2xl mx-auto">
          Stop paying for giant platforms when you only use 10% of the features. We build single-purpose, hyper-focused web apps that solve one problem flawlessly. Execute faster. Scale leaner.
        </p>
        
       <WaitlistForm/>
      </div>

      {/* Typographic Manifesto Footer */}
      <footer className="w-full max-w-3xl mx-auto text-center pb-8 md:pb-12 px-4 relative z-10">
        <div className="flex flex-col gap-4 border-t border-zinc-800/50 pt-6">
          {/* Responsive Ethos */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-medium leading-relaxed max-w-xs sm:max-w-md md:max-w-xl mx-auto">
            Built by a solo developer, for solo operators. No VC fluff, no generic buzzwords—just clean code, sharp UI, and tools that get out of your way so you can do deep work.
          </p>
          <p className="text-xs md:text-sm text-zinc-500 mt-2">
            We&apos;re building Tool 01 in public.{" "}
            <a 
              href="https://x.com/AvelonTechno" 
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