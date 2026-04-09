"use client";
import { motion } from "framer-motion";

export function Projects() {
  const logs = [
    { 
      id: '01', 
      title: 'E-Commerce Engine', 
      tag: 'Fullstack', 
      tech: 'Next.js / Stripe', 
      impact: 'Scaled to 10k monthly active users with 99.9% uptime.' 
    },
    { 
      id: '02', 
      title: 'Neural Dashboard', 
      tag: 'Frontend', 
      tech: 'React / Framer', 
      impact: 'Reduced data visualization latency by 40% using optimized state management.' 
    },
    { 
      id: '03', 
      title: 'Protocol Alpha', 
      tag: 'Web3', 
      tech: 'Solidity / TS', 
      impact: 'Secured smart contract architecture for decentralized asset management.' 
    },
    { 
      id: '04', 
      title: 'Odoo Enterprise', 
      tag: 'System', 
      tech: 'Python / PostgreSQL', 
      impact: 'Automated warehouse workflows, reducing manual entry time by 60%.' 
    },
    { 
      id: '05', 
      title: 'Cyber-Sprite 2D', 
      tag: 'Creative', 
      tech: 'Vite / Canvas', 
      impact: 'High-performance sprite animation engine for 2D browser gaming.' 
    },
    { 
      id: '06', 
      title: 'Dubai_Uplink CMS', 
      tag: 'Backend', 
      tech: 'Next.js / WP-API', 
      impact: 'Centralized content delivery for multi-region regional enterprise portals.' 
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#F1F1F1] px-4 py-24 md:px-6 overflow-hidden font-sans border-t-[6px] border-black scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b-[6px] border-black pb-12">
          <div className="relative">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.8]">
              PROJECT <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>IMPACT</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xl font-black text-black uppercase leading-tight">
              Direct technical solutions for business growth. No buzzwords, just results.
            </p>
          </div>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logs.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, x: -4 }}
              className="bg-white border-[4px] border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_#FFD100] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-black text-black/10 group-hover:text-black transition-colors">{work.id}</span>
                  <span className="bg-[#A3E635] border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {work.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
                  {work.title}
                </h3>
                <p className="text-sm font-bold text-black/40 uppercase mb-6 tracking-widest">
                  {work.tech}
                </p>
                
                <div className="bg-[#F1F1F1] border-l-[6px] border-black p-4 mb-8">
                  <p className="text-sm font-bold text-black uppercase leading-snug">
                    {work.impact}
                  </p>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 text-xs font-black uppercase tracking-[0.2em] border-2 border-black hover:bg-[#FFD100] hover:text-black transition-colors flex items-center justify-center gap-2">
                Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-20 pt-8 border-t-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-black uppercase text-black">
            Registry: 2026_Cycle_01
          </div>
          <div className="flex items-center gap-2">
             <div className="h-4 w-4 bg-black" />
             <div className="h-4 w-4 bg-black" />
             <div className="h-4 w-4 bg-black" />
             <div className="h-4 w-12 bg-[#00E676]" />
          </div>
        </div>
      </div>
    </section>
  );
}