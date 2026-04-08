"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="relative w-full bg-zinc-50 py-24 px-4 md:px-6 overflow-hidden font-mono border-t-4 border-black">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="text-[12rem] font-black leading-none uppercase">Profile</div>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: SYSTEM DATA --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
                <div className="h-3 w-3 bg-red-500 rounded-full" />
                <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                <div className="h-3 w-3 bg-green-500 rounded-full" />
                <span className="text-[10px] font-black ml-auto uppercase tracking-tighter">System_Identity</span>
              </div>
              
              <ul className="space-y-4 text-[11px] uppercase font-bold">
                <li className="flex justify-between">
                  <span className="text-zinc-400">Alias:</span>
                  <span>Brian Haw // Shiroe</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Origin:</span>
                  <span>Olongapo, PH</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Education:</span>
                  <span>CompSci_Graduate</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Deployment:</span>
                  <span>UAE_DXB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">Active_Time:</span>
                  <span className="text-green-600">7+ Months</span>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block opacity-20 space-y-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex gap-1">
                  <div className={`h-1 flex-grow ${i % 3 === 0 ? 'bg-black' : 'bg-zinc-300'}`} />
                  <div className="h-1 w-4 bg-black" />
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE NARRATIVE --- */}
          <div className="lg:col-span-8">
            <div className="relative">
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
                  I am a Web Developer based in Dubai, bridging the gap between <span className="text-black underline decoration-2">Computer Science</span> foundations and high-performance digital products. 
                </p>

                <div className="space-y-4 border-l-4 border-black pl-6 md:pl-8 italic text-sm md:text-base font-medium text-zinc-500">
                  <p>
                    "My passion exists at the intersection of web and game development. I am constantly seeking a future where I can fuse the structural logic of a site with the immersive mechanics of a game."
                  </p>
                  <p>
                    "I have fully embraced the era of AI, incorporating neural tools into my workflow to accelerate development and solve complex architectural puzzles."
                  </p>
                </div>

                {/* FUN FACT TERMINAL */}
                <div className="mt-12 bg-black text-green-500 p-6 font-mono text-xs leading-relaxed rounded-sm shadow-xl">
                  <div className="flex gap-2 mb-4 opacity-50">
                    <span className="h-2 w-2 bg-green-500 rounded-full" />
                    <span>CMD_PROMPT // FUN_FACT</span>
                  </div>
                  <p className="mb-2 text-white">
                    <span className="text-green-500">brian@root:~$</span> run curiosity_check
                  </p>
                  <p className="text-green-400">
                    [SYSTEM]: Interesting data point found... <br />
                    I learned how to operate a computer before I could even read. 
                    This career isn't just a choice—it's a fundamental hardware requirement. 
                    I'm essentially "stuck" in front of this screen, and I wouldn't have it any other way.
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

        {/* --- BOTTOM DECORATIVE STRIP --- */}
        <div className="mt-20 border-t border-black/10 pt-8 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-40">
           <div className="flex items-center gap-4">
              <span className="text-[9px] font-black uppercase tracking-widest">Aura_Level: Max</span>
              <div className="h-1 w-12 bg-black" />
           </div>
           <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest">
              <span>PH_CS_GRAD</span>
              <span className="text-zinc-300">|</span>
              <span>DXB_DEV</span>
              <span className="text-zinc-300">|</span>
              <span>AI_ENABLED</span>
           </div>
        </div>
      </div>
    </section>
  );
}