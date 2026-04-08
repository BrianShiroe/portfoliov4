"use client";
import { motion } from "framer-motion";

export function Experience() {
  const history = [
    {
      id: "DEP_02",
      period: "SEP 2025 – PRESENT",
      company: "ITD INNOVATION",
      location: "DUBAI, UAE",
      role: "Web Developer & Digital Marketing",
      status: "ACTIVE_DEPLOYMENT",
      stack: "Next.js / Tailwind / Meta Ads",
      tasks: ["Fullstack Development", "Digital Strategy", "UI Optimization", "Conversion Tracking"],
      color: "text-green-600"
    },
    {
      id: "DEP_01",
      period: "MAY 2024 – AUG 2024",
      company: "DPWH - OLONGAPO",
      location: "PHILIPPINES",
      role: "PHP Web Developer & IT Support Intern",
      status: "ARCHIVED",
      stack: "PHP / MySQL / hardware",
      tasks: ["Backend Logic", "System Troubleshooting", "Infrastructure Support", "Database Management"],
      color: "text-zinc-400"
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 px-4 md:px-6 overflow-hidden font-mono border-b-2 border-black">
      <div className="mx-auto max-w-5xl relative">
        
        {/* --- HEADER & SUMMARY --- */}
        <div className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-black" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Deployment_Logs</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              Career_<span className="text-zinc-100">Path</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l-2 border-black pl-4">
            <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Core_Directives</p>
            <p className="text-xs font-bold leading-tight uppercase text-black">
              Specializing in high-performance web architecture and digital growth strategies within the UAE market.
            </p>
          </div>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="relative border-l border-zinc-200 ml-2 md:ml-0">
          {history.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-16 last:mb-0 pl-8 md:pl-20 group"
            >
              {/* Target Node */}
              <div className="absolute -left-[5.5px] top-1.5 h-3 w-3 rounded-full border border-zinc-300 bg-white flex items-center justify-center transition-colors group-hover:border-black">
                <div className={`h-1 w-1 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-black'}`} />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Time & Status Column */}
                <div className="lg:col-span-3 flex flex-col items-start pt-1">
                  <div className="px-2 py-1 bg-black text-white mb-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
                    <span className="text-[10px] font-bold whitespace-nowrap">{job.period}</span>
                  </div>
                  <div className={`flex items-center gap-2 ${job.color}`}>
                    <span className="text-[9px] font-black uppercase tracking-widest">{job.status}</span>
                    {index === 0 && <span className="h-1 w-1 bg-green-500 rounded-full animate-pulse" />}
                  </div>
                  {job.stack && (
                    <span className="text-[8px] mt-2 font-bold text-zinc-300 uppercase tracking-tighter">Stack: {job.stack}</span>
                  )}
                </div>

                {/* Company & Role Column */}
                <div className="lg:col-span-9">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{job.company}</span>
                       <span className="text-zinc-200 text-[10px]">/</span>
                       <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">{job.location}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black leading-none mb-6 group-hover:text-zinc-600 transition-colors">
                      {job.role}
                    </h3>
                    
                    {/* Task Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tasks.map((task) => (
                        <span key={task} className="text-[8px] md:text-[9px] font-bold uppercase border border-black/10 text-zinc-500 px-2 py-1 hover:bg-zinc-50 hover:text-black transition-all cursor-default">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER SCALE */}
      <div className="mx-auto max-w-5xl mt-20 pt-6 border-t border-zinc-100 flex justify-between items-center opacity-40">
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">System_Authenticated // User: Brian_Shiroe</span>
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-1 w-4 ${i === 3 ? 'bg-zinc-100' : 'bg-zinc-400'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}