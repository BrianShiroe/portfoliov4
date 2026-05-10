"use client";
import { motion, Variants } from "framer-motion";

interface ExperienceCardProps {
  job: {
    period: string;
    company: string;
    location: string;
    role: string;
    status: string;
    stack: string;
    tasks: string[];
    color: string;
  };
  index: number;
  isAr: boolean;
  itemVariants: Variants;
}

export function ExperienceCard({ job, index, isAr, itemVariants }: ExperienceCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative mb-20 md:mb-32 last:mb-0 group ${isAr ? "pr-8 md:pr-24" : "pl-8 md:pl-24"}`}
    >
      {/* Timeline Marker */}
      <div
        className={`absolute top-2 h-6 w-6 md:h-8 md:w-8 border-[3px] border-black bg-white rounded-full flex items-center justify-center transition-all group-hover:border-[#00C950] group-hover:scale-110 z-10 ${
          isAr ? "-right-[15px] md:-right-[20px]" : "-left-[15px] md:-left-[20px]"
        }`}
      >
        <div
          className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full ${index === 0 ? "bg-[#00C950]" : "bg-zinc-200"}`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Meta Column */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div
            className={`px-4 py-2 bg-black text-white mb-4 rounded-xl font-black text-[10px] md:text-xs tracking-widest uppercase ${
              isAr ? "shadow-[-4px_4px_0px_0px_#00C950]" : "shadow-[4px_4px_0px_0px_#00C950]"
            }`}
          >
            {job.period}
          </div>

          <div className={`flex items-center gap-2 mb-6 ${job.color}`}>
            <span className="text-[10px] font-black uppercase tracking-widest">{job.status}</span>
            {index === 0 && <span className="h-2 w-2 bg-[#00C950] rounded-full animate-ping" />}
          </div>

          <div className="p-5 border-2 border-black/5 bg-zinc-50/50 rounded-2xl w-full group-hover:border-[#00C950]/30 transition-colors">
            <p className="text-[10px] font-bold text-zinc-500 uppercase leading-relaxed">
              <span className="text-black font-black block mb-1">{isAr ? "التقنيات" : "Stack"}:</span>
              {job.stack}
            </p>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-3 mb-4 opacity-60">
            <span className="text-xs font-black text-black uppercase tracking-widest">{job.company}</span>
            <span className="h-1 w-1 bg-zinc-300 rounded-full" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{job.location}</span>
          </div>

          <h3 className={`text-3xl md:text-6xl font-black uppercase tracking-tighter text-black leading-[0.95] mb-10 group-hover:text-[#00C950] transition-colors ${isAr ? "md:leading-[1.2]" : ""}`}>
            {job.role}
          </h3>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {job.tasks.map((task) => (
              <span
                key={task}
                className={`text-[9px] md:text-xs font-black uppercase border-2 border-black px-4 py-2.5 rounded-xl transition-all bg-white hover:bg-black hover:text-[#00C950] ${
                  isAr ? "shadow-[-3px_3px_0px_0px_#00C950]" : "shadow-[3px_3px_0px_0px_#00C950]"
                } hover:shadow-none hover:translate-y-0.5`}
              >
                {task}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}