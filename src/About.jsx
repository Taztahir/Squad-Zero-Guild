import React from "react";
import { motion } from "framer-motion";

export default function AboutSquadZero() {
  return (
    <section className="relative bg-[#050505] py-24 overflow-hidden">
      {/* 1. Background Decor: Large "0" and Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black text-yellow-500/[0.03] select-none pointer-events-none">
        0
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="md:relative md:z-10 md:max-w-6xl md:mx-auto md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-yellow-500 mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter text-center"
          >
            About <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">Squad Zero</span>
          </motion.h2>
        </div>

        {/* 2. Content Card with Tactical Clipping */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Main Container */}
          <div 
            className="relative z-10 bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-8 md:p-16 overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}
          >
            {/* Animated Background Line */}
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
            />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
                  <span className="text-yellow-500 font-bold underline decoration-yellow-500/30 underline-offset-8">Squad Zero</span> isn’t just a guild—it’s a brotherhood forged in the heat of the drop zone.
                </p>
                <p className="text-zinc-400 leading-loose">
                  Born from the competitive chaos of <span className="text-white font-semibold">Free Fire</span>, we thrive on calculated aggression and flawless unity. We don't just aim for the Booyah; we aim to dominate the narrative of every match.
                </p>
                
                {/* Stats/Minichips */}
                <div className="flex gap-4 pt-4">
                  {['Tactical', 'Ruthless', 'United'].map((tag) => (
                    <span key={tag} className="text-[10px] tracking-[0.2em] border border-yellow-500/20 px-3 py-1 rounded-sm text-yellow-500 uppercase font-bold bg-yellow-500/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Element (Icon/Logo placeholder) */}
              <div className="relative flex justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-yellow-500/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-40 h-40 md:w-52 md:h-52 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.2)]">
                    <span className="text-black text-7xl font-black italic">0</span>
                  </div>
                </motion.div>
                {/* HUD Corner decorations */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500" />
              </div>
            </div>
          </div>

          {/* Background Shadow Effect */}
          <div className="absolute -inset-1 bg-yellow-500/10 blur-xl group-hover:bg-yellow-500/20 transition duration-500 rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
}