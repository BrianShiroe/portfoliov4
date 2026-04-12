"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Settings, Globe, Code2 } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "SV_01",
      title: "E-Commerce",
      description:
        "High-conversion digital storefronts built for scale. From Shopify to headless commerce.",
      features: ["Sell More", "Grow Sales"],
      icon: ShoppingCart,
      action: "Build Store ↗",
    },
    {
      id: "SV_02",
      title: "ERP & Odoo",
      description:
        "Deep integration of Odoo Enterprise to streamline inventory and business automation.",
      features: ["Automate", "Save Time"],
      icon: Settings,
      action: "Integrate Now ↗",
    },
    {
      id: "SV_03",
      title: "Corporate",
      description:
        "Professional web systems for firms. Focused on authority and lead generation.",
      features: ["Reach Clients", "Build Trust"],
      icon: Globe,
      action: "Grow Your Brand ↗",
    },
    {
      id: "SV_04",
      title: "Web Apps",
      description:
        "Specialized applications designed for unique logic and superior performance.",
      features: ["Boost Speed", "Scale Easy"],
      icon: Code2,
      action: "Develop App ↗",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-zinc-50 py-16 md:py-24 overflow-hidden font-mono"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[#00C950]" />
            <span className="text-[10px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 block ml-2">
              Service_Architecture
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Expert_<span className="text-[#00C950]">Services</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[12px] font-bold text-black uppercase tracking-widest leading-tight">
              Business Goals // <br /> Technical Execution
            </p>
          </div>
        </div>

        {/* --- HORIZONTAL ROW (Mobile Swipeable / Desktop Row) --- */}
        {/* Added flex-nowrap to prevent column wrapping on any screen size */}
        <div className="flex flex-nowrap overflow-x-auto pb-10 pt-4 gap-6 no-scrollbar snap-x snap-mandatory">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // min-w-[300px] ensures cards don't squish on mobile
                // md:min-w-0 md:flex-1 lets them distribute evenly on desktop
                className="group relative min-w-[300px] md:min-w-0 md:flex-1 snap-center shrink-0 md:shrink"
              >
                {/* Neobrutalist Shadow */}
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />

                <div className="relative h-full border-[3px] md:border-4 border-black bg-white p-6 md:p-8 transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[#00C950] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-black text-[#00C950] bg-black px-2 py-1 uppercase tracking-widest">
                        {service.id}
                      </span>
                      <div className="h-12 w-12 border-[3px] border-black flex items-center justify-center transition-all group-hover:bg-[#00C950] group-hover:border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
                        <Icon className="h-6 w-6 transition-colors group-hover:text-black" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 transition-colors group-hover:text-[#00C950] leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-zinc-500 text-xs md:text-sm mb-6 leading-relaxed font-medium group-hover:text-zinc-800">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[8px] md:text-[9px] font-black uppercase tracking-wider border-2 border-black/10 px-2 py-0.5 bg-zinc-50 transition-all group-hover:border-[#00C950] group-hover:bg-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t-2 border-zinc-100 flex justify-between items-center group-hover:border-[#00C950]/20">
                      <a
                        href="#contact"
                        className="text-[11px] font-black border-b-2 border-black transition-colors group-hover:text-[#00C950] group-hover:border-[#00C950] cursor-pointer uppercase"
                      >
                        {service.action}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <div className="mt-12 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-5 w-1 md:h-6 md:w-1.5 ${i % 2 === 0 ? "bg-[#00C950]" : "bg-black"}`}
                />
              ))}
            </div>
            <p className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black">
              Fullstack // Dubai // 2026
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00C950] animate-pulse" />
            <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              System_Status: Operational
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
