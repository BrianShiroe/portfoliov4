"use client";
import { motion, Variants } from "framer-motion";
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
      tech: "Next.js / Supabase / Stripe",
      status: t("Live", "مباشر"),
      href: "https://gametree.vercel.app/",
      image: "/images/gametree/thumbnail.png",
      isGithub: false,
    },
    {
      id: "02",
      title: t("Zhel Gold Jewelry", "زيل للمجوهرات"),
      tag: t("Digital Catalog", "كتالوج رقمي"),
      tech: "Next.js / Tailwind / Framer",
      status: t("Deployed", "تم النشر"),
      href: "https://zhel-gold-jewelry.vercel.app/",
      image: "/images/zhel-gold-jewelry/thumbnail.png",
      isGithub: false,
    },
    {
      id: "03",
      title: t("Blackscale Real Estate", "بلاك سكيل العقارية"),
      tag: t("PropTech", "عقارات"),
      tech: "Next.js / Supabase / UI/UX",
      status: t("Production", "قيد الإنتاج"),
      href: "https://greyscale-real-estate.vercel.app/",
      image: "/images/greyscale-real-estate/thumbnail.png",
      isGithub: false,
    },
    {
      id: "04",
      title: t("LUKA AI Detection", "لوكا للكشف الذكي"),
      tag: t("Computer Vision", "رؤية حاسوبية"),
      tech: "Python / YOLO / OpenCV",
      status: t("Source", "الكود المصدري"),
      href: "https://github.com/BrianShiroe/luka",
      image: null,
      isGithub: true,
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="w-full bg-white py-24 px-4 md:px-8 font-mono overflow-hidden scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl"
      >
        {/* --- HEADER --- */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 md:mb-24 gap-8"
        >
          <div className="space-y-4">
            {/* TOP INDICATOR: BRAND CONSISTENCY */}
            <div className="flex items-center gap-3">
              <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
              <span
                className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
              >
                {t("Proof of Concept", "إثبات المفهوم")}
              </span>
            </div>

            {/* H2 HEADER: UNIFIED TYPOGRAPHY SCALE */}
            <h2
              className={`font-black uppercase tracking-tighter text-black 
        ${
          isAr
            ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]"
            : "text-4xl md:text-6xl lg:text-7xl leading-none"
        }`}
            >
              {isAr ? (
                <>
                  أبرز_<span className="text-[#00C950]">المشاريع</span>
                </>
              ) : (
                <>
                  Selected_<span className="text-[#00C950]">Works</span>
                </>
              )}
            </h2>
          </div>

          {/* NARRATIVE SIDEBAR */}
          <div
            className={`max-w-xs text-[10px] md:text-[11px] font-bold text-zinc-500 uppercase leading-relaxed hidden lg:block ${isAr ? "border-r-2 border-zinc-100 pr-6 text-right" : "border-l-2 border-zinc-100 pl-6 text-left"}`}
          >
            {t(
              "Building robust digital infrastructures with a focus on speed, scalability, and brutalist clarity.",
              "بناء بنى تحتية رقمية قوية مع التركيز على السرعة والقابلية للتوسع والوضوح المطلق.",
            )}
          </div>
        </motion.div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projects.map((work) => (
            <motion.div key={work.id} variants={cardVariants} className="group">
              <Link
                href={work.href}
                target="_blank"
                className="block outline-none"
              >
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden border-[4px] border-black rounded-[2rem] md:rounded-[3rem] bg-zinc-50 transition-all duration-500 ${
                    isAr
                      ? "shadow-[-12px_12px_0px_0px_#000] group-hover:shadow-[-16px_16px_0px_0px_#00C950]"
                      : "shadow-[12px_12px_0px_0px_#000] group-hover:shadow-[16px_16px_0px_0px_#00C950]"
                  } group-hover:-translate-y-2`}
                >
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 600px"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-12 text-center transition-colors duration-500 group-hover:bg-black">
                      <div className="mb-6 text-[#00C950] animate-pulse">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                      </div>
                      <p className="text-white font-black text-xs md:text-sm uppercase tracking-widest opacity-80">
                        {t("Encrypted Source Code", "كود مصدري مشفر")}
                      </p>
                    </div>
                  )}

                  {/* OVERLAY LABEL */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black text-[#00C950] px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest border-2 border-[#00C950] shadow-2xl">
                      {work.isGithub ? "GITHUB.ENV" : "LIVE.PROD"}
                    </div>
                  </div>
                </div>
              </Link>

              {/* PROJECT INFO */}
              <div className="mt-10 px-2 flex justify-between items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-[#00C950] tabular-nums bg-black px-2 py-0.5 rounded">
                      {work.id}
                    </span>
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">
                      {work.tag}
                    </span>
                  </div>

                  <Link
                    href={work.href}
                    target="_blank"
                    className="block group-hover:text-[#00C950] transition-colors"
                  >
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">
                      {work.title}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#00C950] rounded-full" />
                    <p className="text-[10px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                      {work.tech}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="bg-white border-2 border-black px-4 py-1.5 rounded-xl text-[9px] font-black uppercase shadow-[2px_2px_0px_0px_#000]">
                    {work.status}
                  </div>
                  <Link href={work.href} target="_blank" className="group/btn">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: isAr ? -45 : 45 }}
                      className="h-12 w-12 bg-black text-white rounded-2xl flex items-center justify-center transition-colors group-hover/btn:bg-[#00C950] group-hover/btn:text-black shadow-lg"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      >
                        <path
                          d={
                            isAr
                              ? "M17 7L7 17M7 17h10M7 17V7"
                              : "M7 17L17 7M17 7H7M17 7V17"
                          }
                        />
                      </svg>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
