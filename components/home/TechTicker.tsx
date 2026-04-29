"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export function TechTicker() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const techStack = [
    { name: "Next.js", accent: "//" },
    { name: "React.js", accent: "//" },
    { name: "Shopify", accent: "//" },
    { name: "Odoo ERP", accent: "//" },
  ];

  return (
    // Changed: Removed absolute positioning and z-index to let it flow in the flex container
    <div className="w-full border-t-2 border-b-2 border-black bg-white py-1 overflow-hidden flex items-center h-12">
      <motion.div
        animate={{ x: isAr ? [1200, 0] : [0, -1200] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-8 md:gap-12 text-[10px] md:text-[12px] font-black uppercase text-black whitespace-nowrap items-center font-mono"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-4">
            {techStack.map((tech, idx) => (
              <span key={idx} className="flex gap-4">
                <span>{tech.name}</span>
                <span className="text-[#00C950]">{tech.accent}</span>
              </span>
            ))}
            <span className={`italic text-[#00C950] ${isAr ? "font-arabic" : ""}`}>
              {t("UAE Based", "مقرنا في الإمارات")}
            </span>
            <span className="text-[#00C950]">//</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}