import React from "react";
import { motion } from "framer-motion";

export default function AboutSquadZero() {
  return (
    <section className="relative bg-yellow-500 py-20 overflow-hidden">
      {/* Futuristic background overlay */}
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-center uppercase tracking-widest mb-10 text-black drop-shadow-[0_0_10px_#fff]"
        >
          About <span className="text-gray-900">Squad Zero</span>
        </motion.h2>

        {/* Border Box with gaming edge design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative duration-300 bg-about  hover:bg-yellow-600 text-black px-10 py-10 font-bold uppercase transition
                       before:content-[''] before:absolute before:inset-0 
                       before:clip-path-[polygon(0_0,95%_0,100%_25%,100%_100%,5%_100%,0_75%)] 
                       rounded-none"
            style={{
              clipPath:
                "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)",
            }}
        >
          {/* Futuristic corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-500 rounded-tr-3xl"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-500 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-500 rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-500 rounded-bl-3xl"></div>

          {/* Main text */}
          <div className="relative z-10 text-center text-gray-100">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-bold text-yellow-300">Squad Zero</span> isn’t just a guild -
              it’s a brotherhood forged in the flames of battle. Born in the
              world of <span className="text-yellow-300">Free Fire</span>, we thrive on strategy,
              precision, and unity. Our warriors rise from zero to legend,
              dominating the field with skill and style.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Every member of <span className="font-bold text-yellow-300">Squad Zero</span> carries
              the spirit of teamwork, loyalty, and relentless ambition.
              Together, we redefine what it means to rule the battleground -
              always ready, always zeroed in.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Futuristic glowing bottom border */}
      {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div> */}
    </section>
  );
}
