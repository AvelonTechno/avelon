export default function Philosophy() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-6 py-24">
      {/* Hero Section */}
      <section className="w-full mb-20 text-left md:text-center">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl mb-6">
          Built for longevity.<br className="hidden md:block" />
          <span className="text-zinc-500"> Engineered for speed.</span>
        </h1>
        <p className="md:mx-auto max-w-2xl text-lg text-zinc-400 leading-relaxed">
          The modern B2B tech stack is cluttered with heavy applications trying to do everything at once. Avelon takes the opposite approach.
        </p>
      </section>

      {/* The Manifesto (Vertical Timeline) */}
      <section className="w-full relative">
        {/* Vertical line connecting numbers */}
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-zinc-800 hidden md:block"></div>
        
        <div className="flex flex-col gap-16 relative">
          
          {/* Point 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border-2 border-zinc-800 text-xl font-black text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)] transition-all z-10">
              1
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
                Time-to-Value is the Only Metric that Matters
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                If a tool takes weeks to implement, it’s a liability. Avelon tools are designed for instant utility. You shouldn’t need an onboarding specialist to figure out how our software works.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border-2 border-zinc-800 text-xl font-black text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)] transition-all z-10">
              2
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
                Focus Over Features
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We identify specific, painful friction points within established marketplaces and build a single, flawless solution for them. We would rather solve one problem perfectly than five problems poorly.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border-2 border-zinc-800 text-xl font-black text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)] transition-all z-10">
              3
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
                Lean and Clean Architecture
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We prioritize modern, robust stacks that result in fast load times, reliable uptimes, and zero unnecessary infrastructure costs. We build software that lasts, so you can run your business without worrying about the tools underneath it.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}