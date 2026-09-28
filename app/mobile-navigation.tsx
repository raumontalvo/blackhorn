"use client";

import Link from "next/link";
import { useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

export default function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsOpen(false);
          }}
          className="absolute right-0 top-full z-50 mt-3 w-[calc(100vw-2rem)] max-w-sm rounded-xl border border-white/10 bg-[#05070A] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                item.label === "Request a Quote"
                  ? "bg-[#1473E6] text-white hover:bg-[#2589FF]"
                  : "text-slate-200 hover:bg-white/5 hover:text-blue-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}