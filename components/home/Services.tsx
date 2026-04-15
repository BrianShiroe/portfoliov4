"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Settings, Globe, Code2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Services() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const services = [
    {
      id: "SV_01",
      title: t("E-Commerce", "تجارة إلكترونية"),
      description: t(
        "High-conversion digital storefronts built for scale. From Shopify to headless commerce.",
        "واجهات متاجر رقمية عالية التحويل مصممة للتوسع. من شوبيفاي إلى التجارة بدون رأس.",
      ),
      features: [t("Sell More", "بيع أكثر"), t("Grow Sales", "زيادة المبيعات")],
      icon: ShoppingCart,
      // Changed from "Build Store ↗" to "Architecture Overview"
      action: t("Architecture Overview", "نظرة عامة على البنية"),
    },
    {
      id: "SV_02",
      title: t("ERP & Odoo", "أنظمة ERP وأودو"),
      description: t(
        "Deep integration of Odoo Enterprise to streamline inventory and business automation.",
        "تكامل عميق لنظام Odoo المؤسسي لتبسيط المخزون وأتمتة الأعمال.",
      ),
      features: [t("Automate", "أتمتة"), t("Save Time", "توفير الوقت")],
      icon: Settings,
      // Changed from "Integrate Now ↗" to "Integration Logic"
      action: t("Integration Logic", "منطق التكامل"),
    },
    {
      id: "SV_03",
      title: t("Corporate", "مواقع الشركات"),
      description: t(
        "Professional web systems for firms. Focused on authority and lead generation.",
        "أنظمة ويب احترافية للشركات. تركز على السلطة وجذب العملاء المحتملين.",
      ),
      features: [
        t("Reach Clients", "الوصول للعملاء"),
        t("Build Trust", "بناء الثقة"),
      ],
      icon: Globe,
      // Changed from "Grow Your Brand ↗" to "Lead Strategy"
      action: t("Lead Strategy", "استراتيجية الربط"),
    },
    {
      id: "SV_04",
      title: t("Web Apps", "تطبيقات الويب"),
      description: t(
        "Specialized applications designed for unique logic and superior performance.",
        "تطبيقات متخصصة مصممة لمنطق فريد وأداء متفوق.",
      ),
      features: [t("Boost Speed", "زيادة السرعة"), t("Scale Easy", "توسع سهل")],
      icon: Code2,
      // Changed from "Develop App ↗" to "Tech Stack Info"
      action: t("Tech Stack Info", "معلومات التقنيات"),
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-zinc-50 py-16 md:py-24 overflow-hidden font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div className="relative">
            <div
              className={`absolute -top-2 h-6 w-6 border-t-2 border-[#00C950] ${isAr ? "-right-2 border-r-2" : "-left-2 border-l-2"}`}
            />
            <span
              className={`text-[10px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 block ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Technical_Capabilities", "القدرات_التقنية")}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              {isAr ? (
                <>
                  قدرات_<span className="text-[#00C950]">تقنية</span>
                </>
              ) : (
                <>
                  Technical_<span className="text-[#00C950]">Capabilities</span>
                </>
              )}
            </h2>
          </div>
          <div
            className={`hidden md:block ${isAr ? "text-left" : "text-right"}`}
          >
            <p className="text-[12px] font-bold text-black uppercase tracking-widest leading-tight">
              {t("Professional Logic //", "المنطق المهني //")} <br />
              {t("System Execution", "تنفيذ النظام")}
            </p>
          </div>
        </div>

        {/* --- SERVICE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative w-full"
              >
                {/* Neobrutalist Shadow */}
                <div
                  className={`absolute inset-0 bg-black rounded-2xl transition-transform group-hover:translate-y-3 
                  ${
                    isAr
                      ? "-translate-x-1.5 translate-y-1.5 md:-translate-x-2 md:translate-y-2 group-hover:-translate-x-2.5"
                      : "translate-x-1.5 translate-y-1.5 md:translate-x-2 md:translate-y-2 group-hover:translate-x-3"
                  }`}
                />

                <div className="relative h-full border-[3px] border-black bg-white p-6 md:p-8 rounded-2xl transition-all group-hover:-translate-y-1 group-hover:border-[#00C950] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-black text-[#00C950] bg-black px-2.5 py-1 rounded-lg uppercase tracking-widest">
                        {service.id}
                      </span>
                      <div className="h-12 w-12 border-[2px] border-black rounded-xl flex items-center justify-center transition-all group-hover:bg-[#00C950] group-hover:border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 transition-colors group-hover:text-black" />
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl xl:text-2xl font-black uppercase tracking-tighter mb-3 transition-colors group-hover:text-[#00C950] leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-zinc-500 text-[11px] md:text-xs xl:text-sm mb-6 leading-relaxed font-medium group-hover:text-zinc-800">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[8px] md:text-[9px] font-black uppercase tracking-wider border-2 border-black/5 px-2.5 py-1 rounded-lg bg-zinc-50 transition-all group-hover:border-[#00C950]/30 group-hover:bg-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t-2 border-zinc-100 flex justify-between items-center group-hover:border-[#00C950]/20">
                      <span
                        className="text-[10px] md:text-[11px] font-black border-b-2 border-black transition-colors group-hover:text-[#00C950] group-hover:border-[#00C950] cursor-default uppercase"
                      >
                        {service.action}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-12 md:mt-16 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-5 w-1 md:h-6 md:w-1.5 rounded-full ${i % 2 === 0 ? "bg-[#00C950]" : "bg-black"}`}
                />
              ))}
            </div>
            <p className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black">
              {t("Fullstack // Dubai // 2026", "فول ستاك // دبي // ٢٠٢٦")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00C950] animate-pulse" />
            <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              {t("System_Status: Operational", "حالة_النظام: قيد التشغيل")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}