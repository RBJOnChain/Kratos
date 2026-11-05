"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#1677FF] via-[#1677FF] to-[#C6FF3D] shadow-[0_0_10px_#1677FF]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      {/* Corner digital indicator */}
      <div className="hidden lg:flex fixed top-4 right-4 z-40 items-center gap-2 font-mono text-[10px] tracking-widest text-[#697386] bg-[#080B12]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#252D3A]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-ping" />
        <span>SYS.ONLINE // KRATOS-OS</span>
      </div>
    </div>
  );
}

