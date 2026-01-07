import React from "react";
import { motion } from "framer-motion";

const GUILD_STATS = [
  { label: "Total Booyahs", value: 1250, suffix: "+", color: "text-yellow-500" },
  { label: "Win Rate", value: 85, suffix: "%", color: "text-blue-400" },
  { label: "Active Members", value: 45, suffix: "/50", color: "text-green-400" },
  { label: "Global Rank", value: 12, suffix: "th", color: "text-purple-500" },
];

export default function GuildStats() {
  return (
    <section id="scrollToStats" className="relative bg-[#080808] py-20 px-6 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUILD_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Design */}
              <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-sm group-hover:border-yellow-500/30 transition-colors duration-500">
                {/* Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-yellow-500/10 rounded-2xl transition-all duration-500`} />
                
                <h3 className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
                  {stat.label}
                </h3>
                
                <div className="flex items-baseline gap-1">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`text-5xl font-black italic tracking-tighter ${stat.color}`}
                  >
                    <Counter value={stat.value} />
                  </motion.span>
                  <span className={`text-xl font-bold ${stat.color} opacity-80`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Tactical "Loading" Bar */}
                <div className="mt-6 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full bg-current ${stat.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Simple Counter Component to animate numbers
 */
function Counter({ value }) {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const isInView = motion.useInView ? "placeholder" : true; // Simplified for this example

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}