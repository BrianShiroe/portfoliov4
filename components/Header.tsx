"use client";
import React from "react";
import { motion } from "framer-motion";

// ANIMATED SVG CHARACTER (Player Icon)
const RetroPlayer = () => (
  <motion.svg 
    width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={{ y: [0, -6, 0] }} // Gentle bobbing animation (Player IDLE state)
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <rect x="20" y="20" width="20" height="20" fill="white"/>
    <rect x="60" y="20" width="20" height="20" fill="white"/>
    <rect x="0" y="40" width="20" height="20" fill="white"/>
    <rect x="80" y="40" width="20" height="20" fill="white"/>
    <rect x="20" y="60" width="60" height="20" fill="white"/>
    <rect x="40" y="80" width="20" height="20" fill="white"/>
  </motion.svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* ANIMATED LOGO BLOCK */}
        <div className="retro-border-thick bg-ink-deep px-3 py-2 flex items-center gap-3">
          <RetroPlayer />
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            Haw_Arcade
          </span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {["System_Status", "Selected_Logs", "Save_State"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-widest text-ink-mid hover:text-ink-deep hover:underline decoration-2 underline-offset-4"
            >
              {item}
            </a>
          ))}
          {/* SYSTEM STATUS INDICATOR */}
          <div className="flex items-center gap-2 border-l-2 border-zinc-200 pl-8">
            <div className="h-2 w-2 animate-pulse bg-green-500 rounded-full" />
            <span className="text-[10px] font-black uppercase text-zinc-400">Online</span>
          </div>
        </nav>
        <button className="md:hidden font-black uppercase text-sm">Menu_</button>
      </div>
    </header>
  );
}