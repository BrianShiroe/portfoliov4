"use client";
import React from "react";
import { motion } from "framer-motion";

const NeuralCore = () => (
  <div className="relative h-6 w-6 flex items-center justify-center">
    {/* Outer Frame */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-black/30"
    />
    {/* Data Pulse */}
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="h-1.5 w-1.5 bg-black"
    />
    {/* Orbiting Ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-3px] border-l-2 border-black/10 rounded-full"
    />
  </div>
);

export function Header() {
  const navItems = [
    { label: "Init_00", href: "#home" },
    { label: "User_ID", href: "#about" },
    { label: "Specs", href: "#skills" },
    { label: "Builds", href: "#projects" },
    { label: "Logs", href: "#experience" },
    { label: "Registry", href: "#cv" },
    { label: "Uplink", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white/90 backdrop-blur-md font-mono">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-4">
        {/* IDENTITY BLOCK */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-4 cursor-pointer group shrink-0"
        >
          <NeuralCore />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-black tracking-tighter text-black uppercase leading-none group-hover:text-zinc-500 transition-colors">
              Brian_Shiroe
            </span>
            <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none mt-1">
              Admin_V2.0.6
            </span>
          </div>
        </a>

        {/* NAVIGATION MATRIX - Responsive Gap and Text Size */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="group relative text-[9px] xl:text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
            >
              <span className="absolute -left-2.5 top-0 opacity-0 group-hover:opacity-100 transition-all text-black">
                [
              </span>
              {item.label}
              <span className="absolute -right-2.5 top-0 opacity-0 group-hover:opacity-100 transition-all text-black">
                ]
              </span>
            </a>
          ))}

          {/* GEOLOCATION NODE */}
          <div className="flex items-center gap-3 border-l border-zinc-200 pl-6 xl:pl-8">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black uppercase text-black leading-none">
                Node_Dubai
              </span>
              <span className="text-[7px] font-bold text-green-500 uppercase leading-none mt-1">
                GST // 124ms
              </span>
            </div>
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>
        </nav>

        {/* MOBILE TRIGGER */}
        <button className="lg:hidden flex flex-col gap-1.5 px-2 group">
          <div className="h-0.5 w-6 bg-black" />
          <div className="h-0.5 w-4 bg-black self-end group-hover:w-6 transition-all" />
          <div className="h-0.5 w-6 bg-black" />
        </button>
      </div>

      {/* SYSTEM PROGRESS DECORATION */}
      <div className="absolute bottom-[-2px] left-0 w-full h-[2px] flex">
        <div className="w-1/6 h-full bg-black" />
        <div className="w-px h-full bg-white mx-0.5" />
        <div className="w-full h-full bg-black/5" />
      </div>
    </header>
  );
}
