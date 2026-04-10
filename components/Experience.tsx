"use client";
import { motion } from "framer-motion";

export function Experience() {
  const history = [
    {
      period: "SEP 2025 – PRESENT",
      company: "ITD INNOVATION",
      location: "DUBAI, UAE",
      role: "Web Developer & IT Specialist",
      status: "CURRENT",
      stack: "Wordpress / Shopify / Odoo ERP / HTML / CSS / Javascript",
      tasks: [
        "Wordpress Web Development",
        "E-Commerce Development",
        "Odoo ERP Implementation",
        "Shopify Development",
        "Graphics Design",
        "Digital & Social Media Marketing",
        "Google Tools",
        "Hosting & Website Management",
      ],
      color: "text-black",
    },
    {
      period: "MAY 2024 – AUG 2024",
      company: "DPWH - OLONGAPO",
      location: "PHILIPPINES",
      role: "PHP Developer & IT Support",
      status: "COMPLETED",
      stack: "HTML / CSS / Javascript / PHP / MySQL",
      tasks: [
        "Full-Stack Development",
        "PHP Development",
        "IT Assistance",
        "Hardware & Software Configurations",
      ],
      color: "text-zinc-400",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono border-b-4 border-black"
    >
      <div className="mx-auto max-w-6xl relative">
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-32">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-[2px] md:h-[3px] w-8 md:w-12 bg-black" />
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-zinc-400">
              Professional History
            </span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            Career_<span className="text-zinc-200">Timeline</span>
          </h2>
        </div>

        {/* --- TIMELINE GRID --- */}
        {/* Adjusted left margin on mobile to prevent clipping */}
        <div className="relative border-l-2 md:border-l-4 border-black ml-2 md:ml-0">
          {history.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-16 md:mb-24 last:mb-0 pl-6 md:pl-24 group"
            >
              {/* Timeline Marker - Scaled for Mobile */}
              <div className="absolute -left-[9px] md:-left-[14px] top-1.5 md:top-2 h-4 w-4 md:h-6 md:w-6 border-2 md:border-4 border-black bg-white flex items-center justify-center transition-transform group-hover:scale-125">
                <div
                  className={`h-1.5 w-1.5 md:h-2 md:w-2 ${index === 0 ? "bg-black" : "bg-zinc-200"}`}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Time & Status Column */}
                <div className="lg:col-span-3 flex flex-col items-start pt-1 md:pt-2">
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-black text-white mb-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                    <span className="text-[10px] md:text-xs font-black tracking-widest whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 ${job.color}`}>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                      {job.status}
                    </span>
                    {index === 0 && (
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 bg-black rounded-full animate-ping" />
                    )}
                  </div>
                  {job.stack && (
                    <div className="mt-3 md:mt-4 p-2 md:p-3 border-2 border-black/5 bg-zinc-50 w-full">
                      <span className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase leading-tight block">
                        Stack: {job.stack}
                      </span>
                    </div>
                  )}
                </div>

                {/* Company & Role Column */}
                <div className="lg:col-span-9">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <span className="text-xs md:text-sm font-black text-black uppercase tracking-widest">
                        {job.company}
                      </span>
                      <span className="text-zinc-300 font-bold hidden xs:inline">|</span>
                      <span className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[1.1] mb-6 md:mb-8 group-hover:text-zinc-600 transition-colors">
                      {job.role}
                    </h3>

                    {/* Responsibilities - Grid layout on mobile for better flow */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {job.tasks.map((task) => (
                        <span
                          key={task}
                          className="text-[9px] md:text-xs font-black uppercase border-2 border-black px-3 py-1.5 md:px-4 md:py-2 hover:bg-black hover:text-white transition-all cursor-default shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                        >
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

      {/* FOOTER SCALE - Stacked on mobile */}
      <div className="mx-auto max-w-6xl mt-20 md:mt-32 pt-8 md:pt-10 border-t-2 md:border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-black text-center md:text-left">
          BrianShiroe // Professional Experience History
        </span>
        <div className="flex gap-3 md:gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 md:h-4 md:w-4 border-2 border-black ${i < 3 ? "bg-black" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}