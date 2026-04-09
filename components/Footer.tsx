"use client";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Main Bar */}
      <div className="w-full border-t-8 border-black bg-black py-12 px-6 text-white font-sans">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            
            {/* Identity */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-black text-2xl uppercase tracking-tighter">
                BrianShiroe<span className="text-zinc-600"> / Web Developer</span>
              </span>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-black text-zinc-400 uppercase tracking-widest">
                  Based in Dubai, UAE
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-black uppercase tracking-widest">
              <a 
                href="https://github.com/BrianShiroe" 
                target="_blank" 
                className="hover:text-zinc-400 transition-colors border-b-2 border-transparent hover:border-zinc-400 pb-1"
              >
                Github
              </a>
              <a 
                href="https://www.linkedin.com/in/brianshiroe/" 
                target="_blank" 
                className="hover:text-zinc-400 transition-colors border-b-2 border-transparent hover:border-zinc-400 pb-1"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:Brianshiroe@gmail.com" 
                className="text-white bg-zinc-800 px-4 py-2 hover:bg-zinc-700 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                Get In Touch
              </a>
            </div>

            {/* Metadata */}
            <div className="flex flex-col items-center md:items-end opacity-60">
              <span className="text-xs font-black uppercase tracking-widest">
                © 2026 // BrianShiroe
              </span>
              <span className="text-xs font-bold mt-1 uppercase text-zinc-500">
                Web Developer Portfolio
              </span>
            </div>

          </div>

          {/* Decorative Divider */}
          <div className="mt-12 flex justify-center md:justify-start gap-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`h-4 w-1 ${i % 3 === 0 ? 'bg-white' : 'bg-zinc-800'}`} />
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
}