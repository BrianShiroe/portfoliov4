"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const techStack = (t: any) => [
  {
    slug: "odoo",
    name: t("Odoo ERP", "أودو ERP"),
    type: t("Enterprise System", "نظام مؤسسي"),
    level: t("Advanced", "متقدم"),
    focus: t("Business Management", "إدارة الأعمال"),
  },
  {
    slug: "nextdotjs",
    name: t("Next.js", "نكست جي إس"),
    type: t("Framework", "إطار عمل"),
    level: t("Expert", "خبير"),
    focus: t("Modern Web Architecture", "بنية الويب الحديثة"),
  },
  {
    slug: "react",
    name: t("React", "رياكت"),
    type: t("Library", "مكتبة برمجة"),
    level: t("Expert", "خبير"),
    focus: t("Interactive Interfaces", "واجهات تفاعلية"),
  },
  {
    slug: "wordpress",
    name: t("WordPress", "وردبريس"),
    type: t("CMS", "نظام إدارة محتوى"),
    level: t("Expert", "خبير"),
    focus: t("Content & Site Structure", "هيكلية المواقع والمحتوى"),
  },
  {
    slug: "shopify",
    name: t("Shopify", "شوبيفاي"),
    type: t("eCommerce", "تجارة إلكترونية"),
    level: t("Advanced", "متقدم"),
    focus: t("Online Store Growth", "نمو المتاجر الإلكترونية"),
  },
  {
    slug: "googleads",
    name: t("Google Ads", "إعلانات جوجل"),
    type: t("Marketing", "تسويق"),
    level: t("Experienced", "متمرس"),
    focus: t("Digital Reach", "الوصول الرقمي"),
  },
  {
    slug: "hostinger",
    name: t("Hosting", "الاستضافة"),
    type: t("Management", "إدارة"),
    level: t("Expert", "خبير"),
    focus: t("Domain & Site Support", "دعم النطاق والمواقع"),
  },
  {
    slug: "javascript",
    name: t("JavaScript", "جافا سكريبت"),
    type: t("Core Web", "أساسيات الويب"),
    level: t("Expert", "خبير"),
    focus: t("Interactivity", "التفاعل"),
  },
  {
    slug: "html5",
    name: t("HTML5", "إتش تي إم إل ٥"),
    type: t("Structure", "الهيكلة"),
    level: t("Expert", "خبير"),
    focus: t("Modern Layouts", "تخطيطات حديثة"),
  },
  {
    slug: "css3",
    name: t("CSS3", "سي إس إس ٣"),
    type: t("Styling", "التصميم"),
    level: t("Expert", "خبير"),
    focus: t("Visual Presentation", "العرض البصري"),
  },
];

const ExternalIcon = ({ slug }: { slug: string }) => (
  <div
    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-black group-hover:bg-zinc-700 transition-colors duration-200"
    style={{
      WebkitMaskImage: `url(https://cdn.simpleicons.org/${slug}/000)`,
      maskImage: `url(https://cdn.simpleicons.org/${slug}/000)`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
    }}
  />
);

export function Skills() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const stack = techStack(t);

  return (
    <section
      id="skills"
      className="relative w-full border-t-4 border-black bg-zinc-50 py-16 md:py-24 overflow-hidden selection:bg-black selection:text-white font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="relative">
            <div className={`absolute -top-2 md:-top-4 h-8 w-8 md:h-12 md:w-12 border-t-4 border-[#00C950] ${isAr ? "-right-2 md:-right-4 border-r-4" : "-left-2 md:-left-4 border-l-4"}`} />
            <p className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 md:mb-4 ${isAr ? "mr-2" : "ml-2"}`}>
              {t("Area of Expertise", "مجالات الخبرة")}
            </p>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              {isAr ? (
                <>مهارات_<span className="text-[#00C950]">أساسية</span></>
              ) : (
                <>Core_<span className="text-[#00C950]">Skills</span></>
              )}
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-xs md:text-base font-bold border-4 border-black bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-xl uppercase tracking-widest shadow-[4px_4px_0px_0px_#00C950] md:shadow-[6px_6px_0px_0px_#00C950] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              {t("Verified Skillset", "مجموعة مهارات معتمدة")}
            </p>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[240px] sm:h-[300px] md:h-[380px] [perspective:1000px]"
            >
              <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isAr ? "group-hover:[transform:rotateY(-180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}>
                
                {/* CARD FRONT */}
                <div className="absolute inset-0 h-full w-full border-[3px] md:border-4 border-black bg-white p-4 md:p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="flex justify-between items-start border-b-2 border-black/10 pb-2">
                    <span className="text-[9px] md:text-[12px] font-black text-[#00C950] uppercase tracking-widest">
                      {tech.level}
                    </span>
                    <span className="text-[9px] md:text-[12px] font-black text-black opacity-30">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex-grow flex items-center justify-center">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <ExternalIcon slug={tech.slug} />
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h3 className="text-sm md:text-2xl font-black uppercase tracking-tighter text-black leading-none">
                        {tech.name}
                      </h3>
                      <p className="text-[8px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                        {tech.type}
                      </p>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden border border-black/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className={`absolute inset-0 h-full w-full border-[3px] md:border-4 border-black bg-black p-4 md:p-8 text-white rounded-2xl [backface-visibility:hidden] ${isAr ? "[transform:rotateY(-180deg)]" : "[transform:rotateY(180deg)]"}`}>
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
                        <p className="text-[8px] md:text-[11px] text-[#00C950] uppercase font-bold tracking-widest">
                          {t("Focus Area", "منطقة التركيز")}
                        </p>
                      </div>
                      <p className={`text-[11px] md:text-lg uppercase leading-tight font-black tracking-tight italic ${isAr ? "text-right" : "text-left"}`}>
                        {tech.focus}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
                      <span className="text-[7px] md:text-[10px] text-zinc-500 font-bold uppercase">
                        {t("Status", "الحالة")}
                      </span>
                      <div className="w-fit px-2 py-1 bg-[#00C950] text-black font-black rounded-lg uppercase tracking-tighter text-[8px] md:text-[10px]">
                        {t("Active_Deployment", "نشر_نشط")}
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