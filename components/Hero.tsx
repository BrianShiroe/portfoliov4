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
    // ID ADDED FOR NAVIGATION + SCROLL MARGIN FOR STICKY HEADER
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-black selection:text-white font-mono scroll-mt-20"
    >
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '24px 24px' }} 
      />

      {/* --- HUD: TOP SYSTEM STRIP --- */}
      <div className="absolute top-0 flex w-full justify-between px-4 py-3 md:px-6 md:py-4 z-20 border-b-2 border-black/10 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-black whitespace-nowrap">OS_V4.0 // BRIAN_SHIROE</span>
            <span className="text-[7px] md:text-[8px] text-zinc-400 uppercase font-bold">DXB_NODE // 124ms_STABLE</span>
          </div>
          <div className="h-6 w-[1.5px] bg-black/20 hidden sm:block" />
          <div className="hidden lg:flex gap-4">
             <div className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase text-zinc-400">System_Health</span>
                <div className="h-2.5 w-24 bg-zinc-100 relative overflow-hidden border border-black/5">
                   <div className="absolute inset-y-0 left-0 bg-black w-[94%]" />
                </div>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase text-zinc-400">Optimization_Rate</span>
                <div className="h-2.5 w-24 bg-zinc-100 relative overflow-hidden border border-black/5">
                   <div className="absolute inset-y-0 left-0 bg-green-500 w-[82%]" />
                </div>
             </div>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <span className="text-xs font-black text-black">{time}</span>
          <p className="text-[7px] md:text-[8px] text-green-600 font-bold animate-pulse tracking-widest flex items-center gap-1 uppercase">
            <span className="h-1 w-1 bg-green-500 rounded-full" /> NODE_ONLINE
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 md:px-6 pt-24 pb-12">
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8 md:gap-16">
          
          {/* --- LEFT SIDE: SYSTEM LOGS --- */}
          <div className="hidden xl:flex flex-col gap-8 w-48 opacity-40">
            <div className="space-y-2">
              <span className="text-[9px] font-black border-b border-black w-full block pb-1 tracking-widest uppercase text-black">Uptime_Sequence</span>
              <div className="space-y-0.5 font-mono text-[8px] text-zinc-500 uppercase">
                <p>&gt; BOOT_SECTOR_LOADED</p>
                <p>&gt; DUBAI_UPLINK_STABLE</p>
                <p>&gt; PORTFOLIO_V2.0_DEPLOYED</p>
                <p className="text-black font-bold animate-pulse">&gt; ANALYZING_TRAFFIC...</p>
              </div>
            </div>
          </div>

          {/* --- CENTER: COMMAND ARCHITECTURE --- */}
          <div className="relative flex flex-col items-center w-full">
            
            <div className="relative">
               {/* Reticle Decorators */}
               <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-4 h-4 md:w-6 md:h-6 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-black" />
               <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-4 h-4 md:w-6 md:h-6 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-black" />

               <div className="mb-3 md:mb-4 inline-block bg-black px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                 LOC: DUBAI_UAE // DXB_UPLINK
               </div>

               <h1 className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] mb-4 md:mb-6">
                 Brian <br />
                 <span className="text-zinc-200 relative inline-block">
                   Shiroe
                   <span className="absolute -right-20 top-1/2 hidden 2xl:block text-[8px] text-zinc-400 font-mono text-left opacity-40 uppercase">
                      Class: {"{"} Type: "Developer" {"}"}
                   </span>
                 </span>
               </h1>
            </div>

            {/* Hero Stats Matrix */}
            <div className="mt-2 md:mt-4 flex items-center gap-3 md:gap-6 border-y-2 border-black/5 py-3 md:py-4 w-full justify-center bg-white/40 backdrop-blur-sm px-4">
               <div className="text-center">
                  <p className="text-[8px] text-zinc-400 font-black uppercase mb-0.5">Status</p>
                  <p className="text-sm md:text-xl font-black text-green-600">ACTIVE</p>
               </div>
               <div className="h-8 w-[1.5px] bg-black/10" />
               <div className="text-center">
                  <p className="text-[8px] text-zinc-400 font-black uppercase mb-0.5">Deployment</p>
                  <p className="text-sm md:text-xl font-black italic underline decoration-2 decoration-black underline-offset-4 whitespace-nowrap">UAE_6MO</p>
               </div>
               <div className="h-8 w-[1.5px] bg-black/10" />
               <div className="text-center">
                  <p className="text-[8px] text-zinc-400 font-black uppercase mb-0.5">Expertise</p>
                  <p className="text-sm md:text-xl font-black tracking-widest uppercase">Odoo_Dev</p>
               </div>
            </div>

            <p className="mt-6 md:mt-8 max-w-[280px] md:max-w-md text-center text-[10px] font-bold text-zinc-500 uppercase tracking-tight leading-tight italic">
              "Architecting high-performance digital experiences and ERP systems in the UAE."
            </p>

            {/* Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-5 w-full max-w-sm md:max-w-lg">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 bg-black text-white p-4 md:p-5 text-[10px] font-black uppercase tracking-[0.3em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(161,161,170,0.4)]"
              >
                View_Full_Registry
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 border-2 border-black bg-white p-4 md:p-5 text-[10px] font-black uppercase tracking-[0.3em] text-black"
              >
                Secure_Uplink
              </motion.button>
            </div>
          </div>

          {/* --- RIGHT SIDE: AVATAR HUD --- */}
          <div className="flex flex-col items-center relative mt-8 lg:mt-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-black/10 rounded-full scale-[1.3] md:scale-[1.5] pointer-events-none"
            />
            
            <div className="relative z-10">
              <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-0.5 text-[8px] font-black z-20 shadow-[2px_2px_0px_0px_rgba(34,197,94,1)]">
                RANK_S
              </div>
              
              <motion.div 
                whileHover={{ rotate: [0, -1, 1, 0], transition: { repeat: Infinity, duration: 0.2 } }}
                className="bg-white border-2 md:border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/5 to-transparent h-12 w-full animate-scan" />
                <div className="scale-75 md:scale-100">
                  <Character />
                </div>
              </motion.div>
            </div>

            <div className="mt-6 md:mt-10 text-center space-y-1 md:space-y-2">
               <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] text-zinc-300 uppercase underline underline-offset-4">User_Active</span>
               <div className="flex gap-1 justify-center">
                  <div className="h-1 w-6 bg-black" />
                  <div className="h-1 w-2 bg-black" />
                  <div className="h-1 w-12 bg-zinc-100" />
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- FOOTER: TICKER STRIP --- */}
      <div className="absolute bottom-0 z-20 w-full border-t-2 border-black bg-white py-2 overflow-hidden flex items-center h-10 md:h-12">
        <motion.div 
          animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-8 md:gap-12 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-black whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-4 md:gap-6">
              <span className="text-green-600">● SYSTEM_OPTIMIZED</span>
              <span className="text-zinc-300">//</span>
              <span>EST_OCT_2025</span>
              <span className="text-zinc-300">//</span>
              <span>NEXT.JS // TAILWIND // ODOO</span>
              <span className="text-zinc-300">//</span>
              <span>DXB_DATACENTER_01</span>
              <span className="text-zinc-300">//</span>
            </span>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(200%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>

    </section>
  );
}