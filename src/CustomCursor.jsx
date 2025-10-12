import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", move);

    // Detect hover on links & buttons
    const hoverTargets = document.querySelectorAll("a, button");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none max-md:hidden fixed top-0 left-0 z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    >
      {/* Outer Neon Ring */}
      <div
        className={`w-10 h-10 rounded-full border-2 ${
          hovering ? "scale-150 border-yellow-500" : "border-yellow-500"
        } transition-transform duration-300 ease-out`}
        style={{
          boxShadow: hovering
            ? "0 0 20px #fff"
            : "0 0 10px rgba(239,68,68,0.6)",
        }}
      ></div>

      {/* Inner Dot */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          hovering ? "w-3 h-3 bg-white" : "w-2 h-2 bg-yellow-500"
        } transition-all duration-300`}
      ></div>
    </div>
  );
}
