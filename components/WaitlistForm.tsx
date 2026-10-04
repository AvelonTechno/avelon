"use client";

import { useState } from "react";
import { joinWaitlist } from "@/actions/waitlist";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // 1. Stop the browser from refreshing the page
    e.preventDefault();
    
    setStatus("loading");
    setMessage("");

    // 2. Safely extract the data (relies on name="email" in the input)
    const formData = new FormData(e.currentTarget);

    try {
      const result = await joinWaitlist(formData);

      if (result?.error) {
        setStatus("error");
        setMessage(result.error);
      } else if (result?.success) {
        setStatus("success");
        setMessage("You're on the list!");
      }
    } catch (err) {
      console.error("Client-side execution failed:", err);
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    }
  }

  // Success UI Swap
  if (status === "success") {
    return (
      <div className="w-full max-w-md flex flex-col items-center justify-center h-[100px]">
        <p className="text-base font-bold text-blue-400">✓ {message}</p>
        <p className="text-sm text-zinc-500 mt-2">Check your inbox for a welcome email.</p>
      </div>
    );
  }

  // Default & Loading UI
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          disabled={status === "loading"}
          className="flex-1 h-12 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-100 shadow-inner transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-100 px-6 py-2 text-sm font-bold text-zinc-950 shadow-md transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Get Early Access"}
        </button>
      </form>
      
      {/* Error Message Display */}
      {status === "error" && (
        <p className="text-sm font-medium text-red-400">{message}</p>
      )}
      
      {/* Micro-copy */}
      <p className="text-xs md:text-sm text-zinc-500 font-medium mt-1">
        Time-to-value: &lt; 2 minutes. Join other solo builders waiting for Tool 01.
      </p>
    </div>
  );
}