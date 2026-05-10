"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const projects = [
    {
      id: "01",
      title: "GameTree",
      tag: t("E-COMMERCE PLATFORM", "منصة تجارة إلكترونية"),
      tech: "Next.js / Supabase / Stripe",
      href: "https://gametree.vercel.app/",
      github: "https://github.com/BrianShiroe/gametree-next.js-supabase-stripe-ecommerce-website",
      image: "/images/gametree/thumbnail.png",
      isUnderDevelopment: true,
      description: t(
        "A comprehensive e-commerce ecosystem featuring dedicated workflows for visitors, customers, and admins. Includes integrated Stripe payments, dynamic shipping calculations, and a full administrative suite for product management.",
        "نظام متكامل للتجارة الإلكترونية يوفر مسارات عمل مخصصة للزوار والعملاء والمديرين. يتضمن عمليات دفع عبر Stripe، حساب تلقائي لرسوم الشحن، ولوحة تحكم شاملة لإدارة وتعديل المنتجات.",
      ),
    },
    {
      id: "02",
      title: "AURAX",
      tag: t("LUXURY FOOTWEAR", "أحذية فاخرة"),
      tech: "React / Framer Motion / Tailwind",
      href: "https://aurax-luxury-footwear-landing-page.vercel.app/",
      github: "https://github.com/BrianShiroe/aurax-luxury-footwear-landing-page",
      image: "/images/aurax/thumbnail.png",
      isUnderDevelopment: true,
      description: t(
        "A high-end digital showroom for luxury footwear, featuring immersive scroll-based animations, architectural layouts, and a fluid user experience designed for premium retail storytelling.",
        "معرض رقمي متطور للأحذية الفاخرة، يتميز برسوم متحركة غامرة تعتمد على التمرير، وتنسيقات معمارية، وتجربة مستخدم سلسة مصممة لسرد قصص العلامات التجارية الراقية."
      ),
    },
    {
      id: "03",
      title: "Samurai",
      tag: t("AGENCY BRANDING", "هوية الوكالة"),
      tech: "Next.js / Framer Motion / Tailwind",
      href: "https://samurai-theme-web-design-agency-landing-page.brianshiroe.workers.dev/",
      github: "https://github.com/BrianShiroe/samurai-theme-web-design-agency-landing-page",
      image: "/images/samurai/thumbnail.png",
      description: t(
        "A high-performance landing page for a creative agency inspired by Samurai aesthetics, featuring advanced animations and a bold design language that reflects strength and precision.",
        "واجهة هبوط احترافية لوكالة إبداعية مستوحاة من جماليات الساموراي، تتميز برسوم متحركة متقدمة وتصميم جريء يعكس القوة والدقة.",
      ),
    },
    {
      id: "04",
      title: "Noor Label",
      tag: t("FASHION ARCHIVE", "أرشيف الأزياء"),
      tech: "Next.js / Shopify / Headless Commerce",
      href: "https://noor-label.vercel.app/",
      github: "https://github.com/BrianShiroe/noor-label-next.js-shopify-ecommerce-website",
      image: "/images/noor-label/thumbnail.png",
      isUnderDevelopment: true,
      description: t(
        "A premium fashion portfolio showcasing architectural silhouettes and modest luxury. Focuses on high-end visual storytelling, scroll-based animations, and a minimalist aesthetic rooted in Dubai's design culture.",
        "بورتفوليو متميز للأزياء يعرض تصاميم معمارية وفخامة محتشمة. يركز على السرد البصري الراقي، وتفاعلات التمرير، وجمالية بسيطة مستوحاة من ثقافة التصميم في دبي.",
      ),
    },
    {
      id: "05",
      title: "Zhel Jewelry",
      tag: t("DIGITAL CATALOG", "كتالوج رقمي"),
      tech: "Next.js / Tailwind / Framer",
      href: "https://zhel-gold-jewelry.vercel.app/",
      github: "https://github.com/BrianShiroe/zhel-gold-jewelry-landing-page",
      image: "/images/zhel-gold-jewelry/thumbnail.png",
      description: t(
        "A high-performance one-page catalog built with Next.js and Tailwind CSS, designed to showcase luxury gold products with smooth, immersive visual interactions.",
        "موقع من صفحة واحدة (One-page) عالي الأداء مبني بـ Next.js وTailwind، مصمم لعرض منتجات الذهب بجمالية بصرية وتفاعلات سلسة.",
      ),
    },
    {
      id: "06",
      title: "Blackscale",
      tag: t("MODERN REAL ESTATE", "عقارات عصرية"),
      tech: "Next.js / Tailwind / UI/UX",
      href: "https://greyscale-real-estate.vercel.app/",
      github: "https://github.com/BrianShiroe/greyscale-real-estate-landing-page",
      image: "/images/greyscale-real-estate/thumbnail.png",
      description: t(
        "A minimalist, dark-themed single-page landing for real estate, focusing on premium aesthetic and architectural layout without backend overhead.",
        "واجهة هبوط (Landing Page) من صفحة واحدة للعقارات، تعتمد تصميماً داكناً وبسيطاً يركز على الجمالية الفائقة والتنسيق المعماري دون الحاجة لتعقيدات خلفية.",
      ),
    },
    {
      id: "07",
      title: "LUKA AI",
      tag: t("AI SAFETY SYSTEM", "نظام أمان ذكي"),
      tech: "Python / YOLOv11 / OpenCV",
      href: "https://github.com/BrianShiroe/luka",
      github: "https://github.com/BrianShiroe/luka",
      image: null,
      description: t(
        "A cutting-edge disaster detection system leveraging YOLOv11 for ultra-fast real-time object recognition. The model was trained using OpenCV and CNN to detect environmental hazards and trigger automated emergency alerts.",
        "نظام متطور للكشف عن الكوارث يعتمد على YOLOv11 للتعرف اللحظي فائق السرعة على الأجسام. تم تدريب النموذج باستخدام OpenCV وCNN للكشف عن المخاطر البيئية وتفعيل تنبيهات الطوارئ المؤتمتة.",
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#FAFAFA] py-32 px-6 font-mono relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}>
              {t("Personal Projects", "المشاريع الشخصية")}
            </span>
          </div>
          <h2 className={`font-black uppercase tracking-tighter text-black ${isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"}`}>
            {isAr ? <>أبرز_<span className="text-[#00C950]">المشاريع</span></> : <>Top_<span className="text-[#00C950]">Projects</span></>}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-48 md:gap-64">
          {projects.map((work, index) => (
            <ProjectItem key={work.id} work={work} index={index} isAr={isAr} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}