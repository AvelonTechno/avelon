export default function Navbar() {
  return (
    <header className="w-full p-6 md:px-8 bg-transparent z-50">
      <a href="/" className="inline-flex items-center gap-2 md:gap-4 group transition-opacity hover:opacity-80">
        <img 
          src="/logo.svg" 
          alt="Avelon Logo" 
          className="h-[48px] md:h-[72px] w-auto object-contain"
        />
        <span className="text-[24px] md:text-[36px] font-bold text-white uppercase tracking-widest leading-none">
          AVELON
        </span>
      </a>
    </header>
  );
}
