"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

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
    slug: "shopify",
    name: t("Shopify", "شوبيفاي"),
    type: t("eCommerce", "تجارة إلكترونية"),
    level: t("Expert", "خبير"),
    focus: t("Liquid & Payment Flow", "تدفق الدفع وLiquid"),
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
    slug: "google",
    name: t("Google Tools", "أدوات جوجل"),
    type: t("Ads, Console, & Merchant", "إعلانات، كونسول، وتاجر"),
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

const ExternalIcon = ({ slug }: { slug: string }) => (
  <div
    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 bg-black group-hover:bg-zinc-700 transition-colors duration-200"
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
      className="relative w-full py-16 md:py-24 overflow-hidden selection:bg-black selection:text-white font-mono"
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

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[280px] md:h-[340px] [perspective:1000px]"
            >
              <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isAr ? "group-hover:[transform:rotateY(-180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}>
                
                {/* CARD FRONT */}
                <div className="absolute inset-0 h-full w-full border-[3px] md:border-4 border-black bg-white p-5 md:p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="flex justify-between items-start border-b-2 border-black/10 pb-3">
                    <span className="text-[10px] font-black text-[#00C950] uppercase tracking-widest">
                      {tech.level}
                    </span>
                    <span className="text-[10px] font-black text-black opacity-30">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-grow flex items-center justify-center py-4">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <ExternalIcon slug={tech.slug} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black leading-tight">
                        {tech.name}
                      </h3>
                      <p className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1 min-h-[1rem]">
                        {tech.type}
                      </p>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden border border-black/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className={`absolute inset-0 h-full w-full border-[3px] md:border-4 border-black bg-black p-6 md:p-8 text-white rounded-2xl [backface-visibility:hidden] ${isAr ? "[transform:rotateY(-180deg)]" : "[transform:rotateY(180deg)]"}`}>
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
                        <p className="text-[10px] text-[#00C950] uppercase font-bold tracking-widest">
                          {t("Focus Area", "منطقة التركيز")}
                        </p>
                      </div>
                      <p className={`text-base md:text-xl uppercase leading-tight font-black tracking-tight italic ${isAr ? "text-right" : "text-left"}`}>
                        {tech.focus}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                      <span className="text-[9px] text-zinc-500 font-bold uppercase">
                        {t("Status", "الحالة")}
                      </span>
                      <div className="w-fit px-3 py-1.5 bg-[#00C950] text-black font-black rounded-lg uppercase tracking-tighter text-[10px]">
                        {t("Verified_Skillset", "مهارة_معتمدة")}
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