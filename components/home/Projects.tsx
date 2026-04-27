"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

export function Projects() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const projects = [
    {
      id: "01",
      title: t("GameTree", "جيم تري"),
      tag: t("Marketplace", "سوق الألعاب"),
      tech: "Next.js / Supabase / Ecommerce",
      status: t("Live", "مباشر"),
      href: "https://gametree.vercel.app/",
      image: "/images/gametree/thumbnail.png",
      isGithub: false,
    },
    {
      id: "02",
      title: t("Zhel Gold Jewelry", "زيل للمجوهرات"),
      tag: t("E-commerce", "تجارة إلكترونية"),
      tech: "Next.js / Static / UI/UX",
      status: t("Deployed", "تم النشر"),
      href: "https://zhel-gold-jewelry.vercel.app/",
      image: "/images/zhel-gold-jewelry/thumbnail.png",
      isGithub: false,
    },
    {
      id: "03",
      title: t("Greyscale Real Estate", "جريسكيل العقارية"),
      tag: t("PropTech", "عقارات"),
      tech: "Next.js / Static / UI/UX",
      status: t("Deployed", "تم النشر"),
      href: "https://greyscale-real-estate.vercel.app/",
      image: "/images/greyscale-real-estate/thumbnail.png",
      isGithub: false,
    },
    {
      id: "04",
      title: t("LUKA AI Detection", "لوكا للكشف الذكي"),
      tag: t("AI / Research", "مشروع تخرج"),
      tech: "Python / YOLO / OpenCV / AI",
      status: t("Source", "الكود المصدري"),
      href: "https://github.com/BrianShiroe/luka",
      image: null,
      isGithub: true,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-white py-24 px-4 md:px-8 font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="h-3 w-12 bg-[#00C950] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
                {t("Case Studies", "دراسات الحالة")}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black">
              {isAr ? "المشاريع_" : "Selected_"}
              <span className="text-[#00C950]">Works</span>
            </h2>
          </div>
          
          <div className="hidden lg:block max-w-xs text-[10px] font-bold text-zinc-500 uppercase leading-relaxed">
            {t(
              "A collection of digital products focused on performance, high-contrast aesthetics, and seamless user flow.",
              "مجموعة من المنتجات الرقمية التي تركز على الأداء، وجماليات التباين العالي، وسلاسة تجربة المستخدم."
            )}
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={work.href} target="_blank" className="block cursor-pointer">
                <div className="relative aspect-[2500/1400] w-full overflow-hidden border-[4px] border-black rounded-[2.5rem] bg-zinc-100 shadow-[10px_10px_0px_0px_#000] group-hover:shadow-[15px_15px_0px_0px_#00C950] group-hover:-translate-y-2 transition-all duration-500">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 600px"
                    />
                  ) : (
                    /* SOURCE CODE PLACEHOLDER */
                    <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-12 text-center group-hover:bg-black transition-colors duration-500">
                      <div className="mb-4 text-[#00C950]">
                         <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                         </svg>
                      </div>
                      <p className="text-white font-black text-sm sm:text-base md:text-xl uppercase tracking-tighter whitespace-nowrap">
                        {t("Source Code on GitHub", "الكود المصدري على جيت هاب")}
                      </p>
                      <div className="mt-4 h-1 w-12 bg-[#00C950] rounded-full" />
                    </div>
                  )}
                  
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black text-[#00C950] px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest border-2 border-[#00C950] shadow-xl">
                      {work.isGithub ? t("View Source", "عرض الكود") : t("View Site", "زيارة الموقع")}
                    </div>
                  </div>
                </div>
              </Link>

              {/* PROJECT INFO */}
              <div className="mt-8 px-4 flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-[#00C950] tabular-nums">
                      {work.id}
                    </span>
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                      {work.tag}
                    </span>
                  </div>
                  <Link href={work.href} target="_blank" className="block hover:text-[#00C950] transition-colors cursor-pointer">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
                      {work.title}
                    </h3>
                  </Link>
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                    {work.tech}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="bg-zinc-100 border-2 border-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase">
                    {work.status}
                  </div>
                  <Link href={work.href} target="_blank" className="cursor-pointer">
                    <motion.div 
                      whileHover={{ x: isAr ? -5 : 5, backgroundColor: "#00C950", color: "#000" }}
                      className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d={isAr ? "M17 7L7 17M7 17h10M7 17V7" : "M7 17L17 7M17 7H7M17 7V17"} />
                      </svg>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        {/* <div className="mt-24 text-center">
          <Link href="https://github.com/BrianShiroe" target="_blank" className="inline-block cursor-pointer">
            <button className="bg-black text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-tighter text-lg border-4 border-black hover:bg-[#00C950] hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none cursor-pointer">
              {t("Explore All Code", "استكشاف الكود بالكامل")}
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}