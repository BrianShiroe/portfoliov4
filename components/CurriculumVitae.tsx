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
    <section id="cv" className="relative w-full bg-[#F1F1F1] py-24 px-4 md:px-6 font-sans border-t-[6px] border-black overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* --- NEOBRUTALIST HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 border-b-[6px] border-black pb-12">
          <div>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.8]">
              RESUME <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>HISTORY</span>
            </h2>
          </div>
          
          <div className="lg:text-right space-y-2">
            <h1 className="text-3xl md:text-4xl font-black uppercase text-black leading-none">Brian Haw</h1>
            <p className="text-sm font-black text-black/50 uppercase tracking-widest">Fullstack Developer — Odoo Specialist</p>
            <div className="flex lg:justify-end gap-2 pt-2">
              <div className="h-6 w-12 bg-[#FFD100] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" />
              <div className="h-6 w-6 bg-black" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT SIDE: SPECS --- */}
          <aside className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            
            {/* Contact Card */}
            <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black uppercase mb-6 border-b-2 border-black pb-2">Direct Contact</h3>
              <div className="space-y-4 text-sm font-black uppercase">
                <div className="flex flex-col">
                  <span className="text-[10px] text-black/40">Phone</span>
                  <span>+971 50 359 2133</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-black/40">Email</span>
                  <span className="break-all">Brianshiroe@gmail.com</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-black/40">Portfolio</span>
                  <span className="text-[#00E676]">Brianshiroe.odoo.com</span>
                </div>
              </div>
            </div>

            {/* Technical Skills - Tag Style */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase px-2">Skill Matrix</h3>
              <div className="flex flex-wrap gap-2">
                {skills.hard.map(skill => (
                  <span key={skill} className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#A3E635] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Block */}
            <div className="bg-[#FFD100] border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black uppercase mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase leading-tight">Bachelor of Computer Science</h4>
                <p className="text-xs font-bold text-black/60 uppercase">Columban College (2021-2025)</p>
                <div className="pt-4 flex flex-col gap-2">
                  <span className="text-xs font-black bg-white border-2 border-black px-2 py-1 w-fit uppercase">🏆 CUM LAUDE</span>
                  <span className="text-xs font-black bg-white border-2 border-black px-2 py-1 w-fit uppercase">Best Thesis</span>
                </div>
              </div>
            </div>
          </aside>

          {/* --- RIGHT SIDE: EXPERIENCE --- */}
          <main className="lg:col-span-8 order-1 lg:order-2">
            <div className="space-y-16">
              {experience.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border-[4px] border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">{job.date}</span>
                      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mt-4 leading-none">
                        {job.role}
                      </h3>
                      <p className="text-lg font-black text-[#00E676] uppercase mt-2" style={{ WebkitTextStroke: '1px black' }}>@ {job.company}</p>
                    </div>
                    <div className="text-right">
                       <span className="text-xs font-black uppercase text-black/40">{job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-sm md:text-base font-bold text-black uppercase leading-tight">
                        <div className="mt-1 h-3 w-3 bg-[#A3E635] border-2 border-black shrink-0" />
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
        <div className="mt-24 pt-8 border-t-[4px] border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-black uppercase tracking-widest text-black/40">
            Document Registry: BH_CV_2026.V2
          </p>
          <div className="flex gap-2">
             {[...Array(5)].map((_, i) => (
               <div key={i} className="h-4 w-4 bg-black" />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}