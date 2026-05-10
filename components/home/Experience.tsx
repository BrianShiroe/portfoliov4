"use client";
import { motion, Variants } from "framer-motion";
import { useLocale } from "next-intl";

export function Experience() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const history = [
    {
      period: t("MAY 2025 – MAY 2026", "مايو ٢٠٢٥ – مايو ٢٠٢٦"),
      company: t("ITD INNOVATION", "آي تي دي للابتكار"),
      location: t("DUBAI, UAE", "دبي، الإمارات"),
      role: t("Full Stack Developer", "مطور فول ستاك"),
      status: t("CURRENT", "الحالي"),
      stack: "Next.js / Medusa.js / Cloudflare Workers / Odoo API / Agentic AI",
      tasks: [
        t("20+ E-commerce Storefronts Built", "بناء أكثر من ٢٠ متجر إلكتروني"),
        t("Headless Commerce (Medusa/Shopify)", "تجارة بلا رأس (ميدوزا/شوبيفاي)"),
        t("Infrastructure & DNS Management", "إدارة البنية التحتية والـ DNS"),
        t("Agentic AI Automation (Cline/Ollama)", "أتمتة الذكاء الاصطناعي (Cline/Ollama)"),
        t("Custom Odoo ERP Integrations", "تكاملات مخصصة لنظام أودو"),
        t("Payment Gateway & Serverless Logic", "بوابات الدفع والمنطق البرمجي السحابي"),
        t("CI/CD & High-Availability Systems", "أنظمة النشر المستمر والجاهزية العالية"),
      ],
      color: "text-black",
    },
    {
      period: t("JUNE 2022 – AUG 2024", "يونيو ٢٠٢٢ – أغسطس ٢٠٢٤"),
      company: "DPWH - PHILIPPINES",
      location: t("PHILIPPINES", "الفلبين"),
      role: t("Web Developer & IT Admin", "مطور ويب ومسؤول تقني"),
      status: t("COMPLETED", "مكتمل"),
      stack: "PostgreSQL / REST APIs / Technical SEO / RBAC / UI UX",
      tasks: [
        t("Asset Management System Interface", "واجهة نظام إدارة الأصول"),
        t("Full-Stack API Synchronization", "مزامنة البيانات عبر الـ APIs"),
        t("PostgreSQL Schema & Migrations", "إدارة وتطوير قواعد البيانات"),
        t("Technical SEO & Accessibility", "السيو التقني ومعايير الوصول"),
        t("Role-Based Access Control", "نظام التحكم في الوصول القائم على الأدوار"),
        t("Internal Security & Auth Protocols", "بروتوكولات الأمان والمصادقة"),
        t("Network & Infrastructure Support", "دعم الشبكات والبنية التحتية"),
      ],
      color: "text-zinc-400",
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: isAr ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="experience"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl relative"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span
              className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Professional History", "التاريخ المهني")}
            </span>
          </div>

          <h2
            className={`font-black uppercase tracking-tighter text-black 
      ${isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"}`}
          >
            {isAr ? (
              <>
                مسار_<span className="text-[#00C950]">العمل</span>
              </>
            ) : (
              <>
                Experience_<span className="text-[#00C950]">Path</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* --- TIMELINE GRID --- */}
        <div className={`relative border-black/10 ${isAr ? "border-r-4 mr-1 md:mr-0" : "border-l-4 ml-1 md:ml-0"}`}>
          {history.map((job, index) => (
            <motion.div
              key={job.company}
              variants={itemVariants}
              className={`relative mb-20 md:mb-32 last:mb-0 group ${isAr ? "pr-8 md:pr-24" : "pl-8 md:pl-24"}`}
            >
              {/* Timeline Marker */}
              <div
                className={`absolute top-2 h-6 w-6 md:h-8 md:w-8 border-[3px] border-black bg-white rounded-full flex items-center justify-center transition-all group-hover:border-[#00C950] group-hover:scale-110 z-10 ${
                  isAr ? "-right-[15px] md:-right-[20px]" : "-left-[15px] md:-left-[20px]"
                }`}
              >
                <div
                  className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full ${index === 0 ? "bg-[#00C950]" : "bg-zinc-200"}`}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Meta Column */}
                <div className="lg:col-span-4 flex flex-col items-start">
                  <div
                    className={`px-4 py-2 bg-black text-white mb-4 rounded-xl font-black text-[10px] md:text-xs tracking-widest uppercase ${
                      isAr ? "shadow-[-4px_4px_0px_0px_#00C950]" : "shadow-[4px_4px_0px_0px_#00C950]"
                    }`}
                  >
                    {job.period}
                  </div>

                  <div className={`flex items-center gap-2 mb-6 ${job.color}`}>
                    <span className="text-[10px] font-black uppercase tracking-widest">{job.status}</span>
                    {index === 0 && <span className="h-2 w-2 bg-[#00C950] rounded-full animate-ping" />}
                  </div>

                  <div className="p-5 border-2 border-black/5 bg-zinc-50/50 rounded-2xl w-full group-hover:border-[#00C950]/30 transition-colors">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase leading-relaxed">
                      <span className="text-black font-black block mb-1">{isAr ? "التقنيات" : "Stack"}:</span>
                      {job.stack}
                    </p>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4 opacity-60">
                    <span className="text-xs font-black text-black uppercase tracking-widest">{job.company}</span>
                    <span className="h-1 w-1 bg-zinc-300 rounded-full" />
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{job.location}</span>
                  </div>

                  <h3
                    className={`text-3xl md:text-6xl font-black uppercase tracking-tighter text-black leading-[0.95] mb-10 group-hover:text-[#00C950] transition-colors ${isAr ? "md:leading-[1.2]" : ""}`}
                  >
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {job.tasks.map((task) => (
                      <span
                        key={task}
                        className={`text-[9px] md:text-xs font-black uppercase border-2 border-black px-4 py-2.5 rounded-xl transition-all bg-white hover:bg-black hover:text-[#00C950] ${
                          isAr ? "shadow-[-3px_3px_0px_0px_#00C950]" : "shadow-[3px_3px_0px_0px_#00C950]"
                        } hover:shadow-none hover:translate-y-0.5`}
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- DECORATIVE FOOTER --- */}
        <motion.div
          variants={itemVariants}
          className="mt-32 pt-10 border-t-2 border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30"
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black">
            {isAr ? "دبي // ٢٠٢٦" : "Dubai // 2026"}
          </span>
          <div className="flex gap-1.5">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`h-5 w-[2.5px] bg-black rounded-full ${i % 4 === 0 ? "h-7 bg-[#00C950]" : ""}`} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
