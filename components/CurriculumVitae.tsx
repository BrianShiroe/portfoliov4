"use client";
import React from "react";
import { motion } from "framer-motion";

export function CurriculumVitae() {
  const skills = [
    "Next.js / TypeScript", "Odoo ERP", "Fullstack Development", 
    "SEO & Analytics", "UI/UX Design", "Accounting Systems"
  ];

  const experience = [
    {
      company: "ITD INNOVATION",
      location: "Dubai, UAE",
      role: "Web Developer",
      date: "SEP 2025 – PRESENT",
      tasks: [
        "Architected multilingual eCommerce platforms with Odoo and Shopify.",
        "Integrated ERP accounting modules to streamline financial reporting.",
        "Optimized global search indexing and Google Merchant Center sync."
      ]
    },
    {
      company: "DPWH",
      location: "Olongapo, PH",
      role: "Developer Intern",
      date: "MAY 2024 – AUG 2024",
      tasks: [
        "Developed a custom PHP Physical Asset Management System.",
        "Managed backend migrations and network infrastructure support.",
        "Automated internal reporting for IT infrastructure audits."
      ]
    }
  ];

  return (
    <section id="cv" className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 font-sans border-t-8 border-black">
      <div className="mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b-8 border-black pb-10">
          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              Resu_<span className="text-zinc-200">me</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest text-black mt-4">
              Fullstack Developer & Odoo Specialist
            </p>
          </div>
          
          {/* DOWNLOAD BUTTON */}
          <button 
            onClick={() => window.print()} // Or link to your PDF: window.open('/path-to-cv.pdf')
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-black uppercase shadow-[8px_8px_0px_0px_rgba(212,212,216,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <span>Download Full CV</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-y-1 transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR --- */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase bg-black text-white px-3 py-1 w-fit">Key Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="border-2 border-black px-3 py-1.5 text-[10px] font-black uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-4 border-black p-6 bg-zinc-50">
              <h4 className="text-sm font-black uppercase mb-4 opacity-50">Education</h4>
              <p className="text-base font-black uppercase leading-tight">B.S. Computer Science</p>
              <p className="text-xs font-bold uppercase">Columban College // Cum Laude</p>
            </div>
          </aside>

          {/* --- MAIN EXPERIENCE --- */}
          <main className="lg:col-span-8 space-y-12">
            {experience.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-4 border-black pl-6 md:pl-10"
              >
                <div className="mb-4">
                  <span className="text-xs font-black bg-zinc-100 px-2 py-1 uppercase">{job.date}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mt-2">
                    {job.role}
                  </h3>
                  <p className="text-lg font-bold text-zinc-400 uppercase italic">@ {job.company}</p>
                </div>

                <ul className="space-y-3">
                  {job.tasks.map((task, idx) => (
                    <li key={idx} className="text-sm text-black font-bold uppercase leading-tight flex items-start gap-3">
                      <span className="h-2 w-2 bg-black mt-1.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}