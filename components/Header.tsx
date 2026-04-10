"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "History", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (elem) {
      const offset = 70;
      const offsetPosition = elem.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl font-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-6 md:py-4">
        
        {/* IDENTITY */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="z-[110] group flex items-center gap-2.5">
          <div className="h-7 w-7 bg-black rounded-full flex items-center justify-center shrink-0">
            <div className="h-1 w-1 bg-white rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs md:text-lg font-black uppercase tracking-tighter text-black leading-none">
              BrianShiroe
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
              Web Developer
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/50 p-1 rounded-full border border-zinc-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-black"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="liquidNav"
                    className="absolute inset-0 bg-black rounded-full shadow-lg shadow-black/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* MOBILE TRIGGER - TIGHTER VERSION */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden z-[110] flex items-center gap-2 bg-black px-3 py-1.5 rounded-full active:scale-95"
        >
          <span className="text-[8px] font-black uppercase tracking-widest text-white">
            {isOpen ? "Close" : "Menu"}
          </span>
          <div className="flex flex-col gap-0.5 items-end">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 3, width: "10px" } : { rotate: 0, y: 0, width: "10px" }}
              className="h-[1px] bg-white rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1px] w-1.5 bg-white rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -3, width: "10px" } : { rotate: 0, y: 0, width: "10px" }}
              className="h-[1px] bg-white rounded-full" 
            />
          </div>
        </button>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="text-[10px] font-black uppercase px-5 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* MOBILE OVERLAY - ULTRA COMPACT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="fixed inset-0 h-screen w-full bg-white z-[100] flex flex-col p-5 pt-16 overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[8px] font-black uppercase text-zinc-400 tracking-[0.2em] mb-1 px-1">Navigation</span>
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`group relative flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                      isActive 
                        ? "bg-black text-white border-black" 
                        : "bg-zinc-50/30 text-zinc-400 border-zinc-100 active:bg-zinc-100"
                    }`}
                  >
                    <span className="text-base font-black uppercase tracking-tight">{item.label}</span>
                    <div className={`h-1 w-1 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-zinc-200"}`} />
                  </motion.a>
                );
              })}
            </div>

            {/* MOBILE FOOTER - SLIMLINE */}
            <div className="mt-auto pt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase text-zinc-400">HQ</span>
                  <span className="text-[10px] font-black uppercase text-black leading-none mt-0.5">Dubai, UAE</span>
                </div>
                <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.3)]" />
              </div>
              <a 
                href="mailto:contact@brianshiroe.com" 
                className="w-full bg-black text-white text-center py-3.5 rounded-lg font-black uppercase tracking-widest text-[10px] active:scale-95 transition-transform"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}