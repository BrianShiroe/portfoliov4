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
      title: "GameTree",
      tag: t("E-COMMERCE PLATFORM", "منصة تجارة إلكترونية"),
      tech: "Next.js / Supabase / Stripe",
      href: "https://gametree.vercel.app/",
      image: "/images/gametree/thumbnail.png",
      description: t(
        "A comprehensive e-commerce ecosystem featuring dedicated workflows for visitors, customers, and admins. Includes integrated Stripe payments, dynamic shipping calculations, and a full administrative suite for product management.",
        "نظام متكامل للتجارة الإلكترونية يوفر مسارات عمل مخصصة للزوار والعملاء والمديرين. يتضمن عمليات دفع عبر Stripe، حساب تلقائي لرسوم الشحن، ولوحة تحكم شاملة لإدارة وتعديل المنتجات.",
      ),
    },
    {
      id: "02",
      title: "Zhel Jewelry",
      tag: t("DIGITAL CATALOG", "كتالوج رقمي"),
      tech: "Next.js / Tailwind / Framer",
      href: "https://zhel-gold-jewelry.vercel.app/",
      image: "/images/zhel-gold-jewelry/thumbnail.png",
      description: t(
        "A high-performance one-page catalog built with Next.js and Tailwind CSS, designed to showcase luxury gold products with smooth, immersive visual interactions.",
        "موقع من صفحة واحدة (One-page) عالي الأداء مبني بـ Next.js وTailwind، مصمم لعرض منتجات الذهب بجمالية بصرية وتفاعلات سلسة.",
      ),
    },
    {
      id: "03",
      title: "Blackscale",
      tag: t("MODERN REAL ESTATE", "عقارات عصرية"),
      tech: "Next.js / Tailwind / UI/UX",
      href: "https://greyscale-real-estate.vercel.app/",
      image: "/images/greyscale-real-estate/thumbnail.png",
      description: t(
        "A minimalist, dark-themed single-page landing for real estate, focusing on premium aesthetic and architectural layout without backend overhead.",
        "واجهة هبوط (Landing Page) من صفحة واحدة للعقارات، تعتمد تصميماً داكناً وبسيطاً يركز على الجمالية الفائقة والتنسيق المعماري دون الحاجة لتعقيدات خلفية.",
      ),
    },
    {
      id: "04",
      title: "LUKA AI",
      tag: t("AI SAFETY SYSTEM", "نظام أمان ذكي"),
      tech: "Python / YOLOv11 / OpenCV",
      href: "https://github.com/BrianShiroe/luka",
      image: null,
      description: t(
        "A cutting-edge disaster detection system leveraging YOLOv11 for ultra-fast real-time object recognition. The model was trained using OpenCV and CNN to detect environmental hazards and trigger automated emergency alerts.",
        "نظام متطور للكشف عن الكوارث يعتمد على YOLOv11 للتعرف اللحظي فائق السرعة على الأجسام. تم تدريب النموذج باستخدام OpenCV وCNN للكشف عن المخاطر البيئية وتفعيل تنبيهات الطوارئ المؤتمتة.",
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#FAFAFA] py-32 px-6 font-mono relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span
              className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Case Studies", "دراسات الحالة")}
            </span>
          </div>
          <h2
            className={`font-black uppercase tracking-tighter text-black ${isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"}`}
          >
            {isAr ? (
              <>
                أبرز_<span className="text-[#00C950]">المشاريع</span>
              </>
            ) : (
              <>
                Top_<span className="text-[#00C950]">Projects</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* --- STAGGERED LIST --- */}
        <div className="flex flex-col gap-48 md:gap-64">
          {projects.map((work, index) => {
            const isEven = index % 2 === 0;
            const xOffset = isEven ? -80 : 80;

            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  delay: index * 0.1, // Staggered delay for cascading effect
                  ease: [0.25, 1, 0.5, 1], // Smooth out-expo easing
                }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-[65%] group">
                  <Link href={work.href} target="_blank">
                    <div className="relative aspect-[1.92/1] bg-white border-[3px] border-black rounded-[15px] overflow-hidden shadow-[15px_15px_0px_0px_#000] group-hover:shadow-[10px_10px_0px_0px_#00C950] group-hover:-translate-y-2 transition-all duration-500">
                      {work.image ? (
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          quality={95}
                          priority={index === 0}
                          // Added sizes prop for performance optimization
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 65vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-12 text-center group-hover:bg-black transition-colors">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="mb-6 text-[#00C950]"
                          >
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                          <p className="text-white font-black text-xs uppercase tracking-widest">
                            {t("Source Code Secure", "الكود المصدري مؤمن")}
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-[35%] ${isEven ? "text-left" : "md:text-right"} space-y-8`}>
                  <div className="space-y-4">
                    <div className={`flex items-center gap-3 ${isEven ? "justify-start" : "md:justify-end"}`}>
                      <span className="text-xs font-black text-white bg-black px-2 py-1 rounded-[4px]">{work.id}</span>
                      <span className="text-[10px] font-black text-[#00C950] tracking-[0.3em] uppercase">
                        {work.tag}
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
                      {work.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-500 leading-relaxed max-w-sm ml-0 mr-auto md:ml-auto md:mr-0">
                      {work.description}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-6">
                    <p className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">{work.tech}</p>
                    <div className={`flex ${isEven ? "justify-start" : "md:justify-end"}`}>
                      <Link
                        href={work.href}
                        target="_blank"
                        className="group/btn relative inline-flex items-center gap-4"
                      >
                        <span className="text-xs font-black uppercase tracking-tight group-hover:text-[#00C950] transition-colors">
                          {t("Exploration", "استكشاف")}
                        </span>
                        <div className="h-12 w-12 bg-black text-white rounded-[12px] flex items-center justify-center group-hover/btn:bg-[#00C950] group-hover/btn:text-black transition-all shadow-lg group-hover/btn:rotate-12">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          >
                            <path d={isAr ? "M17 7L7 17M7 17h10M7 17V7" : "M7 17L17 7M17 7H7M17 7V17"} />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
