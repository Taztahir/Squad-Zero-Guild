import React from "react";
import { motion } from "framer-motion";
import LeaderImage from "./assets/Squad-Zero-leader.jpeg";

const FEATURED_MEMBER = {
  name: "ZERO_LEADER",
  role: "In-Game Leader",
  char: "Alok",
  rank: "Grandmaster",
  kills: "15,400",
  kd: "4.85",
  specialty: "Tactical Execution"
};

export default function FeaturedRoster() {
  return (
    <section className="py-24 bg-zinc-950 flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative group w-full max-w-md"
      >
        {/* 1. Animated Border Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-transparent opacity-30 group-hover:opacity-100 transition duration-1000 blur"></div>

        {/* 2. Main Card Body */}
        <div 
          className="relative bg-black border border-white/10 overflow-hidden"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
        >
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-yellow-500/20 z-30 pointer-events-none"
          />

          {/* Top Header Section */}
          <div className="bg-yellow-500 px-8 py-2 flex justify-between items-center">
            <span className="text-black font-black text-xs tracking-tighter uppercase">Operator Profile</span>
            <span className="text-black/60 font-mono text-[10px]">#001-ALPHA</span>
          </div>

          {/* Image Area */}
          <div className="relative h-80 bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
              src={LeaderImage} 
              alt={FEATURED_MEMBER.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-100"
            />
            
            {/* Corner HUD Data */}
            <div className="absolute bottom-4 left-6 z-20">
              <span className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-1">
                {FEATURED_MEMBER.role}
              </span>
              <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
                {FEATURED_MEMBER.name}
              </h2>
            </div>
          </div>

          {/* Stats Footer Area */}
          <div className="p-8 grid grid-cols-2 gap-6 bg-zinc-900/30">
            <div>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Lifetime Kills</p>
              <p className="text-xl font-black text-white">{FEATURED_MEMBER.kills}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">K/D Ratio</p>
              <p className="text-xl font-black text-yellow-500">{FEATURED_MEMBER.kd}</p>
            </div>
            <div className="col-span-2 pt-4 border-t border-white/5 flex justify-between items-center">
              <div>
                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Specialty</p>
                <p className="text-sm font-bold text-zinc-300 italic">{FEATURED_MEMBER.specialty}</p>
              </div>
              <div className="text-right">
                 <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest underline decoration-yellow-500/50">Rank</p>
                 <p className="text-sm font-black text-white uppercase tracking-tighter">{FEATURED_MEMBER.rank}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Outer HUD Corner Decorations */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-500/20" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-500/20" />
      </motion.div>
    </section>
  );
}