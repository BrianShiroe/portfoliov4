"use client";
import { motion, Variants } from "framer-motion";
import { ShoppingCart, Settings, Globe, Code2 } from "lucide-react";
import { useLocale } from "next-intl";

export function Services() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

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
      action: t("Logic_Architecture", "هيكلة_المنطق"),
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      className="w-full bg-zinc-50 py-16 md:py-24 overflow-hidden font-mono selection:bg-black selection:text-[#00C950]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div className="relative">
            {/* TOP INDICATOR: SYNCED WITH GLOBAL BRANDING */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
              <span
                className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
              >
                {t("Technical_Capabilities", "القدرات_التقنية")}
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
                  حزمة_<span className="text-[#00C950]">معتمدة</span>
                </>
              ) : (
                <>
                  Proven_<span className="text-[#00C950]">Stack</span>
                </>
              )}
            </h2>
          </div>

          {/* SYSTEM TAG: ALIGNED WITH NARRATIVE STYLE */}
          <div
            className={`hidden md:block ${isAr ? "text-left" : "text-right"}`}
          >
            <p className="text-[11px] font-black text-black uppercase tracking-widest leading-tight opacity-70">
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
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative w-full h-full"
              >
                {/* Neobrutalist Shadow - Directional for RTL/LTR */}
                <div
                  className={`absolute inset-0 bg-black rounded-3xl transition-all duration-300 group-hover:translate-y-4 ${
                    isAr
                      ? "-translate-x-2 translate-y-2 group-hover:-translate-x-3"
                      : "translate-x-2 translate-y-2 group-hover:translate-x-3"
                  }`}
                />

                <div className="relative h-full border-[3px] border-black bg-white p-6 md:p-8 rounded-3xl transition-all group-hover:-translate-y-1 group-hover:border-[#00C950] flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[9px] font-black text-[#00C950] bg-black px-2.5 py-1.5 rounded-lg uppercase tracking-widest">
                      {service.id}
                    </span>
                    <div className="h-14 w-14 border-[3px] border-black rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#00C950] group-hover:rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                      <Icon className="h-6 w-6 transition-colors group-hover:text-black" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl xl:text-2xl font-black uppercase tracking-tighter mb-4 transition-colors group-hover:text-[#00C950] leading-none">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-[11px] md:text-xs xl:text-[13px] mb-8 leading-relaxed font-bold group-hover:text-zinc-800">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[8px] md:text-[9px] font-black uppercase tracking-widest border-2 border-black/5 px-3 py-1 rounded-lg bg-zinc-50 group-hover:border-[#00C950]/30 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="pt-5 border-t-2 border-zinc-100 flex justify-between items-center group-hover:border-[#00C950]/20">
                      <span className="text-[10px] md:text-[11px] font-black border-b-2 border-black transition-all group-hover:text-[#00C950] group-hover:border-[#00C950] cursor-default uppercase tracking-tighter">
                        {service.action}
                      </span>
                      <div className="h-2 w-2 bg-zinc-200 rounded-full group-hover:bg-[#00C950] transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-20 pt-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="flex gap-1.5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-6 w-1.5 rounded-full transition-colors ${i % 2 === 0 ? "bg-[#00C950]" : "bg-black opacity-20"}`}
                />
              ))}
            </div>
            <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-black">
              {t("Fullstack // Dubai // 2026", "فول ستاك // دبي // ٢٠٢٦")}
            </p>
          </div>
          <div className="flex items-center gap-3 px-6 py-2 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_#000]">
            <span className="h-2 w-2 rounded-full bg-[#00C950] animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-widest text-black">
              {t("Status: Stable_Build", "الحالة: بناء_مستقر")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
