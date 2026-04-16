"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const navItems = [
  { en: "Home", ar: "الرئيسية", href: "#home" },
  { en: "About", ar: "من أنا", href: "#about" },
  { en: "Skills", ar: "المهارات", href: "#skills" },
  { en: "Services", ar: "الخدمات", href: "#services" },
  { en: "Projects", ar: "المشاريع", href: "#projects" },
  { en: "Experience", ar: "الخبرة", href: "#experience" },
  { en: "Contact", ar: "اتصل بنا", href: "#contact" },
];

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const isAr = lang === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
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
    <header
      className="sticky top-0 z-[100] w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* IDENTITY */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="z-[110] group flex items-center gap-2.5"
        >
          <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden relative border border-zinc-200">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs md:text-lg font-black uppercase tracking-tighter text-black leading-none">
              BrianShiroe
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
              {t("Web Developer", "مطور ويب")}
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
                className={`relative px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
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

        {/* CONTROLS - SCALED UP SIZES */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="z-[110] h-10 px-4 rounded-full border-2 border-black text-[10px] font-black transition-all hover:bg-black hover:text-[#00C950] active:scale-95 flex items-center justify-center leading-none cursor-pointer"
          >
            <span className={lang === "ar" ? "translate-y-[1px]" : ""}>
              {lang === "en" ? "عربي" : "EN"}
            </span>
          </button>

          {/* Mobile Toggle (Icon Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[110] h-10 w-10 bg-black rounded-full flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
          >
            <div className="flex flex-col gap-1 items-center justify-center">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] w-4.5 bg-white rounded-full origin-center"
              />
              <motion.div
                animate={isOpen ? { opacity: 0, x: -5 } : { opacity: 1, x: 0 }}
                className="h-[1.5px] w-4.5 bg-white rounded-full"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] w-4.5 bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>

        {/* DESKTOP STATUS */}
        <div className="hidden xl:block">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="group flex items-center gap-2.5 px-3 py-1.5"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">
              {t("Open to Opportunities", "متاح لفرص جديدة")}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 h-screen w-full bg-white z-[100] flex flex-col p-5 pt-20 overflow-y-auto"
            dir={isAr ? "rtl" : "ltr"}
          >
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-[8px] font-black uppercase text-zinc-400 tracking-[0.2em] mb-2 px-2">
                {t("Navigation", "التنقل")}
              </span>
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.en}
                    initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.02 }}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all ${
                      isActive
                        ? "bg-black text-white border-black shadow-lg"
                        : "bg-zinc-50 border-zinc-100 text-zinc-500 active:bg-zinc-100"
                    }`}
                  >
                    <span className="text-sm font-black uppercase tracking-tight">
                      {t(item.en, item.ar)}
                    </span>
                    <div
                      className={`h-2 w-2 rounded-full ${isActive ? "bg-[#00C950]" : "bg-zinc-200"}`}
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-3 mb-4">
              <div className="flex items-center justify-between bg-zinc-50 px-5 py-4 rounded-2xl border border-zinc-100">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase text-zinc-400 leading-none">
                    {t("HQ", "المقر")}
                  </span>
                  <span className="text-[11px] font-black uppercase text-black mt-1.5 leading-none">
                    Dubai, UAE
                  </span>
                </div>
                <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
              </div>

              <a
                href="mailto:Brianshiroe@gmail.com"
                className="w-full bg-black text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] active:scale-[0.98] transition-all"
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
