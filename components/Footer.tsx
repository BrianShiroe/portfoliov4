"use client";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Main Terminal Bar */}
      <div className="w-full border-t-4 border-black bg-black py-10 px-6 text-white font-mono">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Identity Node */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-black text-lg uppercase tracking-tighter">
                Brian_Shiroe<span className="text-zinc-500">.Archive</span>
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Live_Node: Dubai, UAE
                </span>
              </div>
            </div>

            {/* Link Matrix */}
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <a 
                href="https://github.com" 
                target="_blank" 
                className="hover:text-zinc-400 transition-colors border-b border-transparent hover:border-zinc-400"
              >
                Github
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                className="hover:text-zinc-400 transition-colors border-b border-transparent hover:border-zinc-400"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:Brianshiroe@gmail.com" 
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                Contact_Root
              </a>
            </div>

            {/* System Metadata */}
            <div className="flex flex-col items-center md:items-end opacity-40">
              <span className="text-[9px] font-bold uppercase tracking-widest">
                © 2026 // BUILD_V1.0.4
              </span>
              <span className="text-[8px] font-medium mt-1 uppercase">
                Designed for high-performance
              </span>
            </div>

          </div>

          {/* Decorative Bottom Line */}
          <div className="mt-8 flex justify-center md:justify-start gap-1">
            {[...Array(24)].map((_, i) => (
              <div key={i} className={`h-1 w-2 ${i % 6 === 0 ? 'bg-zinc-500' : 'bg-zinc-800'}`} />
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
}