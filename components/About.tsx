"use client";
import { motion } from "framer-motion";

export function About() {
  const awards = [
    { title: "Cum Laude", subtitle: "Academic Excellence", icon: "★" },
    { title: "Best Thesis", subtitle: "Research Mastery", icon: "◆" },
    { title: "Leadership", subtitle: "Team Management", icon: "▲" },
  ];

  const details = [
    { label: "Role", value: "Web Developer" },
    { label: "Degree", value: "BS Computer Science" },
    { label: "Base", value: "Dubai, UAE" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#F1F1F1] py-24 px-4 md:px-6 overflow-hidden font-sans border-t-[6px] border-black scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT COLUMN: SYSTEM DATA --- */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Identity Card - Neobrutalist Style */}
            <div className="border-[4px] border-black bg-[#FFD100] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-6 border-b-[3px] border-black pb-2">
                Personal Specs
              </h3>
              <div className="space-y-4">
                {details.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-xs font-black uppercase text-black/60">{item.label}</span>
                    <span className="text-xl font-black uppercase">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accolades Grid - Replacing Terminal Style */}
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase px-2">Key Accolades</h3>
              <div className="grid grid-cols-1 gap-4">
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className="flex items-center gap-4 bg-white border-[3px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-[#A3E635] text-2xl">
                      {award.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-black uppercase leading-none">
                        {award.title}
                      </span>
                      <span className="text-xs font-bold text-black/50 uppercase">
                        {award.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE NARRATIVE --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block bg-black text-white px-6 py-2 text-sm font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_#00E676]">
                Background.log
              </div>

              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                SOLVING <br />
                <span className="text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>
                  COMPLEX
                </span> <br />
                PROBLEMS.
              </h2>

              <p className="text-xl md:text-2xl font-black text-black leading-tight uppercase max-w-2xl">
                I am a developer based in Dubai, focused on building technical foundations that scale.
              </p>

              <div className="space-y-6 text-lg font-bold text-black/70 leading-snug">
                <p className="border-l-[6px] border-black pl-6">
                  I specialize in engineering high-performance web products. To me,
                  development is about building clean, scalable architecture that
                  solves real business needs without unnecessary friction.
                </p>
                <p className="border-l-[6px] border-[#00E676] pl-6">
                  I integrate advanced automation and AI-driven workflows to 
                  accelerate production, ensuring every project benefits from 
                  the most efficient modern tooling available.
                </p>
              </div>

              {/* Punchy Quote Block */}
              <div className="mt-12 bg-white border-[4px] border-black p-8 shadow-[10px_10px_0px_0px_#A3E635]">
                <p className="text-xl font-black italic uppercase leading-tight">
                  "I learned to operate a computer before I could even read. 
                  Building systems isn't just a job—it's how I think."
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}