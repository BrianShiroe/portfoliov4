"use client";
import React from "react";

export function Footer() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "History", href: "#history" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-white font-mono">
      {/* Main Bar */}
      <div className="w-full border-t-8 border-black bg-black py-12 px-4 md:px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* --- IDENTITY & CONTACT SECTION --- */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/3">
              <span className="font-black text-2xl md:text-3xl uppercase tracking-tighter">
                BrianShiroe<span className="text-zinc-600"> / DEV</span>
              </span>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-[#00C950] rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">
                    Operational // Dubai, UAE
                  </span>
                </div>
                {/* Contact Number - Clickable for Mobile */}
                <a
                  href="tel:+971503592133"
                  className="text-sm md:text-base font-black text-[#00C950] hover:text-white transition-colors tracking-widest"
                >
                  +971 50 359 2133
                </a>
              </div>

              {/* Social Icons from Icons8 */}
              <div className="flex gap-5 mt-8">
                <a
                  href="https://github.com/BrianShiroe"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                    alt="Github"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/brianshiroe/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="mailto:Brianshiroe@gmail.com"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/gmail-new.png"
                    alt="Email"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            {/* --- NAVIGATION LINKS --- */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-x-8 gap-y-6 w-full lg:w-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-[#00C950] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* --- CALL TO ACTION --- */}
            <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
              <a
                href="https://wa.me/971503592133"
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-auto text-center text-black bg-[#00C950] px-8 py-4 font-black uppercase tracking-tighter shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                WhatsApp Me ↗
              </a>
              <div className="mt-8 lg:text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                  © 2026 // BrianShiroe
                </span>
                <span className="text-[9px] font-bold text-zinc-700 uppercase">
                  v2.0.6 // Built for High-Performance
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Footer Divider */}
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-8 gap-6">
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`h-4 w-1 ${i % 3 === 0 ? "bg-[#00C950]" : "bg-zinc-800"}`}
                />
              ))}
            </div>
            <p className="text-[8px] md:text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center">
              Next.js // Shopify // Odoo ERP // Custom Web Apps
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
