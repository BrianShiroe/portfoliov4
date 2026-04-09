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
      color: "text-[#00E676]"
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
      color: "text-black/40"
    }
  ];

  return (
    <section id="experience" className="relative w-full bg-[#F1F1F1] py-24 px-4 md:px-6 overflow-hidden font-sans border-t-[6px] border-black scroll-mt-20">
      <div className="mx-auto max-w-7xl relative">
        
        {/* --- NEOBRUTALIST HEADER --- */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-b-[6px] border-black pb-12">
          <div className="lg:col-span-8">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.8]">
              CAREER <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>HISTORY</span>
            </h2>
          </div>
          <div className="lg:col-span-4 bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm font-black leading-tight uppercase text-black">
              Focused on delivering high-performance web architecture and results-driven digital growth strategies.
            </p>
          </div>
        </div>

        {/* --- EXPERIENCE LIST --- */}
        <div className="space-y-12">
          {history.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, x: 4 }}
              className="bg-white border-[4px] border-black p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_#A3E635] transition-all relative overflow-hidden group"
            >
              {/* Status Indicator */}
              <div className="absolute top-0 right-0 px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                {job.status}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Time & Tech Stack Column */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="inline-block bg-[#FFD100] border-2 border-black px-3 py-1 text-sm font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {job.period}
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-black/40 uppercase">Technology_Stack</p>
                    <p className="text-xs font-black uppercase text-black">{job.stack}</p>
                  </div>
                </div>

                {/* Company & Role Column */}
                <div className="lg:col-span-9">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                       <span className="text-xl font-black uppercase text-black/40">{job.company}</span>
                       <span className="hidden md:block h-2 w-2 bg-black" />
                       <span className="text-xl font-black uppercase text-black/40">{job.location}</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none mb-8">
                      {job.role}
                    </h3>
                    
                    {/* Task Grid - High Scanability */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {job.tasks.map((task) => (
                        <div key={task} className="flex items-center gap-3 bg-[#F1F1F1] border-2 border-black p-3 hover:bg-[#A3E635] transition-colors group/task">
                          <div className="h-4 w-4 bg-black group-hover/task:bg-white transition-colors" />
                          <span className="text-xs font-black uppercase text-black">
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER SCALE */}
        <div className="mt-20 pt-8 border-t-[4px] border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs font-black uppercase text-black">System_Authenticated // User: Brian_Shiroe</span>
          <div className="flex gap-2">
             <div className="h-6 w-12 bg-black" />
             <div className="h-6 w-6 bg-[#A3E635]" />
             <div className="h-6 w-6 bg-white border-2 border-black" />
          </div>
        </div>
      </div>
    </section>
  );
}