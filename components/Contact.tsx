"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactData = [
    { label: "PHONE", value: "+971 50 359 2133", type: "tel" },
    { label: "EMAIL", value: "Brianshiroe@gmail.com", type: "mailto" },
    { label: "LOCATION", value: "Dubai, UAE", type: "map" },
  ];

  return (
    <section id="contact" className="relative w-full bg-[#F1F1F1] py-24 px-4 md:px-6 font-sans border-t-[6px] border-black overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* --- NEOBRUTALIST HEADER --- */}
        <div className="mb-20 border-b-[6px] border-black pb-12">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.8]">
            LET'S <br />
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>CONNECT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- CONTACT NODES --- */}
          <div className="lg:col-span-7 space-y-6">
            {contactData.map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#A3E635] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-black text-black/40 tracking-[0.2em] uppercase block mb-1">
                    {item.label} // 0{i + 1}
                  </span>
                  <a 
                    href={item.type === "map" ? "#" : `${item.type}:${item.value}`}
                    className="text-2xl md:text-3xl font-black text-black uppercase hover:text-[#00E676] transition-colors break-all"
                  >
                    {item.value}
                  </a>
                </div>
                
                {item.type !== "map" && (
                  <button 
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="h-fit bg-[#FFD100] border-[3px] border-black px-4 py-2 text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-black active:text-white"
                  >
                    {copied === item.label ? "COPIED" : "COPY"}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* --- STATUS MODULE --- */}
          <div className="lg:col-span-5 bg-[#A3E635] border-[4px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black uppercase mb-8 border-b-4 border-black pb-2">Status_Check</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start gap-4">
                <span className="text-xs font-black text-black uppercase opacity-60">Availability</span>
                <span className="text-sm font-black text-black uppercase bg-white border-2 border-black px-2 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#00E676] rounded-full animate-pulse border border-black" />
                  Open for Projects
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs font-black text-black uppercase opacity-60">Timezone</span>
                <span className="text-sm font-black uppercase text-black">Dubai (UTC+4)</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs font-black text-black uppercase opacity-60">SLA</span>
                <span className="text-sm font-black uppercase text-black underline decoration-4">{"< 24h Response"}</span>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="mailto:Brianshiroe@gmail.com"
                className="flex items-center justify-center gap-3 w-full bg-black text-white py-5 text-sm font-black uppercase tracking-[0.2em] border-2 border-black hover:bg-white hover:text-black transition-all group"
              >
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* --- FOOTER SCALE --- */}
        <div className="mt-24 pt-8 border-t-[4px] border-black flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
             <div className="h-8 w-8 bg-black" />
             <p className="text-xs font-black uppercase tracking-widest text-black">
               Waiting_For_Response...
             </p>
           </div>
           
           <div className="flex gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`h-8 w-2 bg-black ${i % 3 === 0 ? 'bg-[#FFD100]' : ''}`} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}