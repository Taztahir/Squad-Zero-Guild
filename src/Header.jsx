import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOTTOS = [
  "We don’t play the game - we define it.",
  "Fear none, respect few, conquer all.",
  "Born to clash, built to conquer.",
  "Gold blooded. Zero mercy.",
];

export default function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % MOTTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth Scroll Function
  const scrollToStats = () => {
    const element = document.getElementById("stats-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
      {/* Background Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 Header-image transition-transform duration-1000 hover:scale-105" 
        style={{ backgroundImage: "url('/your-bg-image.jpg')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      
      {/* Tactical Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
        
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-500 font-bold uppercase text-xs mb-4 tracking-[0.5em] drop-shadow-glow"
        >
          Established for Dominance
        </motion.span>

        <motion.h1
          className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-outline block opacity-50">SQUAD</span>
          <span className="block text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]">ZERO</span>
        </motion.h1>

        {/* Animated Motto with Blur-In Effect */}
        <div className="h-12 mt-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-lg md:text-2xl text-zinc-400 font-medium italic"
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
              transition={{ duration: 0.6 }}
            >
              "{MOTTOS[index]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#join-section" className="tactical-btn group relative bg-yellow-500 text-black px-10 py-4 font-black uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">Join the Squad</span>
            <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </a>
          
          <a href="#scrollToStats"
            className="tactical-btn border border-white/20 text-white hover:bg-white/10 transition-all duration-300 px-10 py-4 font-black uppercase tracking-widest backdrop-blur-md"
          >
            View Stats
          </a>
        </motion.div>
      </div>

      {/* Decorative HUD Details */}
      <div className="absolute bottom-10 left-10 hidden lg:block border-l border-yellow-500/50 pl-4">
        <div className="text-zinc-500 text-[10px] font-mono leading-tight uppercase tracking-widest">
          <span className="text-yellow-500">●</span> System Online<br />
          <span className="opacity-50">Sector: Global_Zero</span>
        </div>
      </div>
    </section>
  );
}