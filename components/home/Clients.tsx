"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export function Clients() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const logos = [
    { src: "/logos/500x250_logo_1.png", href: "https://www.itdtech.ae/", status: "live" },
    { src: "/logos/500x250_logo_2.png", href: "https://kbh-realestate.odoo.com/", status: "live" },
    // { src: "/logos/500x250_logo_11.png", href: "https://rosegallery.ae/", status: "live" },
    { src: "/logos/500x250_logo_12.png", href: "https://zhel-gold-jewelry.vercel.app/", status: "live" },
    { src: "/logos/500x250_logo_8.png", href: "https://dgcgroup.ae/", status: "live" },
    { src: "/logos/500x250_logo_9.png", href: "https://wazeenlaw.sa/", status: "live" },
    { src: "/logos/500x250_logo_3.png", href: "https://www.alnoblaa.com/", status: "live" },
    { src: "/logos/500x250_logo_4.png", href: "#", status: "offline" },
    { src: "/logos/500x250_logo_5.png", href: "https://capimob.com/", status: "live" },
    { src: "/logos/500x250_logo_6.png", href: "https://friendsmedia.net/", status: "live" },
    { src: "/logos/500x250_logo_7.png", href: "https://idesignsart.com/", status: "live" },
    { src: "/logos/500x250_logo_10.png", href: "https://idesignstech.com/", status: "live" },
  ];

  return (
    <section
      id="clients"
      className="relative w-full bg-white py-24 px-4 md:px-6 font-mono overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="mx-auto max-w-7xl relative">
        {/* --- SECTION HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full" />
            <span className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] ${isAr ? "mr-2" : "ml-2"}`}>
              {t("Production_Output", "مخرجات_الإنتاج")}
            </span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            {isAr ? (
              <>قائمة_<span className="text-[#00C950]">العملاء</span></>
            ) : (
              <>Client_<span className="text-[#00C950]">Index</span></>
            )}
          </h2>
        </div>

        {/* --- 5-COLUMN LOGO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {logos.map((logo, i) => (
            <motion.a
              key={logo.src}
              href={logo.href}
              target={logo.status === "live" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: "circOut" }}
              
              // --- CLICK ANIMATION ---
              whileTap={logo.status === "live" ? { 
                scale: 0.92, 
                transition: { duration: 0.1 } 
              } : {}}
              
              className={`group relative ${logo.status === "offline" ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              {/* Emerald Shadow Layer */}
              <div className={`absolute inset-0 bg-[#00C950] rounded-2xl transition-transform duration-300 translate-x-0 translate-y-0 group-hover:translate-y-2 ${isAr ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`} />

              <div className={`relative flex items-center justify-center aspect-[500/250] border-[3px] border-black bg-white p-4 transition-all duration-300 rounded-2xl group-hover:-translate-y-1 overflow-hidden ${isAr ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`}>
                <div className={`absolute top-2 text-[9px] font-black text-zinc-400 uppercase group-hover:text-black transition-colors z-10 ${isAr ? "right-3" : "left-3"}`}>
                  {isAr ? `مرجع_0${i + 1}` : `REF_0${i + 1}`}
                </div>

                {/* Status Indicator */}
                <div className={`absolute top-2 flex items-center gap-1.5 z-10 ${isAr ? "left-3" : "right-3"}`}>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${logo.status === "live" ? "bg-[#00C950] animate-pulse" : "bg-zinc-300"}`}
                  />
                  <span className="text-[9px] font-black uppercase text-zinc-400 group-hover:text-black transition-colors">
                    {logo.status === "live" ? t("live", "مباشر") : t("offline", "غير متصل")}
                  </span>
                </div>

                <div
                  className={`relative w-full h-full opacity-60 grayscale transition-all duration-500 scale-100 ${logo.status === "live" ? "group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110" : ""}`}
                >
                  <Image
                    src={logo.src}
                    alt={`Project Logo ${i + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* CRT Effect */}
                {logo.status === "live" && (
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity bg-[linear-gradient(rgba(0,201,80,0)_50%,rgba(0,201,80,0.1)_50%)] bg-[length:100%_4px]" />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className={`mt-20 pt-10 border-t-2 border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 ${isAr ? "md:flex-row-reverse" : ""}`}>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-900 text-center">
            {t("Active Development Network // DXB", "شبكة التطوير النشطة // دبي")}
          </p>
          <div className={`flex gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`h-4 w-[2.5px] bg-black rounded-full ${i % 5 === 0 ? "h-6 bg-[#00C950]" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}