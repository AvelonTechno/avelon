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
  openGraph: {
    title: "Avelon - Fast Micro-SaaS Tools for Creators & Indie Hackers.",
    description: "Supercharge your solo workflow with Avelon. Fast, affordable micro-SaaS tools built specifically for creators, freelancers, and indie hackers.",
    siteName: "Avelon",
    url: "https://avelonhq.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Define the structured data schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Avelon",
    url: "https://avelonhq.com/",
  };

  return (
    <html lang="en" className="dark">
      {/* Inject the JSON-LD script securely in the head */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col selection:bg-cyan-500/30 relative`}>
        
        {/* Subtle Technical Dot Matrix Background */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none"></div>

        {/* The children prop will render our full-height page.tsx */}
        {children}

      </body>
    </html>
  );
}