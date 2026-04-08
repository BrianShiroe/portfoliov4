"use client";
import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="retro-border-thick bg-ink-deep px-3 py-1">
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            Dev_OS
          </span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {["Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest text-ink-mid hover:text-ink-deep hover:underline decoration-2 underline-offset-4"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l-2 border-zinc-200 pl-8">
            <div className="h-2 w-2 animate-pulse bg-green-500 rounded-full" />
            <span className="text-[10px] font-black uppercase text-zinc-400">System_Online</span>
          </div>
        </nav>
        <button className="md:hidden font-black uppercase text-sm">Menu_</button>
      </div>
    </header>
  );
}