"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SystemLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [entropy, setEntropy] = useState("0x000000");

  const logs = [
    "Initializing_Neural_Engine...",
    "User_Auth: BrianShiroe [Verified]",
    "Loading_Odoo_ERP_Modules...",
    "Syncing_Next.js_Framework...",
    "Optimizing_React_Components...",
    "Deploying_Shopify_Storefronts...",
    "Configuring_WordPress_CRM...",
    "System_Stable. Opening_Interface.",
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
        const diff = Math.random() < 0.2 ? 0.5 : Math.random() * 18;
        return Math.min(oldProgress + diff, 100);
      });
    }, 180);

    const hexTimer = setInterval(() => {
      setEntropy(
        "0x" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .toUpperCase()
            .padStart(6, "0"),
      );
    }, 100);

    const logTimer = setInterval(() => {
      setCurrentLog((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(hexTimer);
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
            transition: { duration: 1.1, ease: [0.8, 0, 0.1, 1] },
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white font-mono overflow-hidden"
        >
          {/* DECOR: TOP-RIGHT STATUS - Increased to text-xs for legibility */}
          <div className="absolute top-10 right-10 text-right hidden lg:block opacity-30">
            <p className="text-xs leading-relaxed font-black uppercase tracking-widest">
              Entropy: {entropy}
              <br />
              Link: Secured
              <br />
              Node: DXB_01
            </p>
          </div>

          {/* DECOR: LEFT-SIDE TOPOLOGY SKETCH */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-10">
            <div className="h-24 w-[1px] bg-black relative">
              <div className="absolute top-0 -left-1 h-2 w-2 bg-black rounded-full" />
              <div className="absolute bottom-0 -left-1 h-2 w-2 bg-black rounded-full" />
              <div className="absolute top-1/2 -left-10 w-10 h-[1px] bg-black" />
            </div>
            <span className="text-[10px] rotate-90 origin-left mt-12 font-black tracking-[0.5em] uppercase">
              Architecture_Map
            </span>
          </div>

          {/* Increased container max-width slightly for the larger fonts */}
          <div className="w-full max-w-[420px] flex flex-col gap-10 px-8">
            {/* 1. PROFESSIONAL IDENTITY - Scaled to text-4xl */}
            <div className="relative group">
              <div className="flex flex-col gap-2 border-l-[4px] border-black pl-6">
                <span className="text-[11px] font-black uppercase text-zinc-500 tracking-[0.4em]">
                  Web_Developer
                </span>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                  BrianShiroe<span className="animate-pulse">_</span>
                </h1>
              </div>
              <div className="absolute -right-2 -top-2 text-[10px] font-black bg-black text-white px-2 py-1 uppercase tracking-widest">
                v5.0
              </div>
            </div>

            {/* 2. CORE PROCESSING MODULE */}
            <div className="flex flex-col gap-6 bg-zinc-50/80 p-6 border border-zinc-100 rounded-xl shadow-sm">
              <div className="flex justify-between items-end">
                <div className="flex gap-2 mb-1">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      className="h-6 w-2 bg-black"
                      animate={{ opacity: [0.1, 1, 0.1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">
                    Process_Load
                  </span>
                  <span className="text-xl font-black text-black tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar - Increased height to 16px */}
              <div className="w-full h-4 bg-zinc-200 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-black"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                />
              </div>
            </div>

            {/* 3. DIAGNOSTIC TERMINAL - Increased to text-sm */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 opacity-30">
                <div className="h-[1px] flex-1 bg-black" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Diagnostic_Stream
                </span>
                <div className="h-[1px] flex-1 bg-black" />
              </div>
              <div className="min-h-[60px] flex items-start justify-center text-center">
                <motion.p
                  key={currentLog}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-bold uppercase tracking-wide text-zinc-700 leading-relaxed"
                >
                  {logs[currentLog]}
                </motion.p>
              </div>
            </div>

            {/* 4. SYSTEM METADATA FOOTER - Increased font and spacing */}
            <div className="grid grid-cols-2 gap-6 border-t border-zinc-100 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                  Core_Environment
                </span>
                <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-800">
                  Production_Secure
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                  Deployment_Origin
                </span>
                <span className="text-[11px] font-bold uppercase tracking-tight text-right text-zinc-800">
                  DXB_UAE_SATELLITE
                </span>
              </div>
            </div>
          </div>

          {/* BACKGROUND TEXTURE: SCANLINES + GRID */}
          <div
            className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1.5px, transparent 1.5px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute inset-0 z-[-1] opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}