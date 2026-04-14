"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export function Projects() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const projects = [
    {
      id: "01",
      title: t("ITD Innovation", "آي تي دي للابتكار"),
      tag: t("IT Solutions", "حلول تقنية"),
      tech: t("Odoo / 80+ Pages / Multilingual", "أودو / +٨٠ صفحة / متعدد اللغات"),
      status: t("Live", "مباشر"),
      isDevelopment: false,
      date: "2026",
      href: "https://www.itdtech.ae/",
    },
    {
      id: "02",
      title: t("KBH Real Estate", "كي بي إتش العقارية"),
      tag: t("Real Estate", "عقارات"),
      tech: t("Odoo / E-commerce/ Multilingual", "أودو / تجارة إلكترونية / متعدد اللغات"),
      status: t("Live", "مباشر"),
      isDevelopment: false,
      date: "2026",
      href: "https://www.kbhrealestate.ae/",
    },
    {
      id: "03",
      title: t("Zhel Gold Jewelry", "زيل للمجوهرات"),
      tag: t("Gold & Layaway", "ذهب وتقسيط"),
      tech: t("Next.js / Responsive / Systems", "نكست جي إس / متجاوب / أنظمة"),
      status: t("Live", "مباشر"),
      isDevelopment: true,
      date: "2026",
      href: "https://zhel-gold-jewelry.vercel.app/",
    },
    {
      id: "04",
      title: t("Rose Gallery Perfumes", "روز غاليري للعطور"),
      tag: t("Perfume Store", "متجر عطور"),
      tech: t("Shopify / E-Commerce / Responsive", "شوبيفاي / تجارة إلكترونية / متجاوب"),
      status: t("Live", "مباشر"),
      isDevelopment: false,
      date: "2026",
      href: "https://rosegallery.ae/",
    },
    {
      id: "05",
      title: t("Wazeen Law Firm", "مكتب وزين للمحاماة"),
      tag: t("Legal Services", "خدمات قانونية"),
      tech: t("Wordpress CMS / Arabic / Responsive", "وردبريس / عربي / متجاوب"),
      status: t("Live", "مباشر"),
      isDevelopment: false,
      date: "2026",
      href: "https://wazeenlaw.sa/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-white px-4 py-24 md:px-6 overflow-hidden font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div className="relative">
            <div className={`absolute -top-2 h-6 w-6 border-t-2 border-[#00C950] ${isAr ? "-right-2 border-r-2" : "-left-2 border-l-2"}`} />
            <span className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-4 md:mb-6 block ${isAr ? "mr-2" : "ml-2"}`}>
              {t("Development Portfolio", "معرض الأعمال البرمجية")}
            </span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              {isAr ? (
                <>أبرز_<span className="text-[#00C950]">المشاريع</span></>
              ) : (
                <>Top_<span className="text-[#00C950]">Projects</span></>
              )}
            </h2>
          </div>
          <div className={isAr ? "text-right md:text-left" : "text-left md:text-right"}>
            <p className="text-[12px] font-bold text-black uppercase tracking-widest">
              {t("Client Solutions // GCC Region", "حلول العملاء // منطقة الخليج")}
            </p>
            <div className="h-2 w-full md:w-48 bg-zinc-100 mt-2 overflow-hidden border border-black/10 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                className="h-full bg-[#00C950]"
              />
            </div>
          </div>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-0">
          {projects.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b-2 border-zinc-100 py-10 md:py-14 transition-all hover:bg-zinc-50 px-2 md:px-6"
            >
              <Link
                href={work.href}
                target={work.href !== "#" ? "_blank" : undefined}
                className="block w-full"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-start md:items-center gap-6 md:gap-12">
                    <span className="text-sm md:text-base font-black text-zinc-300 group-hover:text-[#00C950] transition-colors pt-2 md:pt-0">
                      {work.id}
                    </span>

                    <div className="relative">
                      <h3 className={`text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black transition-transform duration-300 ${isAr ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}>
                        {work.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">
                          {work.tech}
                        </span>

                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C950] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C950]"></span>
                        </span>

                        <span className="text-[11px] md:text-[13px] font-black text-black uppercase tracking-widest border-b-2 border-[#00C950]">
                          {work.status}
                        </span>

                        {work.isDevelopment && (
                          <div className="flex items-center gap-2 bg-amber-50 px-2.5 py-1 border-2 border-amber-400 rounded-lg">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                            </span>
                            <span className="text-[9px] md:text-[11px] font-black text-amber-700 uppercase tracking-tighter">
                              {t("Under Development", "قيد التطوير")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Metadata & Tag */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:gap-8">
                    <div className={`hidden xl:flex flex-col ${isAr ? "items-start" : "items-end"}`}>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">
                        {t("Deployed", "تم النشر")}
                      </p>
                      <p className="text-xs font-bold text-black">
                        {work.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-[10px] md:text-xs font-black uppercase border-[3px] border-black px-4 py-2.5 bg-white group-hover:bg-black group-hover:text-[#00C950] transition-all shadow-[5px_5px_0px_0px_#00C950] group-hover:shadow-none whitespace-nowrap rounded-xl group-hover:-translate-y-1">
                        {work.tag}
                      </span>

                      <div className="h-10 w-10 md:h-12 md:w-12 border-[3px] border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#00C950] transition-colors rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          className={isAr ? "rotate-180" : ""}
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}