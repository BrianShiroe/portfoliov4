"use client";
import { motion } from "framer-motion";
import { Character } from "./Character";
import { useEffect, useState } from "react";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dubai" }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const btnTransition = { type: "tween", ease: "easeOut", duration: 0.15 };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[750px] w-full overflow-hidden bg-white selection:bg-[#00C950] selection:text-white font-mono"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between px-4 md:px-10 pb-20 md:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 md:gap-12 lg:gap-16 flex-grow">
          
          {/* --- LEFT SIDE: ACTIVE FOCUS --- */}
          <div className="hidden xl:flex flex-col gap-10 w-64">
            <div className="space-y-4">
              <span className="text-[13px] font-black border-b-2 border-black w-full block pb-2 tracking-[0.15em] uppercase text-black">
                Active Focus
              </span>
              <div className="space-y-2.5 font-mono text-[13px] text-zinc-800 uppercase font-bold leading-tight">
                {["Frontend Dev", "Full-Stack Dev", "ERP Integration", "Shopify Ecommerce"].map((item) => (
                  <p key={item} className="flex items-center gap-2 transition-transform hover:translate-x-1 group">
                    <span className="h-1 w-1 bg-black group-hover:bg-[#00C950]" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* --- CENTER: MAIN HEADING --- */}
          <div className="relative flex flex-col items-center w-full lg:flex-1">
            <div className="relative w-full max-w-fit mx-auto text-center">
              <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-3 h-3 md:w-5 md:h-5 border-t-2 md:border-t-[3px] border-l-2 md:border-l-[3px] border-black" />
              <div className="mb-2 md:mb-4 inline-block bg-black px-2 py-1 text-[8px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Web Developer // Dubai
              </div>

              <h1 className="text-center text-[14vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] mb-3">
                Brian <br />
                <span className="text-[#00C950] relative inline-block">Shiroe</span>
              </h1>

              <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
                <div className="h-[1px] md:h-[2px] w-4 md:w-8 bg-black/20" />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black italic whitespace-nowrap">
                  Brian Ong Haw
                </span>
                <div className="h-[1px] md:h-[2px] w-4 md:w-8 bg-black/20" />
              </div>
            </div>

            {/* UPDATED CONTACT & SOCIAL FORMAT */}
            <div className="flex flex-col items-center gap-6 mb-10">
              {/* Direct Text Contacts */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border-y border-black/5 py-4 w-full justify-center">
                <a href="mailto:Brianshiroe@gmail.com" className="flex items-center gap-2 text-[11px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group">
                  <img src="https://img.icons8.com/windows/32/000000/address.png" alt="mail" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  Brianshiroe@gmail.com
                </a>
                <a href="tel:+971503592133" className="flex items-center gap-2 text-[11px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group">
                  <img src="https://img.icons8.com/windows/32/000000/phone.png" alt="phone" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  +971 50 359 2133
                </a>
              </div>

              {/* Brand Icons Only */}
              <div className="flex gap-8">
                <motion.a
                  href="https://github.com/BrianShiroe"
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={btnTransition}
                  className="group"
                >
                  <img src="https://img.icons8.com/fluency/48/github.png" alt="github" className="w-7 h-7 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/brian-haw"
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={btnTransition}
                  className="group"
                >
                  <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" className="w-7 h-7 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[240px] sm:max-w-md">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#00C950", borderColor: "#00C950" }}
                whileTap={{ scale: 0.98 }}
                transition={btnTransition}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-black text-white py-3 md:py-4 px-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, color: "#00C950", borderColor: "#00C950" }}
                whileTap={{ scale: 0.98 }}
                transition={btnTransition}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full border-2 border-black bg-white py-3 md:py-4 px-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              >
                Contact
              </motion.button>
            </div>
          </div>

          {/* --- RIGHT SIDE: CHARACTER BOX --- */}
          <div className="flex flex-col items-center relative mt-6 lg:mt-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-[#00C950]/20 rounded-full scale-[1.1] md:scale-[1.2] lg:scale-[1.5] pointer-events-none"
            />
            <div className="relative z-10">
              <motion.div className="bg-white border-2 md:border-4 border-black p-3 md:p-5 lg:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center overflow-hidden">
                <div className="scale-[0.55] sm:scale-75 md:scale-80 lg:scale-90">
                  <Character />
                </div>
                <div className="hidden sm:flex w-full border-t-2 border-black/10 pt-4 mt-2 flex-col items-center">
                  <span className="text-xl md:text-2xl font-black text-black tracking-tighter">{time}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="h-1.5 w-1.5 bg-[#00C950] rounded-full animate-pulse shadow-[0_0_8px_#00C950]" />
                    <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">Local Time</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER: SKILLS TICKER --- */}
      <div className="absolute bottom-0 z-20 w-full border-t-2 border-black bg-white py-1 overflow-hidden flex items-center h-10 md:h-14">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-6 md:gap-12 text-[9px] md:text-[12px] font-black uppercase tracking-wide text-black whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 md:gap-4">
              <span>Next.js</span> <span className="text-[#00C950] font-bold">//</span>
              <span>React.js</span> <span className="text-[#00C950] font-bold">//</span>
              <span>TypeScript</span> <span className="text-[#00C950] font-bold">//</span>
              <span>Shopify</span> <span className="text-[#00C950] font-bold">//</span>
              <span>Odoo ERP</span> <span className="text-[#00C950] font-bold">//</span>
              <span className="italic text-[#00C950]">Dubai, UAE</span> <span className="text-[#00C950] font-bold">//</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}