"use client";
import React from 'react';
import { useLocale } from 'next-intl';

export function Footer() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const navLinks = [
    { name: t("Home", "الرئيسية"), href: "#home" },
    { name: t("Projects", "المشاريع"), href: "#projects" },
    { name: t("About", "من أنا"), href: "#about" },
    { name: t("Skills", "المهارات"), href: "#skills" },
    { name: t("Services", "الخدمات"), href: "#services" },
    { name: t("Experience", "الخبرة"), href: "#experience" },
    { name: t("Contact", "تواصل معي"), href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="w-full bg-white font-mono" dir={isAr ? "rtl" : "ltr"}>
      {/* Heavy Border Accent */}
      <div className="w-full border-t-[8px] md:border-t-[12px] border-black bg-black py-16 md:py-24 px-5 md:px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
            
            {/* IDENTITY SECTION */}
            <div className="flex flex-col items-start w-full lg:w-1/3">
              <div className="flex flex-col">
                <span className="font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none">
                  BrianHaw
                </span>
                <span className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mt-2">
                  {t("IT Specialist", "أخصائي تقنية معلومات")}
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 bg-[#00C950] rounded-full animate-pulse shadow-[0_0_10px_#00C950]" />
                  <span className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">
                    {t("Availability: Open for Projects", "الحالة: متاح للمشاريع")}
                  </span>
                </div>
                <a
                  href="mailto:Brianshiroe@gmail.com"
                  className="text-lg md:text-xl font-black text-[#00C950] hover:text-white transition-colors tracking-tight"
                >
                  Brianshiroe@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-10">
                {[
                  { id: "github", url: "https://github.com/BrianShiroe" },
                  { id: "linkedin", url: "https://www.linkedin.com/in/brianshiroe/" },
                ].map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-zinc-900 h-12 w-12 flex items-center justify-center rounded-xl border border-zinc-800 hover:border-[#00C950] transition-all hover:-translate-y-1"
                  >
                    <div 
                      className="h-5 w-5 bg-white group-hover:bg-[#00C950] transition-colors"
                      style={{ 
                        mask: `url(/icons/${social.id}.svg) no-repeat center / contain`, 
                        WebkitMask: `url(/icons/${social.id}.svg) no-repeat center / contain` 
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* NAVIGATION GRID */}
            <div className="w-full lg:w-auto">
              <h4 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.3em] mb-10 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-zinc-800" />
                {t("Sitemap", "خريطة الموقع")}
              </h4>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-[#00C950] transition-all flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00C950]">/</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* ACTION SECTION */}
            <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
              <div className="space-y-6 w-full lg:w-auto">
                <p className={`text-zinc-500 text-xs font-bold uppercase tracking-widest ${isAr ? "text-right" : "text-left lg:text-right"}`}>
                  {t("Based in Dubai, UAE", "مقرنا في دبي، الإمارات")}
                </p>
                <a
                  href="https://wa.me/971503592133"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-black bg-[#00C950] px-10 py-6 font-black uppercase tracking-tighter shadow-[6px_6px_0px_0px_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-sm md:text-base border-2 border-black"
                >
                  {t("Start a Conversation", "ابدأ محادثة الآن")}
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                © 2026 // BrianHaw
              </span>
              <span className="text-[9px] font-bold text-zinc-700 uppercase">
                {t("Next.js // Odoo // SEO Specialist", "نكست جي إس // أودو // خبير سيو")}
              </span>
            </div>
            
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 w-8 rounded-full ${i === 0 ? "bg-[#00C950]" : "bg-zinc-800"}`} 
                />
              ))}
            </div>

            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest text-center md:text-right">
              {t("Crafted with Neural Logic", "صُنع بمنطق عصبي")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}