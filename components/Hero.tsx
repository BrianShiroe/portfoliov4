"use client";
import { motion } from "framer-motion";
import { Character } from "./Character";

export function Hero() {
  return (
    <section className="flex min-h-[90vh] w-full max-w-6xl flex-col items-center justify-center px-6 lg:flex-row lg:justify-between mx-auto">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
        
        {/* Location Tag with subtle hover scale */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: 5 }}
          className="mb-6 cursor-pointer inline-block border-2 border-black bg-ink-deep px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white"
        >
          LOC: DUBAI_UAE // V.2026.04
        </motion.div>

        <div className="mb-2">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 italic">
            Authorized_User: Brian Haw
          </span>
        </div>

        <h1 className="text-gradient-ink text-7xl font-black uppercase tracking-tighter sm:text-8xl md:text-[10rem] leading-[0.8]">
          Brian <br />
          <span className="text-ink-deep">Shiroe</span>
        </h1>

        <div className="mt-8 space-y-4">
          <motion.h2 
            whileHover={{ x: 10 }}
            className="text-2xl font-black uppercase tracking-tight text-ink-deep border-b-4 border-black inline-block cursor-default"
          >
            [ Web Developer ]
          </motion.h2>
          <p className="max-w-md text-lg font-medium text-ink-soft leading-tight">
            Building high-performance digital experiences. 
            Focused on minimalist design and clean code architectures.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
          {/* Primary Button */}
          <motion.button 
            whileHover={{ scale: 1.02, x: -2, y: -2 }}
            whileTap={{ scale: 0.98, x: 2, y: 2 }}
            className="retro-border-thick bg-ink-deep px-10 py-4 text-white font-bold uppercase hover:bg-zinc-800"
          >
            Enter_System
          </motion.button>
          
          {/* Secondary Button */}
          <motion.button 
            whileHover={{ scale: 1.02, x: -2, y: -2 }}
            whileTap={{ scale: 0.98, x: 2, y: 2 }}
            className="retro-border-thick bg-white px-10 py-4 text-ink-deep font-bold uppercase hover:bg-zinc-50"
          >
            View_Logs
          </motion.button>
        </div>
      </div>

      <div className="mt-16 lg:mt-0 flex flex-col items-center gap-6 order-1 lg:order-2">
        {/* Character Container with Inversion Hover */}
        <motion.div 
          whileHover={{ 
            backgroundColor: "#000000",
            transition: { duration: 0.2 }
          }}
          className="retro-border-thick group bg-white p-10 cursor-crosshair"
        >
          <Character />
        </motion.div>
        
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-ink-soft">
            Status: Active_In_Dubai
          </span>
        </div>
      </div>
    </section>
  );
}