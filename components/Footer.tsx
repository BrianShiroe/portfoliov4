"use client";
import React from 'react';
import {useLocale} from 'next-intl';

export function Footer() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const t = (en: string, ar: string) => (isAr ? ar : en);

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
    <footer className="w-full bg-white font-mono" dir={isAr ? "rtl" : "ltr"}>
      <div className="w-full border-t-[8px] md:border-t-[12px] border-black bg-black py-12 md:py-20 px-5 md:px-6 text-white rounded-none">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
            {/* --- IDENTITY & CONTACT SECTION --- */}
            <div className="flex flex-col items-start w-full lg:w-1/3">
              <span className="font-black text-2xl md:text-3xl uppercase tracking-tighter leading-tight">
                BrianShiroe
                <span className="text-zinc-600"> / {t("DEV", "مطور")}</span>
              </span>

              <div className="flex flex-col gap-3 mt-6">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 bg-[#00C950] rounded-full animate-pulse shadow-[0_0_8px_#00C950]" />
                  <span className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">
                    {t("Active // Dubai, UAE", "نشط // دبي، الإمارات")}
                  </span>
                </div>
                <a
                  href="tel:+971503592133"
                  className="text-base md:text-lg font-black text-[#00C950] hover:text-white transition-colors tracking-widest"
                >
                  <span dir="ltr">+971 50 359 2133</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-8">
                {["github", "linkedin", "gmail-new"].map((icon) => (
                  <a
                    key={icon}
                    href={
                      icon === "github"
                        ? "https://github.com/BrianShiroe"
                        : icon === "linkedin"
                          ? "https://www.linkedin.com/in/brianshiroe/"
                          : "mailto:Brianshiroe@gmail.com"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-125 transition-transform duration-300 bg-zinc-900 p-2 rounded-xl border border-zinc-800"
                  >
                    <img
                      src={`https://img.icons8.com/ios-filled/50/ffffff/${icon}.png`}
                      alt={icon}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* --- NAVIGATION LINKS --- */}
            <div className="w-full lg:w-auto">
              <h4 className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.3em] mb-8 flex items-center gap-3">
                <span className="w-1 h-3 bg-[#00C950]" />{" "}
                {t("Navigation", "التنقل")}
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 w-full lg:w-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white hover:text-[#00C950] transition-all hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* --- CALL TO ACTION --- */}
            <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
              <a
                href="https://wa.me/971503592133"
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-auto text-center text-black bg-[#00C950] px-8 py-5 font-black uppercase tracking-tighter shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] rounded-2xl hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-sm md:text-base"
              >
                {t("WhatsApp Me", "تواصل عبر واتساب")}
              </a>
              <div
                className={`mt-12 ${isAr ? "lg:text-left" : "lg:text-right"} w-full`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block mb-1">
                  © 2026 // BrianShiroe
                </span>
                <span className="text-[11px] font-bold text-zinc-500 uppercase">
                  {t(
                    "Digital Portfolio // Performance First",
                    "معرض الأعمال الرقمي // الأداء أولاً",
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-10 gap-6">
            <div className="flex gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-4 w-1 rounded-full ${i % 4 === 0 ? "bg-[#00C950]" : "bg-zinc-800"}`}
                />
              ))}
            </div>
            <p className="text-[8px] md:text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] md:tracking-[0.4em] text-center">
              Next.js // Shopify // Odoo ERP //{" "}
              {t("Custom Web Apps", "تطبيقات ويب مخصصة")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
