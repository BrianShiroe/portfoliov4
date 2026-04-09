"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavigationCore = () => (
  <div className="relative h-6 w-6 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-black/20"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="h-2 w-2 bg-black"
    />
  </div>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "History", href: "#experience" },
    // { label: "Resume", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ];

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
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white/95 backdrop-blur-md font-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* IDENTITY BLOCK */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-4 cursor-pointer group shrink-0 z-[60]"
        >
          <NavigationCore />
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-black uppercase leading-none group-hover:text-zinc-600 transition-colors">
              BrianShiroe
            </span>
            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest leading-none mt-1">
              Web Developer
            </span>
          </div>
        </a>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="group relative py-2 text-[12px] font-black uppercase tracking-widest text-zinc-500 hover:text-black transition-all duration-300 hover:translate-x-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* LOCATION STATUS */}
          <div className="flex items-center gap-4 border-l-2 border-zinc-100 pl-8">
            <div className="flex flex-col items-end">
              <span className="text-[12px] font-black uppercase text-black leading-none">
                Dubai, UAE
              </span>
              <span className="text-[10px] font-bold text-green-600 uppercase leading-none mt-1">
                Available for Hire
              </span>
            </div>
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
          </div>
        </nav>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 px-2 z-[60] relative h-8 w-10 justify-center items-end"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 6, width: "28px" } : { rotate: 0, y: 0, width: "28px" }}
            className="h-1 bg-black" 
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-1 w-5 bg-black" 
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -6, width: "28px" } : { rotate: 0, y: 0, width: "28px" }}
            className="h-1 bg-black" 
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
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-50 flex flex-col p-8 pt-24 font-sans"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em] border-b-2 border-zinc-100 pb-2 mb-2">
                Directory
              </span>
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="group text-2xl font-black uppercase tracking-tight text-black flex items-center justify-between hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="group-hover:text-zinc-500 transition-colors">{item.label}</span>
                  <span className="text-[10px] font-mono text-zinc-300">0{i + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-8 border-t-2 border-black/10">
               <div className="flex flex-col">
                  <span className="text-xs font-black uppercase">Dubai, UAE</span>
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Available</span>
               </div>
               <NavigationCore />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}