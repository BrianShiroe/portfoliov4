"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Clients() {
  const logos = [
    "/logos/500x250_logo_1.png",
    "/logos/500x250_logo_2.png",
    "/logos/500x250_logo_3.png",
    "/logos/500x250_logo_4.png",
    "/logos/500x250_logo_5.png",
    "/logos/500x250_logo_6.png",
    "/logos/500x250_logo_7.png",
    "/logos/500x250_logo_8.png",
    "/logos/500x250_logo_9.png",
  ];

  return (
    <section id="clients" className="relative w-full bg-white py-24 px-4 md:px-6 font-mono overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="mx-auto max-w-7xl relative">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-black" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">
              Verified Partnerships
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            Client_<span className="text-zinc-100">Index</span>
          </h2>
        </div>

        {/* --- 5-COLUMN LOGO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {logos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: "circOut" }}
              className="group relative"
            >
              {/* The "Shadow" Box */}
              <div className="absolute inset-0 bg-black translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200" />
              
              {/* The Main Card */}
              <div className="relative flex items-center justify-center aspect-[500/250] border-2 border-black bg-white p-3 md:p-4 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 overflow-hidden">
                
                {/* ID Tag */}
                <div className="absolute top-1.5 left-2 text-[7px] font-black text-zinc-300 uppercase group-hover:text-black transition-colors z-10">
                  REF_0{i + 1}
                </div>

                {/* Logo Wrapper - Slightly zoomed by default (scale-110) */}
                <div className="relative w-full h-full opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 scale-110 group-hover:scale-125">
                  <Image
                    src={src}
                    alt={`Partner Logo ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Scanline Hover Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
              Middle East Operational Network
            </p>
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`h-3 w-[2px] bg-black ${i % 4 === 0 ? 'h-5' : ''}`} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}