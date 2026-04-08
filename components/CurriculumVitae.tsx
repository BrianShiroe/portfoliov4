"use client";
import { motion } from "framer-motion";

export function CurriculumVitae() {
  const skills = {
    hard: ["Web & eCommerce", "Odoo ERP", "Accounting", "SEO / Google Tools", "Graphic Design", "AI Tools"],
    soft: ["Problem-Solving", "Collaboration", "Work Ethic", "Communication"]
  };

  const experience = [
    {
      company: "ITD INNOVATION",
      location: "Dubai, UAE",
      role: "Web Developer & Digital Marketing",
      date: "SEP 2025 – PRESENT",
      details: [
        "Architected multilingual websites (Arabic/English) using Odoo, WordPress, and Shopify with a focus on SEO and responsive design.",
        "End-to-end eCommerce management including product architecture and Hostinger domain/DNS configuration.",
        "Executed accounting operations within Odoo ERP, managing vendor bills, expenses, and financial reporting.",
        "Integrated Odoo marketing automation and managed indexing via Google Search Console and Merchant Center.",
        "Produced digital content and social media strategies to drive brand engagement."
      ]
    },
    {
      company: "DPWH",
      location: "Olongapo, PH",
      role: "PHP Web Developer & IT Support Intern",
      date: "MAY 2024 – AUG 2024",
      details: [
        "Developed a custom Physical Asset Management System using PHP to streamline internal tracking.",
        "Optimized backend data migration processes while maintaining 100% data integrity and security.",
        "Provided technical infrastructure support, including workstation configuration and hardware maintenance.",
        "Assisted in IT audit preparation and technical document management."
      ]
    }
  ];

  return (
    <section className="relative w-full bg-[#fcfcfc] py-16 md:py-24 px-4 md:px-6 font-mono border-t-2 border-black overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b-4 border-black pb-10">
          <div>
            <div className="flex items-center gap-2 mb-4 text-green-600">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">System_Online // Dubai_Node</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-black leading-none">
              C_<span className="text-zinc-200">V</span>
            </h2>
          </div>
          
          <div className="text-left md:text-right space-y-1">
            <h1 className="text-2xl font-black uppercase text-black">Brian Haw</h1>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">Fullstack Developer + Odoo Specialist</p>
            <div className="flex md:justify-end gap-3 pt-2">
              <span className="h-1 w-12 bg-black" />
              <span className="h-1 w-4 bg-zinc-200" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT SIDE: THE SPECS --- */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Contact Module */}
            <div className="space-y-2 border-l-2 border-black pl-4">
              <span className="text-[9px] font-black text-zinc-300 uppercase block tracking-widest mb-4">// Contact_Protocols</span>
              <p className="text-[11px] font-bold text-black uppercase tracking-tight">T: +971 50 359 2133</p>
              <p className="text-[11px] font-bold text-black uppercase tracking-tight">E: Brianshiroe@gmail.com</p>
              <p className="text-[11px] font-bold text-green-600 uppercase tracking-tight italic">Brianshiroe.odoo.com</p>
            </div>

            {/* Skills Matrix */}
            <div className="bg-black p-6 text-white shadow-[8px_8px_0px_0px_rgba(228,228,231,1)]">
              <h3 className="text-[10px] font-black uppercase mb-6 tracking-[0.2em] border-b border-white/20 pb-2">Technical_Matrix</h3>
              <div className="space-y-4">
                {skills.hard.map(skill => (
                  <div key={skill} className="flex justify-between items-center group">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 group-hover:text-white transition-colors">{skill}</span>
                    <div className="h-[1px] flex-grow mx-2 bg-zinc-800" />
                    <span className="text-[8px] font-black text-zinc-600">L_01</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Record */}
            <div className="space-y-4 pt-4">
              <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest">// Education_Archive</span>
              <div className="relative group">
                <h4 className="text-xs font-black uppercase text-black leading-tight">Bachelor of Computer Science</h4>
                <p className="text-[10px] font-bold text-zinc-400 uppercase">Columban College, PH (2021-2025)</p>
                <div className="mt-4 flex flex-col gap-1.5">
                  <span className="text-[9px] font-black text-black bg-zinc-100 px-2 py-0.5 w-fit">🏆 CUM LAUDE</span>
                  <span className="text-[9px] font-black text-zinc-400 border border-zinc-200 px-2 py-0.5 w-fit uppercase">Best Thesis Awardee</span>
                </div>
              </div>
            </div>
          </aside>

          {/* --- RIGHT SIDE: THE LOGS --- */}
          <main className="lg:col-span-8">
            <div className="space-y-16">
              {experience.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Deployment Index */}
                  <div className="absolute -left-4 md:-left-8 top-0 text-[8px] font-black text-zinc-200 rotate-[-90deg] origin-top-right uppercase">
                    MOD_{2-i}
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-black bg-zinc-100 px-2 py-0.5">{job.date}</span>
                      <span className="text-[10px] font-bold text-zinc-300">/</span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase">{job.location}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-tight">
                      {job.role}
                    </h3>
                    <p className="text-xs font-bold text-zinc-500 uppercase mt-1">@ {job.company}</p>
                  </div>

                  <ul className="space-y-4 max-w-3xl">
                    {job.details.map((detail, idx) => (
                      <li key={idx} className="text-[11px] md:text-xs text-zinc-600 font-medium uppercase leading-relaxed flex items-start gap-3">
                        <span className="text-black font-black mt-1 opacity-20">[{idx}]</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </main>
        </div>

        {/* --- SYSTEM FOOTER --- */}
        <div className="mt-24 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">
            Authenticated_Archive // Brian_Haw_2026
          </p>
          <div className="flex gap-4">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="h-1.5 w-1.5 bg-black rotate-45" />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}