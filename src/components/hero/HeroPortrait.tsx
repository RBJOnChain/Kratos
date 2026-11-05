"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profileData } from "@/data/profile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Controlled, subtle mouse tilt for desktop only (smooth and lightweight)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full max-w-[420px] mx-auto lg:max-w-none perspective-[1000px]"
    >
      {/* Controlled Atmospheric Depth Glow - Soft & Minimal */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-[#1677FF]/10 via-transparent to-[#C6FF3D]/5 rounded-3xl blur-2xl pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Monolithic Editorial Portrait Frame */}
      <motion.div
        style={{
          rotateX: prefersReduced ? 0 : rotateX,
          rotateY: prefersReduced ? 0 : rotateY,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-[4/5] bg-[#0D111A] border border-[#252D3A] rounded-xl p-3 sm:p-3.5 shadow-2xl shadow-black/90 group"
      >
        {/* Architectural Precision Crosshairs at Corners */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-[#1677FF] font-mono text-[10px] leading-none select-none pointer-events-none">
          +
        </div>
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-[#252D3A] font-mono text-[10px] leading-none select-none pointer-events-none">
          +
        </div>
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-[#252D3A] font-mono text-[10px] leading-none select-none pointer-events-none">
          +
        </div>
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-[#C6FF3D] font-mono text-[10px] leading-none select-none pointer-events-none">
          +
        </div>

        {/* Real Portrait Presentation Container */}
        <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#151B26] border border-[#252D3A]/80">
          <Image
            src={profileData.avatar}
            alt={profileData.avatarAlt}
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
            priority
            loading="eager"
            className="object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Minimalist Editorial Shadow Gradient (Subtle base depth, face remains unobstructed) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/85 via-transparent to-transparent pointer-events-none" />

          {/* Editorial Caption Bar */}
          <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between px-3 py-2 rounded bg-[#080B12]/80 backdrop-blur-md border border-[#252D3A]/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
              <span className="font-mono text-[11px] font-semibold text-[#F5F7FA] tracking-wide">
                {profileData.displayName}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#A5ACB8] tracking-wider">
              {profileData.username}
            </span>
          </div>
        </div>

        {/* High-Precision Accent Baseline */}
        <div className="absolute -bottom-[1px] left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#1677FF] to-transparent opacity-80" />
      </motion.div>
    </div>
  );
}
