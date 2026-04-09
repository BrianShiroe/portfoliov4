"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NeuralCore = () => (
  <div className="relative h-6 w-6 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-black/30"
    />
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="h-1.5 w-1.5 bg-black"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-3px] border-l-2 border-black/10 rounded-full"
    />
  </div>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Init_00", href: "#home" },
    { label: "User_ID", href: "#about" },
    { label: "Specs", href: "#skills" },
    { label: "Builds", href: "#projects" },
    { label: "Logs", href: "#experience" },
    { label: "Registry", href: "#cv" },
    { label: "Uplink", href: "#contact" },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white/90 backdrop-blur-md font-mono">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-4">
        
        {/* IDENTITY BLOCK */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-3 md:gap-4 cursor-pointer group shrink-0 z-[60]"
        >
          <NeuralCore />
          <div className="flex flex-col">
            <span className="text-xs md:text-base font-black tracking-tighter text-black uppercase leading-none group-hover:text-zinc-500 transition-colors">
              Brian_Shiroe
            </span>
            <span className="text-[7px] md:text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none mt-1">
              Admin_V2.0.6
            </span>
          </div>
        </a>

        {/* NAVIGATION MATRIX - DESKTOP */}
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
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 px-2 z-[60] relative h-6 w-8 justify-center items-end"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 4, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
            className="h-0.5 bg-black" 
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-4 bg-black" 
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -4, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
            className="h-0.5 bg-black" 
          />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-50 flex flex-col p-8 pt-24 font-mono"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] border-b border-zinc-100 pb-2">
                Navigation_Protocol
              </span>
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-2xl font-black uppercase tracking-tighter text-black hover:text-zinc-500 flex items-center justify-between"
                >
                  {item.label}
                  <span className="text-[10px] text-zinc-300">0{i}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-8 border-t border-zinc-100">
               <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase">Node_Dubai</span>
                  <span className="text-[8px] text-green-500 font-bold uppercase">Active_Link</span>
               </div>
               <NeuralCore />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SYSTEM PROGRESS DECORATION */}
      <div className="absolute bottom-[-2px] left-0 w-full h-[2px] flex">
        <div className="w-1/6 h-full bg-black" />
        <div className="w-px h-full bg-white mx-0.5" />
        <div className="w-full h-full bg-black/5" />
      </div>
    </header>
  );
}