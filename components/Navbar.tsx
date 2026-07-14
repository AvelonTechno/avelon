"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the current route is the standalone light-mode product page
  const isProductPage = pathname === "/elementor-zoho";

  useEffect(() => {
    // If we are on the product page, we don't need to listen to scroll events
    if (isProductPage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Initialize state on mount/route change
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProductPage]);

  // Determine if the navbar should display its full-width collapsed state
  // It triggers if the user scrolls OR if they are natively browsing the product page
  const forceFullWidth = isScrolled || isProductPage;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out ${
        forceFullWidth ? "p-0" : "p-4"
      }`}
    >
      <header
        className={`bg-white transition-all duration-300 ease-in-out flex items-center justify-between shadow-xl ${
          forceFullWidth 
            ? "w-full rounded-none px-6 py-4 border-b" 
            : "w-full max-w-5xl rounded-full px-6 py-3"
        } ${
          isProductPage ? "border-slate-200" : "border-zinc-200"
        }`}
      >
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group transition-opacity hover:opacity-80">
          <img 
            src="/logo.svg" 
            alt="Avelon Logo" 
            className="h-8 w-auto object-contain"
          />
          <span className="text-2xl font-black tracking-widest text-zinc-950 uppercase">
            Avelon
          </span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className="hidden md:block text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/philosophy" 
            className="hidden md:block text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Philosophy
          </Link>
          <Link 
            href="/elementor-zoho" 
            className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Latest Release
          </Link>
        </nav>
      </header>
    </div>
  );
}