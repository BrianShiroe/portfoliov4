"use client";
import { motion, Transition } from "framer-motion";
import { Character } from "./Character";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();
  const [time, setTime] = useState("");
  const isAr = lang === "ar";

  // Dubai Time Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", { 
          timeZone: "Asia/Dubai",
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const btnTransition: Transition = { 
    type: "tween", 
    ease: "easeOut", 
    duration: 0.15 
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#00C950] selection:text-white flex flex-col justify-center py-20 lg:py-0 ${isAr ? "font-arabic" : "font-mono"}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* 1. Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-10 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16">
          
          {/* 2. LEFT SIDE: ACTIVE FOCUS */}
          <div className="hidden xl:flex flex-col gap-10 w-64">
            <div className="space-y-4">
              <span className={`text-[13px] font-black border-b-2 border-black w-full block pb-2 tracking-[0.15em] uppercase text-black ${isAr ? "text-right" : "text-left"}`}>
                {t("Active Focus", "التركيز الحالي")}
              </span>
              <div className="space-y-2.5 text-[13px] text-zinc-800 uppercase font-bold leading-tight">
                {[
                  t("Frontend Dev", "تطوير الواجهة الأمامية"),
                  t("Full-Stack Dev", "تطوير الويب الشامل"),
                  t("ERP Integration", "تكامل أنظمة ERP"),
                  t("Shopify Ecommerce", "تجارة شوبيفاي الإلكترونية")
                ].map((item) => (
                  <p key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00C950]" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 3. CENTER: MAIN BRANDING & HEADING */}
          <div className="relative flex flex-col items-center w-full lg:flex-1">
            <div className="relative w-full max-fit mx-auto text-center">
              <div className={`absolute -top-2 md:-top-6 w-3 h-3 md:w-5 md:h-5 border-t-2 md:border-t-[3px] border-black ${isAr ? "-right-2 md:-right-6 border-r-2 md:border-r-[3px]" : "-left-2 md:-left-6 border-l-2 md:border-l-[3px]"}`} />
              
              <div className="mb-6 inline-block bg-black px-3 py-1.5 rounded-full text-[9px] md:text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-white">
                {t("Web Developer // Dubai", "مطور مواقع // دبي")}
              </div>

              <h1 className={`text-center font-black uppercase mb-4 
                ${isAr 
                  ? "text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]" 
                  : "text-[15vw] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] md:leading-[0.8] tracking-tighter"
                }`}
              >
                {isAr ? (
                  <>برايان <br /> <span className="text-[#00C950]">شيرو</span></>
                ) : (
                  <>Brian <br /> <span className="text-[#00C950]">Shiroe</span></>
                )}
              </h1>

              <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
                <div className="h-[1px] w-4 md:w-8 bg-black/20" />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black italic">
                  Brian Ong Haw
                </span>
                <div className="h-[1px] w-4 md:w-8 bg-black/20" />
              </div>
            </div>

            {/* CONTACT ROW */}
            <div className="flex flex-col items-center gap-6 mb-10 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border-y border-black/5 py-5 w-full max-w-[320px] sm:max-w-none justify-center">
                <a href="mailto:Brianshiroe@gmail.com" className="flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group">
                  <div className="p-1.5 rounded-lg bg-zinc-50 group-hover:bg-[#00C950]/10 transition-colors">
                    <img src="https://img.icons8.com/windows/32/000000/address.png" alt="mail" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                  <span dir="ltr">Brianshiroe@gmail.com</span>
                </a>
                <a href="tel:+971503592133" className="flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group">
                  <div className="p-1.5 rounded-lg bg-zinc-50 group-hover:bg-[#00C950]/10 transition-colors">
                    <img src="https://img.icons8.com/windows/32/000000/phone.png" alt="phone" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                  <span dir="ltr">+971 50 359 2133</span>
                </a>
              </div>

              {/* SOCIAL ICONS SECTION */}
              <div className="flex gap-10">
                <motion.a
                  href="https://github.com/BrianShiroe"
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={btnTransition}
                  className="group"
                >
                  <img src="https://img.icons8.com/fluency/48/github.png" alt="github" className="w-8 h-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/brianshiroe/"
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={btnTransition}
                  className="group"
                >
                  <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" className="w-8 h-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[260px] sm:max-w-md">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#00C950", borderColor: "#00C950" }}
                whileTap={{ scale: 0.98 }}
                transition={btnTransition}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-black text-white py-4 px-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                {t("View Projects", "مشاهدة المشاريع")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, color: "#00C950", borderColor: "#00C950" }}
                whileTap={{ scale: 0.98 }}
                transition={btnTransition}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full border-2 border-black bg-white py-4 px-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              >
                {t("Contact Me", "تواصل معي")}
              </motion.button>
            </div>
          </div>

          {/* 4. RIGHT SIDE: CHARACTER & TIME BOX */}
          <div className="flex flex-col items-center relative mt-4 lg:mt-0">
            <motion.div 
              className="bg-white border-2 md:border-4 border-black p-3 md:p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center overflow-hidden"
            >
              <div className="scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
                <Character />
              </div>
              
              <div className="w-full border-t-2 border-black/10 pt-4 mt-2 text-center">
                <span className="text-xl md:text-2xl font-black text-black tabular-nums tracking-wider font-mono">
                  {time}
                </span>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="h-1.5 w-1.5 bg-[#00C950] rounded-full animate-pulse" />
                  <span className="text-[9px] font-black uppercase text-zinc-400">
                    {t("Dubai Time", "توقيت دبي")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. ANIMATED TICKER (Bottom) */}
      <div className="absolute bottom-0 z-20 w-full border-t-2 border-black bg-white py-1 overflow-hidden flex items-center h-12">
        <motion.div
          animate={{ x: isAr ? [1200, 0] : [0, -1200] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-8 md:gap-12 text-[10px] md:text-[12px] font-black uppercase text-black whitespace-nowrap items-center font-mono"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span>Next.js</span> <span className="text-[#00C950]">//</span>
              <span>React.js</span> <span className="text-[#00C950]">//</span>
              <span>Shopify</span> <span className="text-[#00C950]">//</span>
              <span>Odoo ERP</span> <span className="text-[#00C950]">//</span>
              <span className={`italic text-[#00C950] ${isAr ? "font-arabic" : ""}`}>
                {t("UAE Based", "مقرنا في الإمارات")}
              </span> 
              <span className="text-[#00C950]">//</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}