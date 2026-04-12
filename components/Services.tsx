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
      features: ["Shopify", "Next.js", "Payment Gateways"],
      icon: ShoppingCart,
    },
    {
      id: "SV_02",
      title: "ERP & Logic (Odoo)",
      description: "Deep integration of Odoo Enterprise with your web presence to streamline inventory, CRM, and business automation.",
      features: ["Odoo Implementation", "Module Sync", "API Logic"],
      icon: Settings,
    },
    {
      id: "SV_03",
      title: "Corporate & Brand Hubs",
      description: "Professional web systems for SMEs and firms. Focused on authority, lead generation, and multi-regional support.",
      features: ["WordPress", "Next.js", "Multilingual (AR/EN)"],
      icon: Globe,
    },
    {
      id: "SV_04",
      title: "Custom Web Applications",
      description: "Specialized, high-speed applications designed for unique business logic and superior user performance.",
      features: ["React.js", "TypeScript", "Vercel Optimization"],
      icon: Code2,
    },
  ];

  return (
    <section id="services" className="w-full bg-zinc-50 px-4 py-24 md:px-6 overflow-hidden font-mono">
      <div className="mx-auto max-w-6xl">
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[#00C950]" />
            <span className="text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 md:mb-4 ml-2">
              Service_Architecture
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Client_<span className="text-[#00C950]">Solutions</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[12px] font-bold text-black uppercase tracking-widest">
              Business Goals // Technical Execution
            </p>
          </div>
        </div>

        {/* --- SERVICES GRID (2x2) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                {/* Neobrutalist Shadow */}
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                
                <div className="relative h-full border-4 border-black bg-white p-8 md:p-10 transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[#00C950]">
                  <div className="flex justify-between items-start mb-8 gap-4">
                    <span className="text-[10px] font-black text-[#00C950] bg-black px-3 py-1 uppercase tracking-widest">
                      {service.id}
                    </span>
                    <div className="h-16 w-16 border-4 border-black flex items-center justify-center transition-all group-hover:bg-[#00C950] group-hover:border-black shrink-0">
                      <Icon className="h-8 w-8 transition-colors group-hover:text-black" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 transition-colors group-hover:text-[#00C950]">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm md:text-base mb-8 leading-relaxed font-medium transition-colors group-hover:text-zinc-800">
                    {service.description}
                  </p>

                  {/* Features Tag Cloud */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-[9px] md:text-[11px] font-black uppercase tracking-wider border-2 border-black/10 px-3 py-1 bg-zinc-50 transition-all group-hover:border-[#00C950] group-hover:bg-white"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Interaction Footer */}
                  <div className="mt-auto pt-6 border-t-2 border-zinc-100 flex justify-between items-center group-hover:border-[#00C950]/20">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#00C950] animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        Deployment_Ready
                      </span>
                    </div>
                    <span className="text-[11px] font-black border-b-2 border-black transition-colors group-hover:text-[#00C950] group-hover:border-[#00C950] cursor-pointer uppercase">
                      Start_Project ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-20 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-6 w-1.5 ${i % 2 === 0 ? "bg-[#00C950]" : "bg-black"}`} />
              ))}
            </div>
            <p className="text-[12px] font-black uppercase tracking-widest text-black">
              Fullstack // ERP Specialist // DXB
            </p>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Based in Dubai, UAE // Global Availability
          </p>
        </div>
      </div>
    </section>
  );
}