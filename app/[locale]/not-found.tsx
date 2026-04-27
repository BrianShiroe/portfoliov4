"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export default function NotFound() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center px-4 text-center font-sans overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-8"
        >
          <div className="relative w-24 h-24 bg-black rounded-2xl border-4 border-zinc-200 flex items-center justify-center shadow-xl">
            <div className="flex gap-4">
              <motion.div
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.55, 1],
                }}
                className="w-3 h-6 bg-green-500 rounded-full"
              />
              <motion.div
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.55, 1],
                }}
                className="w-3 h-6 bg-green-500 rounded-full"
              />
            </div>
          </div>

          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/10 blur-md rounded-full"
          />
        </motion.div>

        <h1 className="text-[100px] md:text-[150px] font-black leading-none tracking-tighter text-zinc-100 select-none">
          404
        </h1>

        <div className="z-10">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            {t("Lost in the Digital Void", "تائه في الفراغ الرقمي")}
          </h2>
          <p className="mt-2 text-sm text-zinc-500 max-w-md mx-auto font-medium">
            {t(
              "The page you are looking for doesn't exist or has been moved to a different coordinate.",
              "الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى إحداثيات مختلفة."
            )}
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${locale}`}
            className="group relative flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg overflow-hidden transition-all active:scale-95"
          >
            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest">
              {t("Back to Home", "العودة للرئيسية")}
            </span>
          </Link>

          <Link
            href={`/${locale}/#projects`}
            className="flex items-center justify-center px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all active:scale-95"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">
              {t("View Projects", "مشاهدة المشاريع")}
            </span>
          </Link>
        </div>

        <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent:100%)]" />
      </motion.div>
    </main>
  );
}

