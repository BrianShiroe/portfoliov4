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
    <section id="contact" className="relative w-full bg-white py-24 px-4 md:px-6 font-mono border-t-2 border-black overflow-hidden">
      <div className="mx-auto max-w-5xl">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-black" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Direct Contact</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            Get_In_<span className="text-zinc-100">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* --- CONTACT DETAILS --- */}
          <div className="space-y-8">
            {contactData.map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-1 border-l-2 border-zinc-100 hover:border-black pl-6 transition-colors"
              >
                <span className="text-xs font-black text-zinc-400 tracking-widest uppercase">
                  {item.label} // 0{i + 1}
                </span>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={item.type === "map" ? "#" : `${item.type}:${item.value}`}
                    className="text-xl md:text-2xl font-black text-black uppercase hover:text-zinc-500 transition-colors"
                  >
                    {item.value}
                  </a>
                  
                  {item.type !== "map" && (
                    <button 
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="text-[12px] font-black border border-black px-3 py-1.5 uppercase hover:bg-black hover:text-white transition-all active:scale-95 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                    >
                      {copied === item.label ? "Copied!" : "Copy"}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- AVAILABILITY STATUS --- */}
          <div className="bg-zinc-50 border-2 border-black p-8 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute top-2 right-2 flex gap-1">
               <div className="h-1.5 w-1.5 bg-black rounded-full" />
               <div className="h-1.5 w-1.5 bg-black rounded-full" />
            </div>
            
            <h3 className="text-sm font-black uppercase mb-6 tracking-tighter">Current Status</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-black/5 pb-2">
                <span className="text-xs font-bold text-zinc-400 uppercase">Availability</span>
                <span className="text-xs font-black text-green-600 uppercase flex items-center gap-2">
                  <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
                  Accepting Projects
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-black/5 pb-2">
                <span className="text-xs font-bold text-zinc-400 uppercase">Timezone</span>
                <span className="text-xs font-black uppercase">Dubai (UTC+4)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-zinc-400 uppercase">Average Response</span>
                <span className="text-xs font-black uppercase text-black italic">Under 24 Hours</span>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="mailto:Brianshiroe@gmail.com"
                className="block w-full text-center bg-black text-white py-4 text-sm font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-[4px_4px_0px_0px_rgba(161,161,170,1)]"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* --- DECORATIVE RULER --- */}
        <div className="mt-24 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-zinc-400">
              Professional Portfolio // 2026
            </p>
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`h-4 w-[2px] bg-black ${i % 4 === 0 ? 'h-6' : ''}`} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}