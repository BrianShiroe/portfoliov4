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
      className="relative w-full bg-white py-24 px-4 md:px-6 overflow-hidden font-mono border-b-4 border-black"
    >
      <div className="mx-auto max-w-6xl relative">
        {/* --- HEADER --- */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[3px] w-12 bg-black" />
            <span className="text-[12px] font-black uppercase tracking-widest text-zinc-400">
              Professional History
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            Career_<span className="text-zinc-200">Timeline</span>
          </h2>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="relative border-l-4 border-black ml-4 md:ml-0">
          {history.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-24 last:mb-0 pl-10 md:pl-24 group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[14px] top-2 h-6 w-6 border-4 border-black bg-white flex items-center justify-center transition-transform group-hover:scale-125">
                <div
                  className={`h-2 w-2 ${index === 0 ? "bg-black" : "bg-zinc-200"}`}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Time & Status Column */}
                <div className="lg:col-span-3 flex flex-col items-start pt-2">
                  <div className="px-4 py-2 bg-black text-white mb-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                    <span className="text-xs font-black tracking-widest whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 ${job.color}`}>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {job.status}
                    </span>
                    {index === 0 && (
                      <span className="h-2 w-2 bg-black rounded-full animate-ping" />
                    )}
                  </div>
                  {job.stack && (
                    <div className="mt-4 p-3 border-2 border-black/5 bg-zinc-50 w-full">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase leading-none">
                        Stack: {job.stack}
                      </span>
                    </div>
                  )}
                </div>

                {/* Company & Role Column */}
                <div className="lg:col-span-9">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-black text-black uppercase tracking-widest">
                        {job.company}
                      </span>
                      <span className="text-zinc-300 font-bold">|</span>
                      <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none mb-8 group-hover:text-zinc-600 transition-colors">
                      {job.role}
                    </h3>

                    {/* Responsibilities */}
                    <div className="flex flex-wrap gap-3">
                      {job.tasks.map((task) => (
                        <span
                          key={task}
                          className="text-[10px] md:text-xs font-black uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all cursor-default shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
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

      {/* FOOTER SCALE */}
      <div className="mx-auto max-w-6xl mt-32 pt-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-black">
          BrianShiroe // Professional Experience History
        </span>
        <div className="flex gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-4 w-4 border-2 border-black ${i < 3 ? "bg-black" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
