"use client";
import { motion } from "framer-motion";
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
      title: t("Leadership", "القيادة"),
      subtitle: t("Project Coordination", "تنسيق المشاريع"),
      icon: "▲",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* --- LEFT COLUMN: PROFESSIONAL DATA --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* Identity Card */}
            <div
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
                  <span className="text-zinc-400">{t("Education:", "التعليم:")}</span>
                  <span className="text-black">
                    {t("Computer Science", "علوم الحاسوب")}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Location:", "الموقع:")}</span>
                  <span className="text-black">{t("Dubai, UAE", "دبي، الإمارات")}</span>
                </li>
              </ul>
            </div>

            {/* ACCOLADES BLOCK */}
            <div
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
                {awards.map((award, index) => (
                  <motion.div
                    key={award.title}
                    initial={{ x: isAr ? 10 : -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
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
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE NARRATIVE --- */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-black uppercase tracking-widest mb-4">
                {t("Professional Bio", "السيرة المهنية")}
              </div>

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
                    ابتكار <br />{" "}
                    <span className="text-[#00C950]">مستقبل_رقمي</span>
                  </>
                ) : (
                  <>
                    Driving <br />{" "}
                    <span className="text-[#00C950]">Digital_Tech</span>
                  </>
                )}
              </h2>

              <p
                className={`font-bold text-zinc-700 uppercase ${
                  isAr ? "text-base md:text-lg leading-relaxed" : "text-lg md:text-xl leading-relaxed"
                }`}
              >
                {t(
                  "IT Professional and Web Developer focused on scaling businesses through high-impact online platforms and optimized digital management.",
                  "أخصائي تقنية معلومات ومطور ويب أركز على تطوير الأعمال من خلال منصات رقمية عالية التأثير وإدارة رقمية محسنة."
                )}
              </p>

              <div
                className={`space-y-6 text-zinc-500 italic ${
                  isAr
                    ? "border-r-4 border-l-0 pr-6 md:pr-8 text-sm md:text-base"
                    : "border-l-4 pr-0 pl-6 md:pl-8 text-base md:text-lg"
                } border-black font-medium`}
              >
                <p>
                  {t(
                    '"Dubai-based expert in high-performance e-commerce and custom web development. I extend business capabilities beyond the frontend by implementing Odoo ERP systems to automate and streamline core operations."',
                    '"خبير في التجارة الإلكترونية عالية الأداء وتطوير الويب المخصص ومقري في دبي. أعمل على توسيع قدرات الأعمال إلى ما هو أبعد من الواجهة الأمامية من خلال تنفيذ أنظمة Odoo ERP لأتمتة العمليات الأساسية."'
                  )}
                </p>
                <p>
                  {t(
                    '"I bridge the gap between creative design and technical execution, engineering intuitive user experiences that balance aesthetic appeal with robust, practical functionality."',
                    '"أعمل على سد الفجوة بين التصميم الإبداعي والتنفيذ التقني، من خلال هندسة تجارب مستخدم بديهية توازن بين الجمال الوظيفي والمتانة العملية."'
                  )}
                </p>
              </div>

              {/* FOOTNOTE */}
              <div
                className={`mt-12 bg-white border-2 border-black p-6 md:p-8 rounded-2xl font-mono text-sm leading-relaxed shadow-[6px_6px_0px_0px_#00C950] ${
                  isAr ? "shadow-[-6px_6px_0px_0px_#00C950]" : ""
                }`}
              >
                <div className="flex gap-2 mb-4">
                  <span className="h-2 w-2 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
                  <span className="text-[12px] font-black uppercase text-black">
                    {t("Work Ethic", "أخلاقيات العمل")}
                  </span>
                </div>
                <p className="text-zinc-800 font-bold uppercase text-[12px] md:text-[14px]">
                  {t(
                    "Dedicated to exceeding client expectations through transparent communication and meticulous detail. I deliver reliable, data-driven solutions designed for measurable success and long-term satisfaction.",
                    "ملتزم بتجاوز توقعات العملاء من خلال التواصل الشفاف والاهتمام الدقيق بالتفاصيل. أقدم حلولاً موثوقة قائمة على البيانات مصممة للنجاح الملموس والرضا على المدى الطويل."
                  )}
                </p>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className={`inline-block w-2 h-4 bg-[#00C950] translate-y-1 ${
                    isAr ? "mr-1" : "ml-1"
                  }`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}