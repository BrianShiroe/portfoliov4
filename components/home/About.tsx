"use client";
import { motion, Variants } from "framer-motion";
import { useLocale } from "next-intl";

export function About() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const awards = [
    {
      title: t("Cum Laude", "امتياز مع مرتبة الشرف"),
      subtitle: t("Academic Excellence", "التميز الأكاديمي"),
      icon: "★",
    },
    {
      title: t("Best Thesis", "أفضل أطروحة"),
      subtitle: t("Research & Analysis", "البحث والتحليل"),
      icon: "◆",
    },
    {
      title: t("Top 20 AppCon", "أفضل ٢٠ في AppCon"),
      subtitle: t("Innovation Award", "جائزة الابتكار"),
      icon: "▲",
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const awardItemVariants: Variants = {
    hidden: { x: isAr ? 20 : -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* --- LEFT COLUMN: PROFESSIONAL DATA --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* Identity Card */}
            <motion.div
              variants={itemVariants}
              className={`relative border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                isAr ? "shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)]" : ""
              }`}
            >
              <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
                <div className="h-3 w-3 bg-[#00C950] rounded-full shadow-[0_0_10px_#00C950]" />
                <span className="text-[14px] font-black uppercase tracking-tight text-black">
                  {t("Professional Profile", "الملف المهني")}
                </span>
              </div>
              <ul className="space-y-3 text-[13px] md:text-[14px] uppercase font-bold">
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Name:", "الاسم:")}</span>
                  <span className="text-black">{t("Brian Haw", "برايان هو")}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Role:", "الدور:")}</span>
                  <span className="text-black">{t("Full-Stack Dev", "مطور متكامل")}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Location:", "الموقع:")}</span>
                  <span className="text-black">{t("Dubai, UAE", "دبي، الإمارات")}</span>
                </li>
              </ul>
            </motion.div>

            {/* ACCOLADES BLOCK */}
            <motion.div
              variants={itemVariants}
              className={`bg-black text-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] ${
                isAr ? "shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.1)]" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] font-black tracking-widest text-white uppercase">
                  {t("Achievements", "الإنجازات")}
                </span>
                <span className="text-[12px] font-black text-zinc-500">
                  {t("RECOGNIZED", "معتمد")}
                </span>
              </div>

              <div className="space-y-6">
                {awards.map((award) => (
                  <motion.div
                    key={award.title}
                    variants={awardItemVariants}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-700 bg-zinc-900 rounded-xl group-hover:border-[#00C950] transition-colors group-hover:bg-zinc-800">
                      <span className="text-xl group-hover:text-[#00C950] transition-colors">
                        {award.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] md:text-[15px] font-black uppercase tracking-tight transition-colors group-hover:text-zinc-100 leading-tight">
                        {award.title}
                      </span>
                      <span className="text-[10px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                        {award.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: THE NARRATIVE --- */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-black uppercase tracking-widest mb-4">
                {t("About Me", "عني")}
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className={`font-black uppercase tracking-tighter text-black 
                  ${
                    isAr
                      ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]"
                      : "text-4xl md:text-6xl lg:text-7xl leading-none"
                  }`}
              >
                {isAr ? (
                  <>
                    هندسة <br />{" "}
                    <span className="text-[#00C950]">الحلول_الرقمية</span>
                  </>
                ) : (
                  <>
                    Building <br />{" "}
                    <span className="text-[#00C950]">Modern_Web</span>
                  </>
                )}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className={`font-bold text-zinc-700 uppercase ${
                  isAr ? "text-base md:text-lg leading-relaxed" : "text-lg md:text-xl leading-relaxed"
                }`}
              >
                {t(
                  "Full-Stack Developer with 3+ years of experience specializing in high-performance headless e-commerce and AI-accelerated workflows.",
                  "مطور ويب متكامل بخبرة تزيد عن ٣ سنوات متخصص في التجارة الإلكترونية عالية الأداء وسير العمل المعزز بالذكاء الاصطناعي."
                )}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className={`space-y-6 text-zinc-500 italic ${
                  isAr
                    ? "border-r-4 border-l-0 pr-6 md:pr-8 text-sm md:text-base"
                    : "border-l-4 pr-0 pl-6 md:pl-8 text-base md:text-lg"
                } border-black font-medium`}
              >
                <p>
                  {t(
                    '"I bridge the gap between premium frontend design and scalable infrastructure. By leveraging Next.js, Cloudflare, and Agentic AI, I deliver robust e-commerce solutions that move the needle for businesses."',
                    '"أعمل على سد الفجوة بين التصميم المتميز والبنية التحتية القابلة للتوسع. من خلال الاستفادة من Next.js وCloudflare والذكاء الاصطناعي، أقدم حلولاً قوية للتجارة الإلكترونية تحقق نتائج ملموسة للأعمال."'
                  )}
                </p>
                <p>
                  {t(
                    '"My approach extends beyond the browser. I integrate custom Odoo ERP logic and serverless backend systems to automate operations, ensuring that the digital storefront is as efficient as it is beautiful."',
                    '"نهجي يتجاوز المتصفح. أقوم بدمج منطق Odoo ERP المخصص وأنظمة الخلفية البرمجية السحابية لأتمتة العمليات، مما يضمن أن يكون المتجر الرقمي فعالاً بقدر جماله."'
                  )}
                </p>
              </motion.div>

              {/* FOOTNOTE */}
              <motion.div
                variants={itemVariants}
                className={`mt-12 bg-white border-2 border-black p-6 md:p-8 rounded-2xl font-mono text-sm leading-relaxed shadow-[6px_6px_0px_0px_#00C950] ${
                  isAr ? "shadow-[-6px_6px_0px_0px_#00C950]" : ""
                }`}
              >
                <div className="flex gap-2 mb-4">
                  <span className="h-2 w-2 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
                  <span className="text-[12px] font-black uppercase text-black">
                    {t("Mission", "المهمة")}
                  </span>
                </div>
                <p className="text-zinc-800 font-bold uppercase text-[12px] md:text-[14px]">
                  {t(
                    "Focused on delivering lightning-fast, secure, and user-centric web applications. I combine 20+ projects of delivery experience with a deep understanding of modern DevOps to build the future of commerce.",
                    "أركز على تقديم تطبيقات ويب سريعة البرق وآمنة وتتمحور حول المستخدم. أجمع بين خبرة تسليم أكثر من ٢٠ مشروعاً وفهم عميق للعمليات السحابية الحديثة لبناء مستقبل التجارة."
                  )}
                </p>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className={`inline-block w-2 h-4 bg-[#00C950] translate-y-1 ${
                    isAr ? "mr-1" : "ml-1"
                  }`}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}