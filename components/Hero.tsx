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

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-black selection:text-white font-mono scroll-mt-20"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 md:px-6 pt-12 pb-12">
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8 md:gap-16">
          {/* --- LEFT SIDE: ACTIVE FOCUS --- */}
          <div className="hidden xl:flex flex-col gap-8 w-64">
            <div className="space-y-4">
              <span className="text-[13px] font-black border-b-2 border-black w-full block pb-2 tracking-[0.15em] uppercase text-black">
                Active Focus
              </span>
              <div className="space-y-2.5 font-mono text-[13px] text-zinc-800 uppercase font-bold leading-tight">
                <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="h-1 w-1 bg-black" /> ERP Integration
                </p>
                <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="h-1 w-1 bg-black" /> Frontend Dev
                </p>
                <p className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="h-1 w-1 bg-black" /> Full-Stack Dev
                </p>
              </div>
            </div>
          </div>

          {/* --- CENTER: MAIN HEADING --- */}
          <div className="relative flex flex-col items-center w-full">
            <div className="relative">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-4 h-4 md:w-5 md:h-5 border-t-2 md:border-t-[3px] border-l-2 md:border-l-[3px] border-black" />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-4 h-4 md:w-5 md:h-5 border-b-2 md:border-b-[3px] border-r-2 md:border-r-[3px] border-black" />

              <div className="mb-3 md:mb-4 inline-block bg-black px-3 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Web Developer // Based in Dubai
              </div>

              <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-4 md:mb-6">
                Brian <br />
                <span className="text-zinc-200 relative inline-block">
                  Haw
                  <span className="absolute -right-28 top-1/2 hidden 2xl:block text-[10px] text-zinc-400 font-mono text-left opacity-60 uppercase font-bold leading-tight">
                    Specialization: <br /> Web & ERP Systems
                  </span>
                </span>
              </h1>
            </div>

            <div className="h-[2px] w-full max-w-sm bg-black/10 my-6" />

            <p className="max-w-sm md:max-w-md text-center text-[12px] md:text-[13px] font-bold text-zinc-600 uppercase tracking-tight leading-relaxed italic">
              "Web Developer with 7+ months experience in WordPress and Odoo
              development, passionate about building with React & Next.js."
            </p>

            {/* Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-5 w-full max-w-sm md:max-w-md">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex-1 bg-black text-white p-4 text-[12px] font-black uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex-1 border-2 border-black bg-white p-4 text-[12px] font-black uppercase tracking-[0.2em] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>

          {/* --- RIGHT SIDE: PROFILE CHARACTER & LOCAL TIME --- */}
          <div className="flex flex-col items-center relative mt-8 lg:mt-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-black/10 rounded-full scale-[1.3] md:scale-[1.5] pointer-events-none"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{
                  rotate: [0, -0.5, 0.5, 0],
                  transition: { repeat: Infinity, duration: 0.5 },
                }}
                className="bg-white border-2 md:border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
              >
                <div className="scale-75 md:scale-90">
                  <Character />
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED TIME DISPLAY */}
            <div className="mt-6 md:mt-10 text-center flex flex-col items-center">
              <span className="text-xl md:text-2xl font-black text-black tracking-tighter">
                {time}
              </span>
              <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase flex items-center gap-2 mt-1">
                <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
                Local Time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER: SKILLS TICKER --- */}
      <div className="absolute bottom-0 z-20 w-full border-t-2 border-black bg-white py-2 overflow-hidden flex items-center h-12 md:h-14">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 md:gap-16 text-[11px] md:text-[12px] font-black uppercase tracking-widest text-black whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 md:gap-8">
              <span className="text-zinc-900">Next.js Framework</span>
              <span className="text-zinc-300">//</span>
              <span>TypeScript Development</span>
              <span className="text-zinc-300">//</span>
              <span>Tailwind Design</span>
              <span className="text-zinc-300">//</span>
              <span>ERP & Odoo Solutions</span>
              <span className="text-zinc-300">//</span>
              <span className="text-black italic">Available In UAE</span>
              <span className="text-zinc-300">//</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
