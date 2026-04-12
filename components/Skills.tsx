"use client";
import { motion } from "framer-motion";

const techStack = [
  { slug: 'odoo', name: 'Odoo ERP', type: 'Enterprise System', level: 'Advanced', focus: 'Business Management' },
  { slug: 'nextdotjs', name: 'Next.js', type: 'Framework', level: 'Expert', focus: 'Modern Web Architecture' },
  { slug: 'react', name: 'React', type: 'Library', level: 'Expert', focus: 'Interactive Interfaces' },
  { slug: 'wordpress', name: 'WordPress', type: 'CMS', level: 'Expert', focus: 'Content & Site Structure' },
  { slug: 'shopify', name: 'Shopify', type: 'eCommerce', level: 'Advanced', focus: 'Online Store Growth' },
  { slug: 'googleads', name: 'Google Ads', type: 'Marketing', level: 'Experienced', focus: 'Digital Reach' },
  { slug: 'hostinger', name: 'Hosting', type: 'Management', level: 'Expert', focus: 'Domain & Site Support' },
  { slug: 'javascript', name: 'JavaScript', type: 'Core Web', level: 'Expert', focus: 'Interactivity' },
  { slug: 'html5', name: 'HTML5', type: 'Structure', level: 'Expert', focus: 'Modern Layouts' },
  { slug: 'css', name: 'CSS3', type: 'Styling', level: 'Expert', focus: 'Visual Presentation' },
];

const ExternalIcon = ({ slug }: { slug: string }) => (
  <div 
    className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 bg-black group-hover:bg-zinc-700 transition-colors duration-200"
    style={{
      WebkitMaskImage: `url(https://cdn.simpleicons.org/${slug}/000)`,
      maskImage: `url(https://cdn.simpleicons.org/${slug}/000)`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
    }}
  />
);

export function Skills() {
  return (
    <section id="skills" className="relative w-full border-t-4 border-black bg-zinc-50 py-16 md:py-24 overflow-hidden selection:bg-black selection:text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="relative">
            <div className="absolute -left-2 -top-2 md:-left-4 md:-top-4 h-8 w-8 md:h-12 md:w-12 border-l-4 border-t-4 border-black" />
            <p className="text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 md:mb-4 ml-2">Area of Expertise</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Core_<span className="text-[#00C950]">Skills</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
             {/* Changed shadow color to #00C950 */}
             <p className="text-xs md:text-base font-bold border-4 border-black bg-white text-black px-4 md:px-6 py-2 md:py-3 uppercase tracking-widest shadow-[4px_4px_0px_0px_#00C950] md:shadow-[8px_8px_0px_0px_#00C950] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                Verified Skillset
             </p>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
          {techStack.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[220px] sm:h-[280px] md:h-[380px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* CARD FRONT */}
                <div className="absolute inset-0 h-full w-full border-2 md:border-4 border-black bg-white p-3 md:p-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="flex justify-between items-start border-b-2 border-black pb-1 md:pb-2">
                    <span className="text-[8px] md:text-[12px] font-black text-zinc-400 uppercase tracking-widest">{tech.level}</span>
                    <span className="text-[8px] md:text-[12px] font-black text-black">0{index + 1}</span>
                  </div>

                  <div className="flex-grow flex items-center justify-center">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <ExternalIcon slug={tech.slug} />
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                      <div>
                        <h3 className="text-xs md:text-2xl font-black uppercase tracking-tighter text-black leading-none">{tech.name}</h3>
                        <p className="text-[8px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{tech.type}</p>
                      </div>
                      <div className="h-1 md:h-1.5 w-full bg-zinc-100 border border-black/10">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: '100%' }} 
                          className="h-full bg-black" 
                        />
                      </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="absolute inset-0 h-full w-full border-2 md:border-4 border-black bg-black p-3 md:p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="h-full flex flex-col justify-between">
                      <div className="space-y-2 md:space-y-4">
                        <div className="flex justify-between items-center border-b border-zinc-700 pb-1 md:pb-2">
                            <p className="text-[8px] md:text-[11px] text-zinc-400 uppercase font-bold tracking-widest">Focus Area</p>
                        </div>
                        <p className="text-[10px] md:text-lg uppercase leading-tight font-black tracking-tight italic">
                            {tech.focus}
                        </p>
                      </div>
                      <div className="pt-2 md:pt-4 border-t border-zinc-800 flex flex-col gap-1 md:gap-2">
                        <span className="text-[7px] md:text-[10px] text-zinc-500 font-bold uppercase">Professional Application</span>
                        <div className="w-fit px-1.5 py-0.5 md:px-2 md:py-1 bg-white text-black font-black uppercase tracking-tighter text-[7px] md:text-[10px]">Confirmed_Skill</div>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}