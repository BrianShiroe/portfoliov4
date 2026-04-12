"use client";
import { motion } from "framer-motion";

export function About() {
  const awards = [
    { title: "Cum Laude", subtitle: "Academic Excellence", icon: "★" },
    { title: "Best Thesis", subtitle: "Research & Analysis", icon: "◆" },
    { title: "Leadership", subtitle: "Project Coordination", icon: "▲" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-white py-24 px-4 md:px-6 overflow-hidden font-mono border-t-4 border-black scroll-mt-20 selection:bg-[#00C950] selection:text-white"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: PROFESSIONAL DATA --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
                <div className="h-3 w-3 bg-[#00C950] rounded-full shadow-[0_0_10px_#00C950]" />
                <span className="text-[14px] font-black uppercase tracking-tight text-black">
                  Professional Profile
                </span>
              </div>
              <ul className="space-y-3 text-[14px] uppercase font-bold">
                <li className="flex justify-between">
                  <span className="text-zinc-400">Name:</span>
                  <span className="text-black">Brian Haw</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Education:</span>
                  <span className="text-black">Computer Science</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-black">Dubai, UAE</span>
                </li>
              </ul>
            </div>

            {/* ACCOLADES BLOCK */}
            <div className="bg-black text-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] font-black tracking-widest text-white uppercase">
                  Achievements
                </span>
                <span className="text-[12px] font-black text-zinc-400">
                  RECOGNIZED
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-700 bg-zinc-900 group-hover:border-[#00C950] transition-colors group-hover:bg-zinc-800">
                      <span className="text-xl group-hover:text-[#00C950] transition-colors">{award.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-black uppercase tracking-tight transition-colors group-hover:text-zinc-100">
                        {award.title}
                      </span>
                      <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                        {award.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
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
              <div className="inline-block bg-black text-white px-4 py-1.5 text-[13px] font-black uppercase tracking-widest mb-4">
                Professional Bio
              </div>

              {/* H2 Span Updated with #00C950 */}
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
                Creating <br />
                <span className="text-[#00C950]">Digital_Solutions</span>
              </h2>

              <p className="text-lg md:text-xl font-bold text-zinc-700 leading-relaxed uppercase">
                IT Professional and Web Developer focused on scaling businesses
                through high-impact online platforms and optimized digital
                management.
              </p>

              <div className="space-y-6 border-l-4 border-black pl-6 md:pl-8 text-base md:text-lg font-medium text-zinc-500 italic">
                <p>
                  "Dubai-based expert in high-performance e-commerce and custom
                  web development. I extend business capabilities beyond the
                  frontend by implementing Odoo ERP systems to automate and
                  streamline core operations."
                </p>
                <p>
                  "I bridge the gap between creative design and technical
                  execution, engineering intuitive user experiences that balance
                  aesthetic appeal with robust, practical functionality."
                </p>
              </div>

              {/* FOOTNOTE with #00C950 Shadow */}
              <div className="mt-12 bg-white border-2 border-black p-6 font-mono text-sm leading-relaxed shadow-[8px_8px_0px_0px_#00C950]">
                <div className="flex gap-2 mb-4">
                  <span className="h-2 w-2 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
                  <span className="text-[12px] font-black uppercase text-black">
                    Work Ethic
                  </span>
                </div>
                <p className="text-zinc-800 font-bold uppercase">
                  Dedicated to exceeding client expectations through transparent
                  communication and meticulous detail. I deliver reliable,
                  data-driven solutions designed for measurable success and
                  long-term satisfaction.
                </p>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-[#00C950] ml-1 translate-y-1"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}