"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const groups = [
    {
      title: t("Frontend", "الواجهة الأمامية"),
      items: ["JavaScript", "TypeScript", "Next.js (App Router)", "React", "Tailwind CSS"],
    },
    {
      title: t("Backend & Systems", "الخلفية والأنظمة"),
      items: ["Node.js", "Python (Flask)", "PHP", "RESTful APIs", "Webhooks"],
    },
    {
      title: t("Database & Data", "قواعد البيانات والمعلومات"),
      items: ["PostgreSQL", "Supabase", "Railway", "Database Schema Design", "Authentication & RLS"],
    },
    {
      title: t("Infrastructure & DevOps", "البنية التحتية"),
      items: ["Git/GitHub", "CI/CD Pipelines", "Vercel / Hostinger", "Domain & DNS Management"],
    },
    {
      title: t("AI & Machine Learning", "الذكاء الاصطناعي"),
      items: ["Computer Vision", "YOLOv11", "Object Detection", "AI Model Training"],
    },
    {
      title: t("SEO & Analytics", "السيو والتحليلات"),
      items: ["Search Console", "GA4", "Google Ads", "Merchant Center"],
    },
    {
      title: t("Platforms & ERP", "المنصات والأنظمة"),
      items: ["Shopify", "Odoo ERP", "WordPress CMS"],
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate the exact distance: Total width minus one screen width
      // This ensures the last card stops at the right edge of the screen.
      const getXDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => isAr ? getXDistance() : -getXDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // The scroll duration is now tied strictly to the movement distance
          end: () => `+=${getXDistance()}`, 
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, [isAr]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full h-screen overflow-hidden bg-white selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="h-full flex flex-col justify-center">
        {/* --- HEADER --- */}
        <div className="mx-auto max-w-7xl w-full px-6 md:px-12 mb-12 md:mb-20 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-black" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">
              {t("Technical Ecosystem", "المنظومة التقنية")}
            </span>
          </div>
          
          <h2 className={`font-black uppercase tracking-tighter text-black ${isAr ? "text-5xl md:text-7xl" : "text-5xl md:text-8xl"} leading-none`}>
            {isAr ? (
              <>الخبرة_<span className="text-[#00C950]">التقنية</span></>
            ) : (
              <>Tech_<span className="text-[#00C950]">Stacks</span></>
            )}
          </h2>
        </div>

        {/* --- TRACK --- */}
        <div 
          ref={trackRef} 
          className="flex gap-20 md:gap-32 px-6 md:px-12 lg:px-24 w-max items-start will-change-transform"
        >
          {groups.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-8 min-w-[280px] md:min-w-[400px] shrink-0">
              <div className="relative">
                <span className="absolute -top-6 left-0 text-[10px] font-black text-[#00C950]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase border-b-4 border-black pb-4 text-black">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-4 transition-all duration-300"
                  >
                    <div className="h-1.5 w-1.5 bg-zinc-200 group-hover:bg-[#00C950] group-hover:scale-150 transition-all duration-300" />
                    <span className="text-sm md:text-lg font-bold text-zinc-500 group-hover:text-black transition-colors uppercase tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* No extra buffer div needed here anymore since we want it to stop exactly on the last card */}
        </div>
      </div>
    </section>
  );
}