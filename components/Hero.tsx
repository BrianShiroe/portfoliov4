"use client";
import { motion } from "framer-motion";
import { Character } from "./Character";
import { useEffect, useState } from "react";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dubai" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden bg-[#F1F1F1] selection:bg-[#FFD100] selection:text-black font-sans scroll-mt-20 border-[6px] border-black"
    >
      
      {/* --- TOP STRIP --- */}
      <div className="absolute top-0 flex w-full justify-between px-6 py-4 z-20 border-b-[4px] border-black bg-white">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tight text-black">BRIAN SHIROE</span>
            <span className="text-[10px] text-black/60 uppercase font-bold">Dubai, UAE</span>
          </div>
        </div>
        <div className="text-right flex flex-col items-end justify-center">
          <span className="text-sm font-black text-black bg-[#FFD100] px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {time}
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-12">
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          
          {/* --- MAIN CONTENT --- */}
          <div className="relative flex flex-col items-start w-full lg:w-3/5">
            <div className="mb-6 inline-block bg-[#00E676] border-2 border-black px-4 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Available for Projects
            </div>

            <h1 className="text-left text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-black">
              CRAFTING <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '3px black' }}>
                DIGITAL
              </span> <br />
              SYSTEMS.
            </h1>

            {/* Clean Grid-Based Tech Stack (Replaced HP Bars) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-xl mb-10">
              {["Odoo ERP", "Next.js", "Python", "Tailwind", "PostgreSQL", "TypeScript"].map((skill) => (
                <div key={skill} className="bg-white border-[3px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-xs font-black uppercase">{skill}</span>
                </div>
              ))}
            </div>

            <p className="max-w-lg text-left text-lg font-bold text-black leading-tight mb-10">
              I build high-performance ERP solutions and web applications that balance technical complexity with intuitive design.
            </p>

            {/* Action Buttons with Hard Shadows and Tactile Hovers */}
            <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
              <motion.button 
                whileHover={{ x: -4, y: -4, shadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#A3E635] text-black px-8 py-4 text-sm font-black uppercase tracking-widest border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                View Projects
              </motion.button>
              <motion.button 
                whileHover={{ x: -4, y: -4, shadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 text-sm font-black uppercase tracking-widest border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>

          {/* --- AVATAR CARD --- */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div 
              whileHover={{ x: -8, y: -8, shadow: "20px 20px 0px 0px #FFD100" }}
              className="bg-white border-[4px] border-black p-8 shadow-[12px_12px_0px_0px_#FFD100] relative"
            >
              <div className="absolute -top-5 -left-5 bg-black text-white px-4 py-2 text-sm font-black border-2 border-black rotate-[-5deg]">
                DEVELOPER
              </div>
              
              <div className="bg-[#F1F1F1] border-[3px] border-black p-4">
                <Character />
              </div>

              <div className="mt-6 flex flex-col gap-2">
                 <div className="h-4 w-full bg-black" />
                 <div className="h-4 w-2/3 bg-black" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- TICKER STRIP --- */}
      <div className="absolute bottom-0 z-20 w-full border-t-[4px] border-black bg-[#FFD100] py-3 overflow-hidden flex items-center h-14">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 text-sm font-black uppercase tracking-tighter text-black whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Full-Stack Development</span>
              <span>★</span>
              <span>ERP Optimization</span>
              <span>★</span>
              <span>Dubai Based</span>
              <span>★</span>
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}