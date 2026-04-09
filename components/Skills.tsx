"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const techClasses = [
  { slug: 'nextdotjs', name: 'Next.js', type: 'Framework', class: 'Mage' },
  { slug: 'react', name: 'React', type: 'Library', class: 'Summoner' },
  { slug: 'typescript', name: 'TypeScript', type: 'Language', class: 'Archer' },
  { slug: 'odoo', name: 'Odoo ERP', type: 'System', class: 'Knight' },
  { slug: 'tailwindcss', name: 'Tailwind', type: 'Design', class: 'Rogue' },
  { slug: 'python', name: 'Python', type: 'Backend', class: 'Alchemist' },
  { slug: 'wordpress', name: 'WordPress', type: 'CMS', class: 'Cleric' },
  { slug: 'javascript', name: 'JavaScript', type: 'Core', class: 'Warlock' },
  { slug: 'html5', name: 'HTML5', type: 'Structure', class: 'Blacksmith' },
  { slug: 'css', name: 'CSS3', type: 'Styling', class: 'Dancer' },
];

const ExternalIcon = ({ slug }: { slug: string }) => (
  <div 
    className="h-12 w-12 md:h-16 md:w-16 bg-black group-hover:bg-white transition-colors duration-200"
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
    <section id="skills" className="relative w-full border-t-[6px] border-black bg-[#F1F1F1] py-16 md:py-24 overflow-hidden selection:bg-[#FFD100] selection:text-black font-sans scroll-mt-20">
      
      {/* 1. TOP UTILITY BAR - CLEAN GRID */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-[3px] border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-black/40">Location</span>
            <span className="text-sm font-black uppercase">Dubai, UAE</span>
          </div>
          <div className="h-8 w-[2px] bg-black hidden md:block" />
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-black/40">Local Time</span>
            <span className="text-sm font-black uppercase">{time} GST</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 bg-black text-white px-4 py-2">
            <span className="text-xs font-black uppercase tracking-widest">Tech Stack Registry v4.0</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="relative">
            <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.8]">
              TECH <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>STACK</span>
            </h2>
          </div>
          <div className="max-w-xs">
              <p className="text-lg font-bold text-black leading-tight uppercase">
                A professional breakdown of tools and frameworks used to deliver high-performance solutions.
              </p>
          </div>
        </div>

        {/* --- SKILLS GRID - NEOBRUTALIST CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {techClasses.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, x: -4 }}
              className="group relative bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#A3E635] hover:bg-[#A3E635] transition-all cursor-default overflow-hidden"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-[8px] font-black uppercase">
                ID_{index.toString().padStart(2, '0')}
              </div>

              <div className="flex flex-col h-full justify-between gap-8">
                <div className="flex items-center justify-center pt-4">
                  <ExternalIcon slug={tech.slug} />
                </div>

                <div className="space-y-2">
                  <div className="bg-black text-white inline-block px-2 py-0.5 text-[9px] font-black uppercase group-hover:bg-white group-hover:text-black transition-colors">
                    {tech.type}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{tech.name}</h3>
                </div>

                {/* Tag System replaced HP bars */}
                <div className="border-t-2 border-black pt-4 flex flex-wrap gap-2">
                   <span className="text-[10px] font-black uppercase px-2 py-1 bg-[#F1F1F1] border-2 border-black group-hover:bg-white transition-colors">Mastery</span>
                   <span className="text-[10px] font-black uppercase px-2 py-1 bg-[#F1F1F1] border-2 border-black group-hover:bg-white transition-colors">Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER INFO --- */}
        <div className="mt-20 pt-8 border-t-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-sm font-black uppercase tracking-tighter text-black">
             © 2026 Brian Shiroe — Dubai Digital Solutions
           </div>
           <div className="flex gap-2">
              <div className="h-6 w-6 bg-black border-2 border-black" />
              <div className="h-6 w-6 bg-[#FFD100] border-2 border-black" />
              <div className="h-6 w-6 bg-[#A3E635] border-2 border-black" />
              <div className="h-6 w-6 bg-white border-2 border-black" />
           </div>
        </div>

      </div>
    </section>
  );
}