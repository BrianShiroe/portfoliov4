"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/store/useStore';

export function SystemLoader() {
  const { lang, t, setLoaded } = useAppStore();
  const isAr = lang === 'ar';
  
  // 1. حارس الهدرجة لمنع أخطاء الـ Hydration
  const [mounted, setMounted] = useState(false);
  
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [entropy, setEntropy] = useState("0x000000");
  const [currentLog, setCurrentLog] = useState(0);

  const logs = isAr ? [
    "جاري_تهيئة_المحرك_العصبي...",
    "توثيق_المستخدم: BrianShiroe [تم التحقق]",
    "تحميل_وحدات_Odoo_ERP...",
    "مزامنة_إطار_Next.js...",
    "تحسين_مكونات_React...",
    "نشر_واجهات_Shopify...",
    "إعداد_نظام_WordPress_CRM...",
    "النظام_مستقر._فتح_الواجهة.",
  ] : [
    "Initializing_Neural_Engine...",
    "User_Auth: BrianShiroe [Verified]",
    "Loading_Odoo_ERP_Modules...",
    "Syncing_Next.js_Framework...",
    "Optimizing_React_Components...",
    "Deploying_Shopify_Storefronts...",
    "Configuring_WordPress_CRM...",
    "System_Stable. Opening_Interface.",
  ];

  // 2. مراقبة التقدم لتحديث الحالة العالمية (Zustand) خارج دورة الصيرورة (Render Cycle)
  useEffect(() => {
    if (progress >= 100) {
      // تحديث الحالة العالمية هنا آمن لأننا داخل useEffect
      setLoaded(true); 
      
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1200);
      
      return () => clearTimeout(exitTimer);
    }
  }, [progress, setLoaded]);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() < 0.2 ? 0.5 : Math.random() * 18;
        return Math.min(oldProgress + diff, 100);
      });
    }, 180);

    const hexTimer = setInterval(() => {
      setEntropy(
        "0x" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .toUpperCase()
          .padStart(6, "0"),
      );
    }, 100);

    const logTimer = setInterval(() => {
      setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(hexTimer);
      clearInterval(logTimer);
    };
  }, [logs.length]);

  // لا يتم عرض أي شيء على الخادم لتجنب تعارض النصوص
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.1, ease: [0.8, 0, 0.1, 1] },
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white font-mono overflow-hidden"
          dir={isAr ? "rtl" : "ltr"}
        >
          {/* DECOR: TOP STATUS */}
          <div className={`absolute top-10 hidden lg:block opacity-30 ${isAr ? "left-10 text-left" : "right-10 text-right"}`}>
            <p className="text-xs leading-relaxed font-black uppercase tracking-widest">
              {t("Entropy", "العشوائية")}: {entropy}
              <br />
              {t("Link: Secured", "الارتباط: آمن")}
              <br />
              {t("Node: DXB_01", "العقدة: DXB_01")}
            </p>
          </div>

          {/* DECOR: SIDE TOPOLOGY */}
          <div className={`absolute top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-10 ${isAr ? "right-10" : "left-10"}`}>
            <div className="h-24 w-[1px] bg-black relative">
              <div className="absolute top-0 -left-1 h-2 w-2 bg-black rounded-full" />
              <div className="absolute bottom-0 -left-1 h-2 w-2 bg-black rounded-full" />
              <div className={`absolute top-1/2 w-10 h-[1px] bg-black ${isAr ? "-right-10" : "-left-10"}`} />
            </div>
            <span className={`text-[10px] font-black tracking-[0.5em] uppercase ${isAr ? "-rotate-90 origin-right mt-12" : "rotate-90 origin-left mt-12"}`}>
              {t("Architecture_Map", "خريطة_المعمارية")}
            </span>
          </div>

          <div className="w-full max-w-[420px] flex flex-col gap-10 px-8">
            {/* 1. IDENTITY */}
            <div className="relative group">
              <div className={`flex flex-col gap-2 border-black ${isAr ? "border-r-[4px] pr-6" : "border-l-[4px] pl-6"}`}>
                <span className="text-[11px] font-black uppercase text-zinc-500 tracking-[0.4em]">
                  {t("Web_Developer", "مطور_ويب")}
                </span>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                  BrianShiroe<span className="animate-pulse">_</span>
                </h1>
              </div>
              <div className={`absolute -top-2 text-[10px] font-black bg-black text-white px-2 py-1 uppercase tracking-widest ${isAr ? "-left-2" : "-right-2"}`}>
                v5.0
              </div>
            </div>

            {/* 2. PROGRESS MODULE */}
            <div className="flex flex-col gap-6 bg-zinc-50/80 p-6 border border-zinc-100 rounded-xl shadow-sm">
              <div className="flex justify-between items-end">
                <div className="flex gap-2 mb-1">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      className="h-6 w-2 bg-black"
                      animate={{ opacity: [0.1, 1, 0.1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <div className={`flex flex-col ${isAr ? "items-start" : "items-end"}`}>
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">
                    {t("Process_Load", "تحميل_العملية")}
                  </span>
                  <span className="text-xl font-black text-black tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>

              <div className="w-full h-4 bg-zinc-200 relative overflow-hidden rounded-full">
                <motion.div
                  className={`absolute top-0 h-full bg-black ${isAr ? "right-0" : "left-0"}`}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                />
              </div>
            </div>

            {/* 3. TERMINAL */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 opacity-30">
                <div className="h-[1px] flex-1 bg-black" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {t("Diagnostic_Stream", "بث_التشخيص")}
                </span>
                <div className="h-[1px] flex-1 bg-black" />
              </div>
              <div className="min-h-[60px] flex items-start justify-center text-center">
                <motion.p
                  key={currentLog}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-bold uppercase tracking-wide text-zinc-700 leading-relaxed"
                >
                  {logs[currentLog]}
                </motion.p>
              </div>
            </div>

            {/* 4. FOOTER */}
            <div className="grid grid-cols-2 gap-6 border-t border-zinc-100 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                  {t("Core_Environment", "البيئة_الأساسية")}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-800">
                  {t("Production_Secure", "الإنتاج_آمن")}
                </span>
              </div>
              <div className={`flex flex-col gap-1 ${isAr ? "items-start" : "items-end"}`}>
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                  {t("Deployment_Origin", "مصدر_النشر")}
                </span>
                <span className={`text-[11px] font-bold uppercase tracking-tight text-zinc-800 ${isAr ? "text-left" : "text-right"}`}>
                  {t("DXB_UAE_SATELLITE", "قمر_دبي_الإماراتي")}
                </span>
              </div>
            </div>
          </div>

          {/* BACKGROUND TEXTURE */}
          <div
            className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1.5px, transparent 1.5px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}