"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export function Experience() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const history = [
    {
      period: t("SEP 2025 – MAY 2026", "سبتمبر ٢٠٢٥ – مايو ٢٠٢٦"),
      company: t("ITD INNOVATION", "آي تي دي للابتكار"),
      location: t("DUBAI, UAE", "دبي، الإمارات"),
      role: t("Web Developer & Digital Marketing", "مطور ويب وتسويق رقمي"),
      status: t("CURRENT", "الحالي"),
      // Expanded stack to reflect your full toolkit
      stack: "React / Next.js / Odoo ERP / Shopify / WordPress / Tailwind CSS",
      tasks: [
        t("Full-Stack Development", "تطوير كامل المواقع"),
        t(
          "Multilingual SEO (+500% Traffic)",
          "سيو متعدد اللغات (+٥٠٠٪ حركة زوار)",
        ),
        t(
          "E-Commerce & Payment Integration",
          "التجارة الإلكترونية وتكامل الدفع",
        ),
        t("Odoo ERP & Accounting Ops", "نظام أودو والعمليات المحاسبية"),
        t(
          "Google Ecosystem (Ads/Merchant)",
          "أدوات جوجل (إعلانات/مركز التجار)",
        ),
        t("Hosting & DNS Management", "إدارة الاستضافة ونظام الأسماء"),
        t("UI/UX & Social Media Graphics", "واجهة المستخدم ورسوم التواصل"),
        t("30+ Web Projects Delivered", "أكثر من ٣٠ مشروع ويب تم تسليمه"),
      ],
      color: "text-black",
    },
    {
      period: t("MAY 2024 – AUG 2024", "مايو ٢٠٢٤ – أغسطس ٢٠٢٤"),
      company: "DPWH - OLONGAPO",
      location: t("PHILIPPINES", "الفلبين"),
      role: t("PHP Developer & IT Support", "مطور PHP ودعم فني"),
      status: t("COMPLETED", "مكتمل"),
      stack: "PHP / MySQL / HTML / CSS / JavaScript",
      tasks: [
        t("Asset Management System", "نظام إدارة الأصول المادية"),
        t("Backend & Auth Logic", "البرمجة الخلفية ومنطق المصادقة"),
        t("Data Migration & Integrity", "ترحيل البيانات وسلامتها"),
        t("IT Support & Infrastructure", "الدعم الفني والبنية التحتية"),
        t("Printer & Network Config", "إعداد الطابعات والشبكات"),
      ],
      color: "text-zinc-400",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl relative">
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full" />
            <span
              className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Professional History", "التاريخ المهني")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
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
        </div>

        {/* --- TIMELINE GRID --- */}
        <div
          className={`relative border-black ${isAr ? "border-r-4 mr-1 md:mr-0" : "border-l-4 ml-1 md:ml-0"}`}
        >
          {history.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-16 md:mb-24 last:mb-0 group ${isAr ? "pr-8 md:pr-24" : "pl-8 md:pl-24"}`}
            >
              {/* Timeline Marker (Circle for Neobrutalist contrast) */}
              <div
                className={`absolute top-2 h-5 w-5 md:h-7 md:w-7 border-4 border-black bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isAr ? "-right-[14px] md:-right-[18px]" : "-left-[14px] md:-left-[18px]"}`}
              >
                <div
                  className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${index === 0 ? "bg-[#00C950]" : "bg-zinc-200"}`}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Time & Status Column */}
                <div className="lg:col-span-4 flex flex-col items-start">
                  <div
                    className={`px-4 py-2 bg-black text-white mb-4 rounded-xl ${isAr ? "shadow-[-4px_4px_0px_0px_#00C950]" : "shadow-[4px_4px_0px_0px_#00C950]"}`}
                  >
                    <span className="text-[10px] md:text-xs font-black tracking-widest whitespace-nowrap uppercase">
                      {job.period}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 mb-4 ${job.color}`}>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {job.status}
                    </span>
                    {index === 0 && (
                      <span className="h-2 w-2 bg-[#00C950] rounded-full animate-ping" />
                    )}
                  </div>
                  {job.stack && (
                    <div className="p-4 border-[3px] border-black/10 bg-zinc-50 rounded-2xl w-full">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase leading-relaxed block">
                        <span className="text-black font-black">
                          {isAr ? "التقنيات" : "Stack"}:
                        </span>{" "}
                        {job.stack}
                      </span>
                    </div>
                  )}
                </div>

                {/* Company & Role Column */}
                <div className="lg:col-span-8">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs md:text-sm font-black text-black uppercase tracking-widest">
                        {job.company}
                      </span>
                      <span className="text-zinc-300 font-bold">/</span>
                      <span className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">
                        {job.location}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[1.1] mb-8 group-hover:text-[#00C950] transition-colors duration-300 ${isAr ? "md:leading-[1.3]" : ""}`}
                    >
                      {job.role}
                    </h3>

                    {/* Responsibilities */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {job.tasks.map((task) => (
                        <span
                          key={task}
                          className={`text-[9px] md:text-xs font-black uppercase border-[3px] border-black px-4 py-2 rounded-xl transition-all cursor-default bg-white hover:bg-black hover:text-[#00C950] ${isAr ? "shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none" : "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"}`}
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
      <div
        className={`mx-auto max-w-6xl mt-24 pt-10 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-6`}
      >
        <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black">
          {isAr ? "دبي // ٢٠٢٦" : "Dubai // 2026"}
        </span>
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-4 w-4 rounded-md border-[3px] border-black ${i < 3 ? "bg-[#00C950]" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
