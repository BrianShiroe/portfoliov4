"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const techStack = (t: any) => [
  {
    slug: "nextdotjs",
    name: t("Next.js", "نكست جي إس"),
    type: t("Framework", "إطار عمل"),
    level: t("Expert", "خبير"),
    focus: t("Multilingual Architecture", "بنية لغوية متعددة"),
  },
  {
    slug: "odoo",
    name: t("Odoo ERP", "أودو ERP"),
    type: t("Enterprise", "نظام مؤسسي"),
    level: t("Expert", "خبير"),
    focus: t("E-commerce & Accounting", "التجارة والمحاسبة"),
  },
  {
    slug: "googlesearchconsole",
    name: t("SEO Specialist", "خبير سيو"),
    type: t("Growth", "نمو"),
    level: t("Expert", "خبير"),
    focus: t("+500% Traffic Increase", "+٥٠٠٪ زيادة زوار"),
  },
  {
    slug: "react",
    name: t("React", "رياكت"),
    type: t("Library", "مكتبة برمجة"),
    level: t("Expert", "خبير"),
    focus: t("Interactive Systems", "أنظمة تفاعلية"),
  },
  {
    slug: "supabase",
    name: t("Supabase", "سوبابيس"),
    type: t("Backend", "قاعدة بيانات"),
    level: t("Expert", "خبير"),
    focus: t("Real-time Auth & Storage", "المصادقة والتخزين"),
  },
  {
    slug: "shopee",
    name: t("eCommerce", "تجارة إلكترونية"),
    type: t("Platforms", "منصات"),
    level: t("Expert", "خبير"),
    focus: t("Marketplace Optimization", "تحسين المتجر"),
  },
  {
    slug: "tailwindcss",
    name: t("Tailwind CSS", "تايلوند CSS"),
    type: t("Design", "تصميم"),
    level: t("Expert", "خبير"),
    focus: t("Neobrutalist UI/UX", "واجهات نيوبروتاليست"),
  },
  {
    slug: "wordpress",
    name: t("WordPress", "وردبريس"),
    type: t("CMS", "إدارة محتوى"),
    level: t("Expert", "خبير"),
    focus: t("Speed & Optimization", "تحسين السرعة"),
  },
  {
    slug: "googleads",
    name: t("Google Tools", "أدوات جوجل"),
    type: t("Ads & Merchant", "إعلانات وتاجر"),
    level: t("Experienced", "متمرس"),
    focus: t("SEM & Conversion", "التسويق عبر البحث"),
  },
  {
    slug: "html5",
    name: t("HTML5", "إتش تي إم إل"),
    type: t("Language", "لغة برمجة"),
    level: t("Expert", "خبير"),
    focus: t("Semantic & SEO Structure", "الهيكلية الدلالية والسيو"),
  },
  {
    slug: "hostinger",
    name: t("Hosting", "الاستضافة"),
    type: t("Infrastructure", "بنية تحتية"),
    level: t("Expert", "خبير"),
    focus: t("DNS & SSL Deployment", "نشر النطاق والأمان"),
  },
  {
    slug: "javascript",
    name: t("JavaScript", "جافا سكريبت"),
    type: t("Language", "لغة برمجة"),
    level: t("Expert", "خبير"),
    focus: t("Async Logic & API", "المنطق غير المتزامن"),
  },
  {
    slug: "github",
    name: t("Version Control", "إدارة النسخ"),
    type: t("Workflow", "سير العمل"),
    level: t("Expert", "خبير"),
    focus: t("CI/CD & Collaboration", "التكامل والتعاون"),
  },
];

const LocalIcon = ({ slug }: { slug: string }) => (
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 bg-black group-hover:bg-[#00C950] transition-colors duration-300"
    style={{
      WebkitMaskImage: `url(/icons/${slug}.svg)`,
      maskImage: `url(/icons/${slug}.svg)`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
    }}
  />
);

export function Skills() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);
  const stack = techStack(t);

  return (
    <section
      id="skills"
      className="relative w-full py-20 md:py-32 overflow-hidden selection:bg-black selection:text-white font-mono bg-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* TOP INDICATOR: SYNCED WITH GLOBAL BRANDING */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
              <span
                className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
              >
                {t("Technical Arsenal", "الترسانة التقنية")}
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
                  مهارات_<span className="text-[#00C950]">الخبير</span>
                </>
              ) : (
                <>
                  Expert_<span className="text-[#00C950]">Stack</span>
                </>
              )}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <p className="text-xs md:text-base font-black border-4 border-black bg-white text-black px-6 py-4 rounded-2xl uppercase tracking-widest shadow-[8px_8px_0px_0px_#00C950] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 cursor-default">
              {t("10+ Verified Tools", "أكثر من ١٠ أدوات معتمدة")}
            </p>
          </motion.div>
        </div>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group relative h-[300px] md:h-[360px] [perspective:1200px]"
            >
              <div
                className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
                  isAr
                    ? "group-hover:[transform:rotateY(-180deg)]"
                    : "group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* CARD FRONT */}
                <div className="absolute inset-0 h-full w-full border-4 border-black bg-white p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="flex justify-between items-start border-b-2 border-zinc-100 pb-4">
                    <span className="text-[10px] font-black text-[#00C950] uppercase tracking-widest">
                      {tech.level}
                    </span>
                    <span className="text-[10px] font-black text-black/20">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-grow flex items-center justify-center py-6">
                    <LocalIcon slug={tech.slug} />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-black leading-none group-hover:text-[#00C950] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-2">
                        {tech.type}
                      </p>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 border border-black/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: index * 0.1 }}
                        className="h-full bg-black group-hover:bg-[#00C950] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div
                  className={`absolute inset-0 h-full w-full border-4 border-black bg-black p-8 text-white rounded-2xl [backface-visibility:hidden] ${
                    isAr
                      ? "[transform:rotateY(-180deg)]"
                      : "[transform:rotateY(180deg)]"
                  }`}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                        <p className="text-[10px] text-[#00C950] uppercase font-black tracking-widest">
                          {t("Core Focus", "التركيز الأساسي")}
                        </p>
                      </div>
                      <p
                        className={`text-xl md:text-2xl uppercase leading-tight font-black tracking-tight italic ${isAr ? "text-right" : "text-left"}`}
                      >
                        {tech.focus}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-900 flex flex-col gap-4">
                      <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">
                        {t("Node_Status", "حالة_العقدة")}
                      </span>
                      <div className="w-full text-center py-3 bg-[#00C950] text-black font-black rounded-xl uppercase tracking-tighter text-xs shadow-[4px_4px_0px_0px_white]">
                        {t("Operational", "نشط_تعمل")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
