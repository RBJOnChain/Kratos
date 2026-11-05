"use client";

import React from "react";
import dynamic from "next/dynamic";
import HeroTypography from "./HeroTypography";
import HeroPortrait from "./HeroPortrait";
import SectionWrapper from "../layout/SectionWrapper";

// High-performance dynamic import of Three.js Scene: only mounts on desktop
const HeroScene = dynamic(() => import("../effects/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      className="min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 relative overflow-hidden"
    >
      {/* Three.js Scene - Automatically bypassed on mobile & touch screens */}
      <HeroScene />

      {/* Structural Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between opacity-15">
          <div className="w-[1px] h-full bg-[#252D3A]" />
          <div className="hidden md:block w-[1px] h-full bg-[#252D3A]" />
          <div className="hidden lg:block w-[1px] h-full bg-[#252D3A]" />
          <div className="w-[1px] h-full bg-[#252D3A]" />
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        {/* Left Column: Editorial Typography (7 Cols on desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
          <HeroTypography />
        </div>

        {/* Right Column: Cinematic Portrait (5 Cols on desktop) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <HeroPortrait />
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[9px] tracking-widest text-[#697386] uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-[#252D3A] flex items-start justify-center p-1 bg-[#080B12]">
          <span className="w-1 h-1.5 rounded-full bg-[#1677FF] animate-bounce" />
        </div>
      </div>
    </SectionWrapper>
  );
}
