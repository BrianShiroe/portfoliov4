// components\Hero.tsx
"use client";
import { motion, Transition } from "framer-motion";
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

  // Fixed the Type Assignment Error
  const btnTransition: Transition = { 
    type: "tween", 
    ease: "easeOut", 
    duration: 0.15 
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#00C950] selection:text-white font-mono flex flex-col justify-center py-20 md:py-0"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-10 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16">
          
          {/* --- LEFT SIDE: ACTIVE FOCUS (Desktop Only) --- */}
          <div className="hidden xl:flex flex-col gap-10 w-64">
            <div className="space-y-4">
              <span className="text-[13px] font-black border-b-2 border-black w-full block pb-2 tracking-[0.15em] uppercase text-black">
                Active Focus
              </span>
              <div className="space-y-2.5 text-[13px] text-zinc-800 uppercase font-bold leading-tight">
                {["Frontend Dev", "Full-Stack Dev", "ERP Integration", "Shopify Ecommerce"].map((item) => (
                  <p key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-black" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* --- CENTER: MAIN HEADING & CONTACTS --- */}
          <div className="relative flex flex-col items-center w-full lg:flex-1">
            <div className="relative w-full max-w-fit mx-auto text-center">
              {/* Responsive Corners */}
              <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 w-3 h-3 md:w-5 md:h-5 border-t-2 md:border-t-[3px] border-l-2 md:border-l-[3px] border-black" />
              
              <div className="mb-3 inline-block bg-black px-2 py-1 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Web Developer // Dubai
              </div>

              {/* Fluid Typography Fix */}
              <h1 className="text-center text-[15vw] sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] mb-4">
                Brian <br />
                <span className="text-[#00C950]">Shiroe</span>
              </h1>

              <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
                <div className="h-[1px] w-4 md:w-8 bg-black/20" />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black italic">
                  Brian Ong Haw
                </span>
                <div className="h-[1px] w-4 md:w-8 bg-black/20" />
              </div>
            </div>

            {/* RESPONSIVE CONTACT & SOCIAL FORMAT */}
            <div className="flex flex-col items-center gap-6 mb-10 w-full">
              {/* Direct Text Contacts */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border-y border-black/5 py-5 w-full max-w-[320px] sm:max-w-none justify-center">
                <a href="mailto:Brianshiroe@gmail.com" className="flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group">
                  <img src="https://img.icons8.com/windows/32/000000/address.png" alt="mail" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  Brianshiroe@gmail.com
                </a>
                <a href="tel:+971503592133" className="flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group">
                  <img src="https://img.icons8.com/windows/32/000000/phone.png" alt="phone" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  +971 50 359 2133
                </a>
              </div>

              {/* Brand Icons */}
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
                  href="https://www.linkedin.com/in/brian-haw"
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={btnTransition}
                  className="group"
                >
                  <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" className="w-8 h-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[260px] sm:max-w-md">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#00C950", borderColor: "#00C950" }}
                whileTap={{ scale: 0.98 }}
                transition={btnTransition}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-black text-white py-4 px-6 text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, color: "#00C950", borderColor: "#00C950" }}
                whileTap={{ scale: 0.98 }}
                transition={btnTransition}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full border-2 border-black bg-white py-4 px-6 text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              >
                Contact
              </motion.button>
            </div>
          </div>

          {/* --- RIGHT SIDE: CHARACTER BOX --- */}
          <div className="flex flex-col items-center relative mt-4 lg:mt-0">
            <div className="relative z-10">
              <motion.div className="bg-white border-2 md:border-4 border-black p-3 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center overflow-hidden">
                <div className="scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
                  <Character />
                </div>
                <div className="w-full border-t-2 border-black/10 pt-4 mt-2 text-center">
                  <span className="text-xl md:text-2xl font-black text-black tabular-nums">{time}</span>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="h-1.5 w-1.5 bg-[#00C950] rounded-full animate-pulse" />
                    <span className="text-[9px] font-black uppercase text-zinc-400">Dubai Time</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TICKER --- */}
      <div className="absolute bottom-0 z-20 w-full border-t-2 border-black bg-white py-1 overflow-hidden flex items-center h-12">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-8 md:gap-12 text-[10px] md:text-[12px] font-black uppercase text-black whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span>Next.js</span> <span className="text-[#00C950]">//</span>
              <span>React.js</span> <span className="text-[#00C950]">//</span>
              <span>Shopify</span> <span className="text-[#00C950]">//</span>
              <span>Odoo ERP</span> <span className="text-[#00C950]">//</span>
              <span className="italic text-[#00C950]">UAE Based</span> <span className="text-[#00C950]">//</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}