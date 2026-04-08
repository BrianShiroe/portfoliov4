"use client";
import { motion } from "framer-motion";

export function Character() {
  return (
    <motion.svg
      width="140" height="140" viewBox="0 0 100 100" fill="none"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="transition-colors duration-200"
    >
      {/* Body - Changes to black on parent hover */}
      <motion.rect 
        x="20" y="25" width="60" height="55" 
        className="fill-white stroke-black group-hover:fill-black group-hover:stroke-white transition-colors duration-200"
        strokeWidth="4" 
      />
      
      {/* Face Screen - Changes to white on parent hover */}
      <motion.rect 
        x="30" y="35" width="40" height="25" 
        className="fill-black group-hover:fill-white transition-colors duration-200"
      />
      
      {/* Eyes - Pulse faster on hover */}
      <motion.rect 
        x="38" y="45" width="8" height="4" 
        className="fill-white group-hover:fill-black transition-colors duration-200"
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.rect 
        x="54" y="45" width="8" height="4" 
        className="fill-white group-hover:fill-black transition-colors duration-200"
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      
      {/* Antenna */}
      <rect x="48" y="10" width="4" height="15" className="fill-black group-hover:fill-white" />
      <motion.circle 
        cx="50" cy="8" r="4" 
        className="fill-black group-hover:fill-white"
        animate={{ 
          r: [4, 6, 4],
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"] 
        }} 
        transition={{ repeat: Infinity, duration: 2 }} 
      />
    </motion.svg>
  );
}