"use client";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    { 
      id: '01', 
      title: 'Multilingual E-Commerce Platform', 
      tag: 'E-Commerce', 
      tech: 'Shopify / Liquid / Arabic-English', 
      status: 'Live', 
      date: '2026.01' 
    },
    { 
      id: '02', 
      title: 'Corporate ERP Interface', 
      tag: 'Web System', 
      tech: 'Odoo / Python / XML-RPC', 
      status: 'Internal', 
      date: '2025.12' 
    },
    { 
      id: '03', 
      title: 'High-Performance Portfolio', 
      tag: 'Frontend', 
      tech: 'Next.js / Tailwind / Framer', 
      status: 'Production', 
      date: '2026.04' 
    },
    { 
      id: '04', 
      title: 'Asset Tracking System', 
      tag: 'Technical', 
      tech: 'PHP / MySQL / Dashboard', 
      status: 'Verified', 
      date: '2024.08' 
    },
    { 
      id: '05', 
      title: 'Automated Marketing Site', 
      tag: 'Development', 
      tech: 'WordPress / SEO / Marketing Auth', 
      status: 'Stable', 
      date: '2025.11' 
    },
    { 
      id: '06', 
      title: 'Custom Client Portal', 
      tag: 'Systems', 
      tech: 'Node.js / API Integration', 
      status: 'Active', 
      date: '2026.03' 
    }
  ];

  return (
    <section id="projects" className="w-full bg-white px-4 py-24 md:px-6 overflow-hidden font-mono">
      <div className="mx-auto max-w-6xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-black/20" />
            <span className="text-[12px] font-black uppercase tracking-widest text-zinc-400">Development Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Web_<span className="text-zinc-200">Projects</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[12px] font-bold text-black uppercase tracking-widest">Global Solutions // UAE Based</p>
            <div className="h-2 w-48 bg-zinc-100 mt-2 overflow-hidden border border-black/10">
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
          {projects.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b-2 border-zinc-100 py-8 md:py-12 transition-all hover:bg-zinc-50 px-2 md:px-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* ID & Title Column */}
                <div className="flex items-start md:items-center gap-6 md:gap-12">
                  <div className="flex flex-col items-center">
                    <span className="text-sm md:text-base font-black text-zinc-300 group-hover:text-black transition-colors">{work.id}</span>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300">
                      {work.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">{work.tech}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                      <span className="text-[10px] md:text-xs font-black text-black uppercase tracking-widest border-b border-black">{work.status}</span>
                    </div>
                  </div>
                </div>

                {/* Metadata Column */}
                <div className="flex items-center justify-between md:justify-end gap-8">
                  <div className="hidden xl:flex flex-col items-end">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">Delivered</p>
                    <p className="text-xs font-bold text-black">{work.date}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] md:text-xs font-black uppercase border-4 border-black px-4 py-2 bg-white group-hover:bg-black group-hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none whitespace-nowrap">
                      {work.tag}
                    </span>
                    
                    <div className="h-10 w-10 md:h-12 md:w-12 border-4 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION FOOTER --- */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t-2 border-black/10 pt-12">
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-3 w-3 bg-black" />
            ))}
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            Selected Work // Fullstack & E-Commerce // 2026
          </p>
        </div>
      </div>
    </section>
  );
}