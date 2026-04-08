"use client";
import React from "react";
import { motion } from "framer-motion";

// REFINED MINIMALIST PLAYER ICON (System User)
const UserNode = () => (
  <motion.svg 
    width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={{ opacity: [1, 0.4, 1] }} 
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <rect x="10" y="10" width="80" height="80" stroke="black" strokeWidth="10"/>
    <rect x="30" y="30" width="40" height="40" fill="black"/>
  </motion.svg>
);

export function Header() {
  const navItems = [
    { label: "Deployment_Logs", href: "#experience" },
    { label: "System_Registry", href: "#cv" },
    { label: "Comms_Root", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white/80 backdrop-blur-md font-mono">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 py-4">
        
        {/* IDENTITY BLOCK */}
        <div className="flex items-center gap-3">
          <UserNode />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-black tracking-tighter text-black uppercase leading-none">
              Brian_Shiroe
            </span>
            <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none mt-1">
              Admin_V2.0.6
            </span>
          </div>
        </div>

        {/* NAVIGATION MATRIX */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
            >
              <span className="absolute -left-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-black">
                [
              </span>
              {item.label}
              <span className="absolute -right-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-black">
                ]
              </span>
            </a>
          ))}
          
          {/* GEOLOCATION NODE */}
          <div className="flex items-center gap-3 border-l border-zinc-200 pl-8">
            <div className="flex flex-col items-end">
               <span className="text-[8px] font-black uppercase text-black leading-none">Node_Dubai</span>
               <span className="text-[8px] font-bold text-green-500 uppercase leading-none mt-1">GST // 124ms</span>
            </div>
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
        </nav>

        {/* MOBILE TRIGGER */}
        <button className="md:hidden flex flex-col gap-1 px-2 group">
          <div className="h-0.5 w-5 bg-black" />
          <div className="h-0.5 w-3 bg-black self-end group-hover:w-5 transition-all" />
          <div className="h-0.5 w-5 bg-black" />
        </button>
      </div>

      {/* SYSTEM PROGRESS BAR (Static Decoration) */}
      <div className="absolute bottom-[-2px] left-0 w-full h-[2px] flex">
        <div className="w-1/3 h-full bg-black" />
        <div className="w-2/3 h-full bg-transparent" />
      </div>
    </header>
  );
}