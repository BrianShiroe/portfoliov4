"use client";
import { motion } from "framer-motion";
import { Character } from "./Character";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-black selection:text-white">
      
      {/* System Overlays */}
      <div className="absolute top-0 flex w-full justify-between px-4 py-2 md:p-6 z-20">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-black uppercase tracking-widest text-black md:text-[10px]">OS_STABLE_V4.0</span>
          <div className="h-[1px] w-8 bg-black md:h-[2px] md:w-12" />
        </div>
        <div className="text-right">
          <p className="text-[8px] font-bold uppercase tracking-tighter text-zinc-400 md:text-[10px]">
            Node: DXB_SHIROE <br />
            Ping: 14ms
          </p>
        </div>
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pt-20 pb-16 lg:flex-row lg:justify-between lg:pt-0 lg:pb-0">
        
        {/* Character Section */}
        <div className="mb-12 flex flex-col items-center gap-6 lg:mb-0 lg:order-2">
          <motion.div 
            whileHover={{ 
              backgroundColor: "#000000",
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.2, repeat: Infinity }
            }}
            className="retro-border-thick group bg-white p-6 md:p-10 cursor-crosshair"
          >
            <div className="scale-75 md:scale-100">
              <Character />
            </div>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse md:h-3 md:w-3" />
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-ink-soft md:text-[10px]">
              Status: Active_In_Dubai
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block bg-ink-deep px-2 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white md:mb-6 md:text-[10px]"
          >
            LOC: DUBAI_UAE // V.2026.04
          </motion.div>

          <h1 className="text-gradient-ink text-6xl font-black uppercase tracking-tighter sm:text-8xl md:text-[9rem] lg:text-[10rem] leading-[0.85] md:leading-[0.8]">
            Brian <br />
            <span className="text-ink-deep">Shiroe</span>
          </h1>

          <div className="mt-6 space-y-3 md:mt-8">
            <h2 className="text-lg font-black uppercase tracking-tight text-ink-deep border-b-2 border-black inline-block md:text-2xl">
              [ Web Developer ]
            </h2>
            <p className="max-w-[280px] text-sm font-medium text-ink-soft leading-tight sm:max-w-md md:text-lg">
              Building high-performance digital experiences. 
              Focused on minimalist design and clean code.
            </p>
          </div>

          {/* New Game-Style Buttons */}
          <div className="mt-10 flex flex-col gap-5 w-full xs:flex-row sm:w-auto md:mt-12">
            
            {/* View Projects -> INITIATE_PROJECTS */}
            <motion.button 
              whileHover={{ 
                x: -4, 
                y: -4, 
                boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" 
              }}
              whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
              className="retro-border-thick w-full bg-ink-deep px-8 py-4 text-xs text-white font-bold uppercase tracking-widest md:text-sm"
            >
              Initiate_Projects
            </motion.button>
            
            {/* Contact Me -> ESTABLISH_UPLINK */}
            <motion.button 
              whileHover={{ 
                x: -4, 
                y: -4, 
                boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" 
              }}
              whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
              className="retro-border-thick w-full bg-white px-8 py-4 text-xs text-ink-deep font-bold uppercase tracking-widest md:text-sm"
            >
              Establish_Uplink
            </motion.button>

          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="absolute bottom-0 z-20 w-full border-t-2 border-black bg-white py-1 md:py-2 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10 text-[8px] font-black uppercase tracking-widest text-black md:text-[10px]"
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="flex-shrink-0">
              System Status: Nominal • Traffic: Low • Build: NextJS_15 • UI: Tailwind_V4 •
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}