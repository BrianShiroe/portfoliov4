"use client";
import { motion } from "framer-motion";

export function Skills() {
  const techStack = [
    { name: 'Next.js', type: 'Framework', level: '90%' },
    { name: 'TypeScript', type: 'Language', level: '85%' },
    { name: 'Tailwind', type: 'Design', level: '95%' },
    { name: 'Odoo ERP', type: 'System', level: '80%' },
    { name: 'WordPress', type: 'CMS', level: '90%' },
    { name: 'React', type: 'Library', level: '85%' },
    { name: 'PostgreSQL', type: 'Database', level: '70%' },
    { name: 'System Arch', type: 'Logic', level: '75%' },
  ];

  return (
    <section className="w-full border-t-4 border-black bg-zinc-50 py-24 selection:bg-black selection:text-white">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header Module */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.5em] mb-2"
            >
              System_Capabilities
            </motion.p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-ink-deep leading-none">
              Core_Modules
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block h-[2px] w-24 bg-black/10" />
            <p className="text-sm font-bold text-ink-soft uppercase tracking-widest border-2 border-black px-4 py-1">
              [ {techStack.length} Loaded ]
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, x: -5 }}
              className="retro-border-thick group bg-white p-6 cursor-help relative overflow-hidden"
            >
              {/* Background Scanline Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 bg-[linear-gradient(transparent_50%,black_50%)] bg-[length:100%_4px]" />

              <div className="flex justify-between items-start mb-4">
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                  TYPE: {tech.type}
                </p>
                <span className="text-[9px] font-bold text-ink-deep italic">{tech.level}</span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter text-ink-deep group-hover:text-black">
                {tech.name}
              </h3>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-[8px] font-bold uppercase mb-1">
                  <span>Power_Grid</span>
                  <span className="group-hover:animate-pulse text-green-600">Active</span>
                </div>
                <div className="h-3 w-full border-2 border-black bg-zinc-100 p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.level }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-ink-deep group-hover:bg-black" 
                  />
                </div>
              </div>

              {/* Technical Metadata Footer */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <div className="h-1 w-1 bg-black rounded-full" />
                </div>
                <span className="text-[8px] font-mono text-zinc-300">0x00{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Expansion Footer */}
        <div className="mt-16 bg-black p-8 flex flex-col md:flex-row items-center justify-between text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-0">
            Specialization: <span className="text-zinc-400 italic">Bridging ERP Logistics with High-End Frontends</span>
          </p>
          <div className="flex gap-6">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] font-bold uppercase">Ready_For_Deployment</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}