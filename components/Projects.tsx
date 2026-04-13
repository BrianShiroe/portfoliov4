"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "ITD Innovation",
      tag: "IT Solutions",
      tech: "Odoo / 80+ Pages / Multilingual",
      status: "Live",
      isDevelopment: false,
      date: "2026",
      href: "https://www.itdtech.ae/",
    },
    {
      id: "02",
      title: "KBH Real Estate",
      tag: "Real Estate",
      tech: "Odoo / E-commerce/ Multilingual",
      status: "Live",
      isDevelopment: false,
      date: "2026",
      href: "https://www.kbhrealestate.ae/",
    },
    {
      id: "03",
      title: "Zhel Gold Jewelry",
      tag: "Gold & Layaway",
      tech: "Next.js / Responsive / Systems",
      status: "Live",
      isDevelopment: true,
      date: "2026",
      href: "https://zhel-gold-jewelry.vercel.app/",
    },
    {
      id: "04",
      title: "Rose Gallery Perfumes",
      tag: "Perfume Store",
      tech: "Shopify / E-Commerce / Responsive",
      status: "Live",
      isDevelopment: false,
      date: "2026",
      href: "https://rosegallery.ae/",
    },
    {
      id: "05",
      title: "Wazeen Law Firm",
      tag: "Legal Services",
      tech: "Wordpress CMS / Arabic / Responsive",
      status: "Live",
      isDevelopment: false,
      date: "2026",
      href: "https://wazeenlaw.sa/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-white px-4 py-24 md:px-6 overflow-hidden font-mono"
    >
      <div className="mx-auto max-w-6xl">
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[#00C950]" />
            <span className="text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 md:mb-4 ml-2">
              Development Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Top_<span className="text-[#00C950]">Projects</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[12px] font-bold text-black uppercase tracking-widest">
              Client Solutions // GCC Region
            </p>
            <div className="h-2 w-48 bg-zinc-100 mt-2 overflow-hidden border border-black/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                className="h-full bg-[#00C950]"
              />
            </div>
          </div>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-0">
          {projects.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b-2 border-zinc-100 py-8 md:py-12 transition-all hover:bg-zinc-50 px-2 md:px-6"
            >
              <Link
                href={work.href}
                target={work.href !== "#" ? "_blank" : undefined}
                className="block w-full"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start md:items-center gap-6 md:gap-12">
                    <div className="flex flex-col items-center">
                      <span className="text-sm md:text-base font-black text-zinc-300 group-hover:text-[#00C950] transition-colors">
                        {work.id}
                      </span>
                    </div>

                    <div className="relative">
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300">
                        {work.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">
                          {work.tech}
                        </span>

                        {/* Pulsing Green Indicator */}
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C950] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C950]"></span>
                        </span>

                        <span className="text-[11px] md:text-[13px] font-black text-black uppercase tracking-widest border-b-2 border-[#00C950]">
                          {work.status}
                        </span>

                        {/* Separate Development Indicator */}
                        {work.isDevelopment && (
                          <div className="flex items-center gap-2 bg-amber-50 px-2 py-0.5 border border-amber-400">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                            </span>
                            <span className="text-[10px] md:text-[11px] font-black text-amber-600 uppercase tracking-tighter">
                              Under Development
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Metadata & Tag */}
                  <div className="flex items-center justify-between md:justify-end gap-8">
                    <div className="hidden xl:flex flex-col items-end">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">
                        Deployed
                      </p>
                      <p className="text-xs font-bold text-black">
                        {work.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-[10px] md:text-xs font-black uppercase border-4 border-black px-4 py-2 bg-white group-hover:bg-black group-hover:text-[#00C950] transition-all shadow-[6px_6px_0px_0px_#00C950] group-hover:shadow-none whitespace-nowrap group-hover:-translate-y-1 group-hover:-translate-x-1">
                        {work.tag}
                      </span>

                      <div className="h-10 w-10 md:h-12 md:w-12 border-4 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#00C950] transition-colors">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
