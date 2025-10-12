import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const mottos = [
    "We don’t play the game - we define it.",
    "Fear none, respect few, conquer all.",
    "Born to clash, built to conquer.",
    "Gold blooded. Zero mercy.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mottos.length);
    }, 5000); // changes every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="Header-image h-screen relative">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* centered content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white space-y-10">
        <motion.h1
          className="text-[45px] md:text-8xl font-extrabold satisfy-regular tracking-normal"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ༒šզʊãɖ.ʐɛɌօ༒
        </motion.h1>

        {/* Animated changing motto */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-xl md:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {mottos[index]}
          </motion.p>
        </AnimatePresence>

        {/* Button section */}
        <motion.div
          className="flex space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            className="relative bg-yellow-500 hover:scale-110 duration-300  hover:bg-yellow-600 text-black px-8 py-3 font-bold uppercase transition
                       before:content-[''] before:absolute before:inset-0 
                       before:clip-path-[polygon(0_0,95%_0,100%_25%,100%_100%,5%_100%,0_75%)] 
                       before:bg-yellow-500 before:-z-10
                       rounded-none"
            style={{
              clipPath:
                "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)",
            }}
          >
            Join Us
          </button>


        </motion.div>
      </div>
    </section>
  );
}
