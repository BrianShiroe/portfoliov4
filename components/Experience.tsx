"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const history = [
    {
      period: t("SEP 2025 – PRESENT", "سبتمبر ٢٠٢٥ – الحالي"),
      company: t("ITD INNOVATION", "آي تي دي للابتكار"),
      location: t("DUBAI, UAE", "دبي، الإمارات"),
      role: t("Web Developer & IT Specialist", "مطور ويب وأخصائي تقنية معلومات"),
      status: t("CURRENT", "الحالي"),
      stack: "Wordpress / Shopify / Odoo ERP / HTML / CSS / Javascript",
      tasks: [
        t("Wordpress Web Development", "تطوير مواقع ووردبريس"),
        t("E-Commerce Development", "تطوير التجارة الإلكترونية"),
        t("Odoo ERP Implementation", "تنفيذ نظام أودو ERP"),
        t("Shopify Development", "تطوير منصة شوبيفاي"),
        t("Graphics Design", "التصميم الجرافيكي"),
        t("Digital & Social Media Marketing", "التسويق الرقمي والاجتماعي"),
        t("Google Tools", "أدوات جوجل"),
        t("Hosting & Website Management", "إدارة الاستضافة والمواقع"),
      ],
      color: "text-black",
    },
    {
      period: t("MAY 2024 – AUG 2024", "مايو ٢٠٢٤ – أغسطس ٢٠٢٤"),
      company: "DPWH - OLONGAPO",
      location: t("PHILIPPINES", "الفلبين"),
      role: t("PHP Developer & IT Support", "مطور PHP ودعم فني"),
      status: t("COMPLETED", "مكتمل"),
      stack: "HTML / CSS / Javascript / PHP / MySQL",
      tasks: [
        t("Full-Stack Development", "تطوير كامل المواقع"),
        t("PHP Development", "برمجة PHP"),
        t("IT Assistance", "المساعدة التقنية"),
        t("Hardware & Software Configurations", "إعداد العتاد والبرمجيات"),
      ],
      color: "text-zinc-400",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono border-b-4 border-black"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl relative">
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-32">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#00C950]" />
            <span className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 md:mt-2 ${isAr ? "mr-2" : "ml-2"}`}>
              {t("Professional History", "التاريخ المهني")}
            </span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            {isAr ? (
              <>مسيرة_<span className="text-[#00C950]">العمل</span></>
            ) : (
              <>Career_<span className="text-[#00C950]">Timeline</span></>
            )}
          </h2>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className={`relative border-black ${isAr ? "border-r-2 md:border-r-4 mr-2 md:mr-0" : "border-l-2 md:border-l-4 ml-2 md:ml-0"}`}>
          {history.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-16 md:mb-24 last:mb-0 group ${isAr ? "pr-6 md:pr-24" : "pl-6 md:pl-24"}`}
            >
              {/* Timeline Marker */}
              <div className={`absolute top-1.5 md:top-2 h-4 w-4 md:h-6 md:w-6 border-2 md:border-4 border-black bg-white flex items-center justify-center transition-transform group-hover:scale-125 ${isAr ? "-right-[9px] md:-right-[14px]" : "-left-[9px] md:-left-[14px]"}`}>
                <div
                  className={`h-1.5 w-1.5 md:h-2 md:w-2 ${index === 0 ? "bg-[#00C950]" : "bg-zinc-200"}`}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Time & Status Column */}
                <div className="lg:col-span-3 flex flex-col items-start pt-1 md:pt-2">
                  <div className={`px-3 py-1.5 md:px-4 md:py-2 bg-black text-white mb-3 shadow-black ${isAr ? "shadow-[-4px_4px_0px_0px_#00C950] md:shadow-[-6px_6px_0px_0px_#00C950]" : "shadow-[4px_4px_0px_0px_#00C950] md:shadow-[6px_6px_0px_0px_#00C950]"}`}>
                    <span className="text-[10px] md:text-xs font-black tracking-widest whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 ${job.color}`}>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                      {job.status}
                    </span>
                    {index === 0 && (
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 bg-[#00C950] rounded-full animate-ping" />
                    )}
                  </div>
                  {job.stack && (
                    <div className="mt-3 md:mt-4 p-2 md:p-3 border-2 border-black/5 bg-zinc-50 w-full">
                      <span className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase leading-tight block">
                        {isAr ? "التقنيات:" : "Stack:"} {job.stack}
                      </span>
                    </div>
                  )}
                </div>

                {/* Company & Role Column */}
                <div className="lg:col-span-9">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <span className="text-xs md:text-sm font-black text-black uppercase tracking-widest">
                        {job.company}
                      </span>
                      <span className="text-zinc-300 font-bold hidden xs:inline">
                        |
                      </span>
                      <span className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">
                        {job.location}
                      </span>
                    </div>

                    <h3 className={`text-2xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[1.1] mb-6 md:mb-8 group-hover:text-zinc-600 transition-colors ${isAr ? "md:leading-[1.3]" : ""}`}>
                      {job.role}
                    </h3>

                    {/* Responsibilities */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {job.tasks.map((task) => (
                        <span
                          key={task}
                          className={`text-[9px] md:text-xs font-black uppercase border-2 border-black px-3 py-1.5 md:px-4 md:py-2 hover:bg-black hover:text-[#00C950] transition-all cursor-default shadow-black hover:shadow-[#00C950] ${isAr ? "shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_#00C950]" : "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_#00C950]"}`}
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER SCALE */}
      <div className={`mx-auto max-w-6xl mt-20 md:mt-32 pt-8 md:pt-10 border-t-2 md:border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6 ${isAr ? "md:flex-row-reverse" : ""}`}>
        <span className="text-[9px] md:text-sm font-black uppercase tracking-[0.2em] text-black text-center md:text-left">
          BrianShiroe // {t("Professional Experience History", "تاريخ الخبرة المهنية")}
        </span>
        <div className={`flex gap-3 md:gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 md:h-4 md:w-4 border-2 border-black ${i < 3 ? "bg-[#00C950]" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}