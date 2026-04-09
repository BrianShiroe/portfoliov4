"use client";
import { motion } from "framer-motion";

export function Character() {
  return (
    <motion.svg
      width="140" 
      height="140" 
      viewBox="0 0 100 100" 
      fill="none"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="transition-colors duration-200"
    >
      {/* Main Body - Solid Neobrutalist Box */}
      <motion.rect 
        x="20" y="25" width="60" height="60" 
        className="fill-white stroke-black group-hover:fill-black group-hover:stroke-white transition-colors duration-200"
        strokeWidth="6" 
      />
      
      {/* Content Area - Secondary Box */}
      <motion.rect 
        x="30" y="35" width="40" height="30" 
        className="fill-black group-hover:fill-white transition-colors duration-200"
      />
      
      {/* Interaction Points (Eyes) - Scaled for better visibility */}
      <motion.rect 
        x="38" y="48" width="8" height="6" 
        className="fill-white group-hover:fill-black transition-colors duration-200"
        animate={{ scaleY: [1, 0.1, 1] }} 
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.rect 
        x="54" y="48" width="8" height="6" 
        className="fill-white group-hover:fill-black transition-colors duration-200"
        animate={{ scaleY: [1, 0.1, 1] }} 
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
      />
      
      {/* Top Detail - Solid Geometric Shape */}
      <rect 
        x="47" y="15" width="6" height="10" 
        className="fill-black group-hover:fill-white transition-colors duration-200" 
      />
      <motion.rect 
        x="44" y="9" width="12" height="6" 
        className="fill-black group-hover:fill-white transition-colors duration-200"
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Shadow - Grounded Neobrutalist Shadow */}
      <ellipse 
        cx="50" cy="95" rx="25" ry="4" 
        className="fill-black/10 group-hover:fill-black/5 transition-colors duration-200" 
      />
    </motion.svg>
  );
}