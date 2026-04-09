"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const techClasses = [
  { slug: 'nextdotjs', name: 'Next.js', type: 'Framework', class: 'Mage', hp: 95, mp: 85 },
  { slug: 'react', name: 'React', type: 'Library', class: 'Summoner', hp: 92, mp: 80 },
  { slug: 'typescript', name: 'TypeScript', type: 'Language', class: 'Archer', hp: 90, mp: 75 },
  { slug: 'odoo', name: 'Odoo ERP', type: 'System', class: 'Knight', hp: 85, mp: 40 },
  { slug: 'tailwindcss', name: 'Tailwind', type: 'Design', class: 'Rogue', hp: 98, mp: 100 },
  { slug: 'python', name: 'Python', type: 'Backend', class: 'Alchemist', hp: 80, mp: 65 },
  { slug: 'wordpress', name: 'WordPress', type: 'CMS', class: 'Cleric', hp: 90, mp: 55 },
  { slug: 'javascript', name: 'JavaScript', type: 'Core', class: 'Warlock', hp: 95, mp: 75 },
  { slug: 'html5', name: 'HTML5', type: 'Structure', class: 'Blacksmith', hp: 100, mp: 100 },
  { slug: 'css', name: 'CSS3', type: 'Styling', class: 'Dancer', hp: 98, mp: 95 },
];

const ExternalIcon = ({ slug }: { slug: string }) => (
  <div 
    className="h-8 w-8 md:h-16 md:w-16 bg-black group-hover:bg-green-500 transition-colors duration-200"
    style={{
      WebkitMaskImage: `url(https://cdn.simpleicons.org/${slug}/000)`,
      maskImage: `url(https://cdn.simpleicons.org/${slug}/000)`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
    }}
  />
);

export function Skills() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dubai" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="skills" className="relative w-full border-t-4 border-black bg-zinc-50 py-16 md:py-24 overflow-hidden selection:bg-black selection:text-white font-sans">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-2 border-black pb-4">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase text-zinc-400">Local_Node:</span>
            <span className="text-xs font-mono font-bold uppercase">Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase text-zinc-400">Current_Time:</span>
            <span className="text-xs font-mono font-bold text-green-600">{time} GST</span>
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
            <div className="h-4 flex-grow md:w-32 bg-zinc-200 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-black w-[88%]" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-white font-bold uppercase tracking-tighter">Global_HP: 88%</span>
            </div>
            <div className="h-4 flex-grow md:w-32 bg-zinc-200 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-green-500 w-[72%]" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-black font-bold uppercase tracking-tighter">Global_MP: 72%</span>
            </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 md:-left-4 md:-top-4 h-8 w-8 md:h-12 md:w-12 border-l-4 border-t-4 border-black" />
            <p className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.3em] md:tracking-[0.5em] mb-2 md:mb-4 ml-2 italic underline decoration-black underline-offset-4">Capability_Inventory // v4.6</p>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.75]">
              Core_<span className="text-zinc-300">Class</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
             <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-zinc-400 uppercase tracking-tighter">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                Connectivity: Stable // 124ms
             </div>
             <p className="text-xs md:text-sm font-bold border-2 border-black bg-white text-black px-4 md:px-5 py-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-wait">
                Verified Skills
             </p>
          </div>
        </div>

        {/* --- GRID (Tightened for Mobile) --- */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {techClasses.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[240px] md:h-[420px] [perspective:1000px] cursor-crosshair"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* CARD FRONT */}
                <div className="absolute inset-0 h-full w-full border-2 md:border-4 border-black bg-white p-2.5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="flex justify-between items-start border-b border-black pb-1.5 md:pb-2">
                    <span className="text-[7px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-widest truncate">CL_{tech.class}</span>
                    <span className="text-[7px] md:text-[10px] font-black text-black">LVL_99</span>
                  </div>

                  <div className="flex-grow flex items-center justify-center">
                    <div className="relative border border-zinc-50 p-1.5 md:p-6 group-hover:border-black transition-colors duration-300 group-hover:bg-zinc-50 shadow-sm group-hover:shadow-none">
                      <ExternalIcon slug={tech.slug} />
                    </div>
                  </div>

                  <div className="space-y-1.5 md:space-y-4">
                     <div>
                        <h3 className="text-xs md:text-2xl font-black uppercase tracking-tighter text-black leading-none mb-0.5 group-hover:italic transition-all">{tech.name}</h3>
                        <p className="text-[6px] md:text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{tech.type}</p>
                     </div>
                     <div className="space-y-1 md:space-y-2">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <span className="w-3 md:w-5 text-[6px] md:text-[9px] font-black text-zinc-400">HP</span>
                          <div className="h-1 md:h-1.5 flex-grow bg-zinc-100 overflow-hidden border border-black/5">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${tech.hp}%` }} className="h-full bg-black group-hover:bg-green-500 transition-colors" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <span className="w-3 md:w-5 text-[6px] md:text-[9px] font-black text-zinc-400">MP</span>
                          <div className="h-1 md:h-1.5 flex-grow bg-zinc-100 overflow-hidden border border-black/5">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${tech.mp}%` }} className="h-full bg-zinc-300 group-hover:bg-black transition-colors" />
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="absolute inset-0 h-full w-full border-2 md:border-4 border-black bg-black p-3 md:p-8 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)] md:shadow-[8px_8px_0px_0px_rgba(34,197,94,0.3)] text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="h-full flex flex-col justify-between font-mono">
                      <div className="space-y-1.5 md:space-y-4">
                        <div className="flex justify-between items-center">
                           <p className="text-[7px] md:text-[10px] text-green-500 tracking-tighter truncate">&gt; LOG_ACTIVE</p>
                           <span className="text-[5px] md:text-[8px] text-zinc-600">ID: {index.toString().padStart(3, '0')}</span>
                        </div>
                        <p className="text-[8px] md:text-sm uppercase leading-tight md:leading-relaxed tracking-tight border-l border-green-500 pl-2 md:pl-4 py-0.5 italic">
                           Mastery confirmed.
                        </p>
                      </div>
                      <div className="pt-1.5 border-t border-zinc-800 flex justify-between items-center text-[6px] md:text-[9px] text-zinc-600">
                        <span className="truncate">SIMPLE_ICONS</span>
                        <div className="px-1 py-0.5 bg-green-500 text-black font-bold uppercase tracking-tighter text-[5px] md:text-[8px]">VERIFIED</div>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER EXTRAS --- */}
        <div className="mt-12 md:mt-24 pt-8 md:pt-12 border-t-2 border-black/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50 transition-all duration-700">
           <div className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-zinc-400 text-center md:text-left">
             [ Build: 2026.4.9 // Brianshiroe ]
           </div>
           <div className="flex gap-4">
              <div className="h-1 w-6 md:w-8 bg-black/20 rounded-full" />
              <div className="h-1 w-12 md:w-16 bg-black/40 rounded-full" />
              <div className="h-1 w-4 bg-green-500 rounded-full" />
           </div>
        </div>

      </div>
    </section>
  );
}