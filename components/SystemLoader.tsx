"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SystemLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const logs = [
    "Initializing_Neural_Engine...",
    "Authorizing_User: BrianShiroe...",
    "Syncing_Dubai_HQ_Assets...",
    "Loading_FullStack_Architecture...",
    "Compiling_v2.6_Stable...",
    "System_Ready."
  ];

  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 1200);
          return 100;
        }
        // Varied increments to simulate "thinking"
        const diff = Math.random() < 0.3 ? Math.random() * 2 : Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 180);

    const logTimer = setInterval(() => {
      setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.8, 0, 0.1, 1] } 
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white font-mono overflow-hidden"
        >
          {/* TOP DECOR: HEX STREAM */}
          <div className="absolute top-8 left-8 hidden md:block opacity-10">
            <p className="text-[10px] leading-tight">
              0x53 0x48 0x49 0x52 0x4F 0x45<br/>
              0x42 0x52 0x49 0x41 0x4E 0x20
            </p>
          </div>

          <div className="w-full max-w-[320px] flex flex-col gap-8 px-6">
            
            {/* 1. IDENTITY HEADER */}
            <div className="flex flex-col gap-1 border-l-2 border-black pl-4">
              <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                Web_Portfolio
              </span>
              <h1 className="text-xl font-black uppercase tracking-tighter text-black">
                BrianShiroe<span className="animate-pulse">_</span>
              </h1>
            </div>

            {/* 2. LOADING SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="h-5 w-3 bg-black"
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "linear",
                        times: [0, 0.1, 0.9, 1]
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">Status</span>
                  <span className="text-xs font-black text-black tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-zinc-100 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-black"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>
            </div>

            {/* 3. CONSOLE OUTPUT */}
            <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100 min-h-[60px]">
              <motion.div
                key={currentLog}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-600 text-[10px] font-black mt-0.5">RUN</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 leading-relaxed">
                  {logs[currentLog]}
                </span>
              </motion.div>
            </div>

            {/* 4. FOOTER INFO */}
            <div className="flex justify-between items-center opacity-30">
               <span className="text-[8px] font-bold uppercase tracking-widest">Build_2026.04</span>
               <span className="text-[8px] font-bold uppercase tracking-widest">Loc: DXB_UAE</span>
            </div>
          </div>

          {/* Background Grid Pattern */}
          <div 
            className="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(#000 1.2px, transparent 0)', 
              backgroundSize: '32px 32px' 
            }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}