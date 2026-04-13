"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t, lang } = useLanguage();

  const navLinks = [
    { name: t("Home", "الرئيسية"), href: "#" },
    { name: t("About", "من أنا"), href: "#about" },
    { name: t("Skills", "المهارات"), href: "#skills" },
    { name: t("Services", "الخدمات"), href: "#services" },
    { name: t("Projects", "المشاريع"), href: "#projects" },
    { name: t("History", "الخبرة"), href: "#history" },
    { name: t("Contact", "تواصل معي"), href: "#contact" },
  ];

  return (
    <footer
      className="w-full bg-white font-mono"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Main Bar - Reduced padding on mobile for better fit */}
      <div className="w-full border-t-[6px] md:border-t-8 border-black bg-black py-8 md:py-12 px-5 md:px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-12">
            {/* --- IDENTITY & CONTACT SECTION --- */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/3">
              <span className="font-black text-xl md:text-3xl uppercase tracking-tighter leading-tight">
                BrianShiroe
                <span className="text-zinc-600"> / {t("DEV", "مطور")}</span>
              </span>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 bg-[#00C950] rounded-full animate-pulse" />
                  <span className="text-[9px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">
                    {t("Operational // Dubai, UAE", "قيد التشغيل // دبي")}
                  </span>
                </div>
                <a
                  href="tel:+971503592133"
                  className="text-sm md:text-base font-black text-[#00C950] hover:text-white transition-colors tracking-widest break-all"
                >
                  <span dir="ltr">+971 50 359 2133</span>
                </a>
              </div>

              {/* Social Icons - Center aligned on very small screens */}
              <div className="flex gap-6 mt-6 md:mt-8">
                <a
                  href="https://github.com/BrianShiroe"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                    alt="Github"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/brianshiroe/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                    alt="LinkedIn"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
                <a
                  href="mailto:Brianshiroe@gmail.com"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/gmail-new.png"
                    alt="Email"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
              </div>
            </div>

            {/* --- NAVIGATION LINKS --- 
                Fixed: Responsive grid that uses 2 columns on mobile but switches to 3/4 on larger screens
            */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5 w-full lg:w-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[9px] md:text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-[#00C950] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* --- CALL TO ACTION --- */}
            <div className="flex flex-col items-start lg:items-end w-full lg:w-auto mt-4 lg:mt-0">
              <a
                href="https://wa.me/971503592133"
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-auto text-center text-black bg-[#00C950] px-6 py-4 md:px-8 font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                {t("WhatsApp Me ↗", "راسلني واتساب ↗")}
              </a>
              <div
                className={`mt-11 ${lang === "ar" ? "lg:text-left" : "lg:text-right"} w-full`}
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 block">
                  © 2026 // BrianShiroe
                </span>
                <span className="text-[11px] font-bold text-zinc-700 uppercase">
                  {t(
                    "v2.0.6 // Performance First",
                    "إصدار 2.0.6 // الأداء أولاً",
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Footer Divider - Hidden or simplified on mobile to save space */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8 gap-4">
            <div className="hidden xs:flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-1 ${i % 3 === 0 ? "bg-[#00C950]" : "bg-zinc-800"}`}
                />
              ))}
            </div>
            <p className="text-[7px] md:text-[9px] font-black text-zinc-600 uppercase tracking-[0.15em] md:tracking-[0.3em] text-center leading-relaxed">
              Next.js // Shopify // Odoo ERP //{" "}
              {t("Custom Web Apps", "تطبيقات ويب مخصصة")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
