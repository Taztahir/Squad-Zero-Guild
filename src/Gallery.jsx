import React from "react";
import { motion } from "framer-motion";
import ScoreImage1 from "./assets/Score.jpeg";
import MatchImage from "./assets/Match.jpeg";
import SquadLeader from "./assets/Squad-Zero-leader.jpeg";


const SCORES = [
  { id: 1, title: "Tournament Final", date: "JAN 2026", img: ScoreImage1, result: "BOOYAH!" },
  { id: 2, title: "Scrims vs Elite", date: "DEC 2025", img: MatchImage, result: "TOP 1" },
  { id: 3, title: "Guild War Season 5", date: "NOV 2025", img: SquadLeader, result: "VICTORY" },
];

export default function ScoreGallery() {
  return (
    <section className="py-24 bg-[#050505] px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with "Live Feed" Dot */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
            Match <span className="text-yellow-500">Reports</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SCORES.map((score, i) => (
            <motion.div
              key={score.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              {/* Scoreboard Frame */}
              <div 
                className="relative aspect-[16/10] bg-zinc-900 border-2 border-white/5 group-hover:border-yellow-500/50 transition-all duration-500"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)" }}
              >
                {/* Score Image */}
                <img 
                  src={score.img} 
                  alt={score.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />

                {/* Tactical Overlay (Grid lines over the image) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />

                {/* Booyah/Victory Tag */}
                <div className="absolute top-0 right-0 bg-yellow-500 text-black font-black px-4 py-1 italic skew-x-[-12deg] -mr-1 mt-2">
                  {score.result}
                </div>
              </div>

              {/* Data Labels */}
              <div className="mt-4 flex justify-between items-end border-l-2 border-yellow-500 pl-4">
                <div>
                  <h3 className="text-white font-black uppercase text-lg leading-tight">
                    {score.title}
                  </h3>
                  <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
                    TIMESTAMP: {score.date}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-zinc-600 text-[10px] font-mono block">FILE_TYPE</span>
                  <span className="text-yellow-500 font-mono text-xs">RAW_DATA.SCR</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}