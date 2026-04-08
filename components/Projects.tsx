"use client";
import { motion } from "framer-motion";

export function Projects() {
  const logs = [
    { 
      id: '01', 
      title: 'E-Commerce Engine', 
      tag: 'Fullstack', 
      tech: 'Next.js / Stripe', 
      status: 'Deployed', 
      date: '2026.01' 
    },
    { 
      id: '02', 
      title: 'Neural Dashboard', 
      tag: 'Frontend', 
      tech: 'React / Framer', 
      status: 'Optimized', 
      date: '2026.02' 
    },
    { 
      id: '03', 
      title: 'Protocol Alpha', 
      tag: 'Web3', 
      tech: 'Solidity / TS', 
      status: 'Encrypted', 
      date: '2026.02' 
    },
    { 
      id: '04', 
      title: 'Odoo Enterprise', 
      tag: 'System', 
      tech: 'Python / PostgreSQL', 
      status: 'Stable', 
      date: '2026.03' 
    },
    { 
      id: '05', 
      title: 'Cyber-Sprite 2D', 
      tag: 'Creative', 
      tech: 'Vite / Canvas', 
      status: 'Active', 
      date: '2026.03' 
    },
    { 
      id: '06', 
      title: 'Dubai_Uplink CMS', 
      tag: 'Backend', 
      tech: 'Next.js / WP-API', 
      status: 'Live', 
      date: '2026.04' 
    }
  ];

  return (
    <section className="w-full bg-white px-4 py-24 md:px-6 overflow-hidden font-mono">
      <div className="mx-auto max-w-6xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-black/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Archive_Directory</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Selected_<span className="text-zinc-200">Logs</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] font-bold text-black uppercase tracking-widest">Database_Sync: 100%</p>
            <div className="h-1.5 w-32 bg-zinc-100 mt-1 overflow-hidden border border-black/5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                className="h-full bg-black" 
              />
            </div>
          </div>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-0">
          {logs.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b-2 border-zinc-100 py-8 md:py-10 transition-all hover:bg-zinc-50/50 cursor-crosshair px-2 md:px-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* ID & Title Column */}
                <div className="flex items-start md:items-center gap-4 md:gap-10">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-black text-zinc-300 group-hover:text-black transition-colors">{work.id}</span>
                    <div className="h-6 w-[1px] bg-zinc-100 group-hover:bg-black transition-colors hidden md:block" />
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300">
                      {work.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1 md:mt-2">
                      <span className="text-[8px] md:text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{work.tech}</span>
                      <span className="hidden md:block h-1 w-1 rounded-full bg-zinc-200" />
                      <span className="text-[8px] md:text-[9px] font-bold text-green-600 uppercase tracking-widest animate-pulse">{work.status}</span>
                    </div>
                  </div>
                </div>

                {/* Metadata Column */}
                <div className="flex items-center justify-between md:justify-end gap-6">
                  <div className="hidden xl:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[7px] font-black text-zinc-400 uppercase tracking-tighter">Entry_Point</p>
                    <p className="text-[10px] font-bold text-black">{work.date}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] md:text-[10px] font-black uppercase border-2 border-black px-3 py-1.5 md:px-4 md:py-2 group-hover:bg-black group-hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] group-hover:shadow-none whitespace-nowrap">
                      {work.tag}
                    </span>
                    
                    <div className="h-8 w-8 md:h-10 md:w-10 border-2 border-zinc-100 flex items-center justify-center group-hover:border-black transition-colors group-hover:bg-black group-hover:text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="md:w-5 md:h-5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/4 bg-black/[0.01] -z-10 skew-x-6 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out hidden lg:block" />
            </motion.div>
          ))}
        </div>

        {/* --- SYSTEM FOOTER --- */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1 w-10 bg-zinc-200" />
            ))}
          </div>
          <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400 text-center">
            User: Brian_Shiroe // Deployment_Cycle_Finished
          </p>
        </div>
      </div>
    </section>
  );
}