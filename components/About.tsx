"use client";
import { motion } from "framer-motion";

export function About() {
  const awards = [
    { title: "Cum Laude", subtitle: "Academic_Excellence", icon: "★" },
    { title: "Best Thesis", subtitle: "Research_Mastery", icon: "◆" },
    { title: "Leadership", subtitle: "Guild_Management", icon: "▲" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-zinc-50 py-24 px-4 md:px-6 overflow-hidden font-mono border-t-4 border-black scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- LEFT COLUMN: DATA & VISUAL AWARDS --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
                <div className="h-3 w-3 bg-black rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-tighter">
                  System_Identity
                </span>
              </div>
              <ul className="space-y-3 text-[11px] uppercase font-bold">
                <li className="flex justify-between">
                  <span className="text-zinc-400">Alias:</span>
                  <span>Brian Shiroe</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Education:</span>
                  <span>BSCS_Grad</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Node:</span>
                  <span>Dubai_UAE</span>
                </li>
              </ul>
            </div>

            {/* AWARDS TERMINAL - HIGH VISIBILITY BLOCK */}
            <div className="bg-black text-white p-6 shadow-[8px_8px_0px_0px_rgba(200,200,200,1)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-black tracking-[0.3em] text-white uppercase">
                  System_Accolades
                </span>
                <span className="text-[9px] font-black text-green-500">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.title}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-800 bg-zinc-900 group-hover:border-white transition-colors">
                      <span className="text-lg">{award.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-black uppercase tracking-tight group-hover:text-green-400 transition-colors">
                        {award.title}
                      </span>
                      <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                        {award.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative scanline effect */}
              <div className="mt-6 h-1 w-full bg-zinc-900 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="h-full w-1/3 bg-zinc-700"
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE NARRATIVE --- */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-block bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4">
                Decrypted_Bio.log
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
                Stuck in the <br />
                <span className="text-zinc-300">Digital_Loop</span>
              </h2>

              <p className="text-base md:text-lg font-bold text-zinc-600 leading-relaxed uppercase">
                I am a Web Developer based in Dubai, bridging the gap between{" "}
                <span className="text-black underline decoration-2">
                  Computer Science
                </span>{" "}
                foundations and high-performance digital products.
              </p>

              <div className="space-y-4 border-l-4 border-black pl-6 md:pl-8 text-sm md:text-base font-medium text-zinc-500">
                <p>
                  "I focus on engineering high-performance web products. To me,
                  development is an immersive process of building clean,
                  scalable architecture."
                </p>
                <p>
                  "I am a heavy proponent of AI integration, utilizing neural
                  tools throughout my workflow and developing custom solutions
                  when existing models don't meet the project's requirements."
                </p>
              </div>

              {/* FUN FACT TERMINAL */}
              <div className="mt-12 bg-black text-green-500 p-6 font-mono text-xs leading-relaxed rounded-sm shadow-xl border-t-2 border-green-500/30">
                <div className="flex gap-2 mb-4 opacity-50">
                  <span className="h-2 w-2 bg-green-500 rounded-full" />
                  <span>CMD_PROMPT // FUN_FACT</span>
                </div>
                <p className="mb-2 text-white">
                  <span className="text-green-500">brian@root:~$</span> run
                  curiosity_check
                </p>
                <p className="text-green-400">
                  [SYSTEM]: Interesting data point found... <br />I learned how
                  to operate a computer before I could even read. This career
                  isn't just a choice—it's a fundamental hardware requirement.
                </p>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-green-500 ml-1 translate-y-1"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
