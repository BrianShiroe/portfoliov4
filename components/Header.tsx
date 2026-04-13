"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

/** * Updated to include both EN and AR labels.
 */
const navItems = [
  { en: "Home", ar: "الرئيسية", href: "#home" },
  { en: "About", ar: "من أنا", href: "#about" },
  { en: "Skills", ar: "المهارات", href: "#skills" },
  { en: "Services", ar: "الخدمات", href: "#services" },
  { en: "Projects", ar: "المشاريع", href: "#projects" },
  { en: "History", ar: "الخبرة", href: "#experience" },
  { en: "Contact", ar: "اتصل بنا", href: "#contact" },
];

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle intersection observer for active link highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent scroll when mobile menu is open
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
      const offsetPosition =
        elem.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl font-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-6 md:py-4">
        
        {/* IDENTITY */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="z-[110] group flex items-center gap-2.5"
        >
          <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0 overflow-hidden relative border border-zinc-200">
            <img
              src="/logo.png"
              alt="BrianShiroe Logo"
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs md:text-lg font-black uppercase tracking-tighter text-black leading-none">
              BrianShiroe
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
              {t("Web Developer", "مطور مواقع")}
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/50 p-1 rounded-full border border-zinc-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.en}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-black"
                }`}
              >
                <span className="relative z-10">{t(item.en, item.ar)}</span>
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

        {/* CONTROLS */}
        <div className="flex items-center gap-4">
          {/* LANGUAGE TOGGLE */}
          <button 
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="z-[110] text-[10px] font-black border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-all active:scale-95"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          {/* MOBILE TRIGGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[110] flex items-center gap-2 bg-black px-3 py-1.5 rounded-full active:scale-95"
          >
            <span className="text-[8px] font-black uppercase tracking-widest text-white">
              {isOpen ? t("Close", "إغلاق") : t("Menu", "القائمة")}
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
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden xl:block">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="group flex items-center gap-2.5 px-2 py-1 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">
              {t("Available for Hire", "متاح للعمل")}
            </span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
          </a>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="fixed inset-0 h-screen w-full bg-white z-[100] flex flex-col p-5 pt-16 overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[8px] font-black uppercase text-zinc-400 tracking-[0.2em] mb-1 px-1">
                {t("Navigation", "التنقل")}
              </span>
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.en}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`group relative flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                      isActive ? "bg-black text-white border-black" : "bg-zinc-50/30 text-zinc-400 border-zinc-100 active:bg-zinc-100"
                    }`}
                  >
                    <span className="text-base font-black uppercase tracking-tight">
                      {t(item.en, item.ar)}
                    </span>
                    <div className={`h-1 w-1 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-zinc-200"}`} />
                  </motion.a>
                );
              })}
            </div>

            {/* MOBILE FOOTER INFO */}
            <div className="mt-auto pt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase text-zinc-400">{t("HQ", "المقر")}</span>
                  <span className="text-[10px] font-black uppercase text-black leading-none mt-0.5">{t("Dubai, UAE", "دبي، الإمارات")}</span>
                </div>
                <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.3)]" />
              </div>
              <a
                href="mailto:Brianshiroe@gmail.com"
                className="w-full bg-black text-white text-center py-3.5 rounded-lg font-black uppercase tracking-widest text-[10px] active:scale-95 transition-transform"
              >
                {t("Let's Talk", "لنبدأ الحوار")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}