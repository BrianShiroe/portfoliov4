"use client";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Settings, 
  Globe, 
  Code2 
} from "lucide-react";

export function Services() {
  const services = [
    {
      id: "SV_01",
      title: "E-Commerce Systems",
      description: "High-conversion digital storefronts built for scale. From custom Shopify Liquid themes to headless React commerce solutions.",
      features: ["Shopify", "Next.js", "Payments"], // Shortened for mobile tag flow
      icon: ShoppingCart,
    },
    {
      id: "SV_02",
      title: "ERP & Logic (Odoo)",
      description: "Deep integration of Odoo Enterprise with your web presence to streamline inventory, CRM, and business automation.",
      features: ["Implementation", "Sync", "API"],
      icon: Settings,
    },
    {
      id: "SV_03",
      title: "Corporate Hubs",
      description: "Professional web systems for SMEs and firms. Focused on authority, lead generation, and multi-regional support.",
      features: ["WP", "Next.js", "Multilingual"],
      icon: Globe,
    },
    {
      id: "SV_04",
      title: "Custom Web Apps",
      description: "Specialized, high-speed applications designed for unique business logic and superior user performance.",
      features: ["React", "TS", "Vercel"],
      icon: Code2,
    },
  ];

  return (
    <section id="services" className="w-full bg-zinc-50 px-4 py-16 md:py-24 md:px-6 overflow-hidden font-mono">
      <div className="mx-auto max-w-6xl">
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[#00C950]" />
            <span className="text-[10px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 block ml-2">
              Service_Architecture
            </span>
            {/* Adjusted font size for mobile screens (text-4xl) */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Client_<span className="text-[#00C950]">Solutions</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] md:text-[12px] font-bold text-black uppercase tracking-widest opacity-70 md:opacity-100">
              Business Goals // Technical Execution
            </p>
          </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Neobrutalist Shadow - Adjusted translate for mobile to prevent overflow */}
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 md:group-hover:translate-x-3 md:group-hover:translate-y-3" />
                
                <div className="relative h-full border-[3px] md:border-4 border-black bg-white p-6 md:p-10 transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[#00C950] flex flex-col">
                  <div className="flex justify-between items-start mb-6 md:mb-8 gap-4">
                    <span className="text-[9px] md:text-[10px] font-black text-[#00C950] bg-black px-2 md:px-3 py-1 uppercase tracking-widest">
                      {service.id}
                    </span>
                    <div className="h-12 w-12 md:h-16 md:w-16 border-[3px] md:border-4 border-black flex items-center justify-center transition-all group-hover:bg-[#00C950] group-hover:border-black shrink-0">
                      <Icon className="h-6 w-6 md:h-8 md:w-8 transition-colors group-hover:text-black" />
                    </div>
                  </div>

                  {/* Responsive Heading */}
                  <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter mb-3 md:mb-4 transition-colors group-hover:text-[#00C950] leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs md:text-base mb-6 md:mb-8 leading-relaxed font-medium transition-colors group-hover:text-zinc-800">
                    {service.description}
                  </p>

                  {/* Features Tag Cloud */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-8 md:mb-10">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-[8px] md:text-[11px] font-black uppercase tracking-wider border-2 border-black/10 px-2 md:px-3 py-0.5 md:py-1 bg-zinc-50 transition-all group-hover:border-[#00C950] group-hover:bg-white whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Interaction Footer - Mobile optimized layout */}
                  <div className="mt-auto pt-6 border-t-2 border-zinc-100 flex flex-row justify-between items-center group-hover:border-[#00C950]/20">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#00C950] animate-pulse" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        Ready
                      </span>
                    </div>
                    <span className="text-[10px] md:text-[11px] font-black border-b-2 border-black transition-colors group-hover:text-[#00C950] group-hover:border-[#00C950] cursor-pointer uppercase">
                      Start ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-16 md:mt-20 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-5 w-1 md:h-6 md:w-1.5 ${i % 2 === 0 ? "bg-[#00C950]" : "bg-black"}`} />
              ))}
            </div>
            <p className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black">
              Fullstack // DXB
            </p>
          </div>
          <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Dubai, UAE // Global
          </p>
        </div>
      </div>
    </section>
  );
}