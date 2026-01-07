import React, { useState } from "react";
import { motion } from "framer-motion";

export default function JoinSquad() {
  const [formData, setFormData] = useState({ name: "", kd: "", rank: "", role: "" });

  const inputStyle = "w-full bg-zinc-900/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-yellow-500 focus:outline-none transition-all duration-300 rounded-none border-l-4";

  return (
    <section id="join-section" className="py-24 bg-black relative overflow-hidden px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/[0.02] -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Requirements */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                Ready to <br />
                <span className="text-yellow-500">Deploy?</span>
              </h2>
              <p className="text-zinc-500 mt-6 max-w-md font-medium leading-relaxed">
                We are looking for elite operators who prioritize strategy over solo glory. 
                If you have the discipline, we have the spot.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">Minimum Credentials</h3>
              {[
                { label: "K/D Ratio", value: "3.50+" },
                { label: "Minimum Rank", value: "Heroic / Grandmaster" },
                { label: "Activity", value: "Daily (6PM - 11PM)" },
                { label: "Communcation", value: "Whatapp + Mic Required" }
              ].map((req) => (
                <div key={req.label} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 text-sm">{req.label}</span>
                  <span className="text-white font-mono font-bold text-sm">{req.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Application Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-8 md:p-12 bg-zinc-900/30 border border-white/5 backdrop-blur-sm"
            style={{ clipPath: "polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%)" }}
          >
            {/* Form Header */}
            <div className="mb-8 border-b border-yellow-500/20 pb-4 flex justify-between items-center">
              <span className="text-yellow-500 font-mono text-[10px] tracking-widest uppercase">Form // SQD_001</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-yellow-500" />
                <div className="w-1 h-1 bg-yellow-500/30" />
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-zinc-600 text-[10px] uppercase font-bold mb-2 block tracking-widest">In-Game Name</label>
                  <input type="text" placeholder="e.g. ZERO_GHOST" className={inputStyle} />
                </div>
                <div>
                  <label className="text-zinc-600 text-[10px] uppercase font-bold mb-2 block tracking-widest">Current K/D</label>
                  <input type="text" placeholder="0.00" className={inputStyle} />
                </div>
                <div>
                  <label className="text-zinc-600 text-[10px] uppercase font-bold mb-2 block tracking-widest">Main Role</label>
                  <select className={inputStyle}>
                    <option>Rusher</option>
                    <option>Sniper</option>
                    <option>IGL</option>
                    <option>Support</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-white text-black font-black uppercase py-4 tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 group"
              >
                Submit Credentials
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </form>

            {/* Terminal Decorations */}
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-yellow-500/50" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-yellow-500/50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}