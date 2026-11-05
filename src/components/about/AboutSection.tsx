"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Activity, Cpu, Globe, Hash, Radio, Terminal } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import IdentityTags from "./IdentityTags";
import { profileData } from "@/data/profile";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated Digital Oscilloscope / Signal Waveform (strictly Electric Blue & Lime)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number = 0;
    let step = 0;
    let isVisible = false;

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.04;

      // Draw baseline grid lines
      ctx.strokeStyle = "rgba(37, 45, 58, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      // Draw primary wave (Electric Blue)
      ctx.strokeStyle = "#1677FF";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.04 + step) * 16 +
          Math.cos(x * 0.02 - step * 0.8) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw accent harmonic spikes (Acid Lime)
      ctx.strokeStyle = "rgba(198, 255, 61, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 15) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.06 - step * 1.5) * 22;
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationId) {
        animationId = requestAnimationFrame(render);
      } else if (!isVisible && animationId) {
        cancelAnimationFrame(animationId);
        animationId = 0;
      }
    });

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <SectionWrapper id="about" className="relative border-t border-[#252D3A]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#1677FF]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <SectionHeading
        index="02"
        tag="DIGITAL MANIFESTO"
        title={profileData.aboutTitle}
        subtitle="Deconstructing the persona behind the handle. A presence shaped by curiosity, community dynamics, and on-chain culture."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start"
      >
        {/* Left Editorial Text Column (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Main Statement Quote */}
          <div className="relative pl-6 border-l-2 border-[#1677FF]">
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-[#F5F7FA] font-medium leading-relaxed">
              &ldquo;{profileData.aboutStarter}&rdquo;
            </p>
          </div>

          {/* Philosophy Statement */}
          <p className="text-[#A5ACB8] text-base sm:text-lg leading-relaxed font-sans">
            {profileData.aboutPhilosophy}
          </p>

          {/* Interactive Identity Tags */}
          <div className="mt-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#697386] mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>CORE IDENTIFIERS // CLICK TO INSPECT</span>
            </h3>
            <IdentityTags />
          </div>
        </motion.div>

        {/* Right Column: Holographic Cyber Module (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Cybernetic Identity Terminal Card */}
          <div className="rounded-2xl bg-[#0D111A] border border-[#252D3A] p-6 shadow-2xl relative overflow-hidden group hover:border-[#1677FF]/60 transition-colors">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#252D3A] mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#252D3A]" />
                <span className="font-mono text-[11px] text-[#A5ACB8] ml-2">
                  KRATOS_NODE_01.SH
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#C6FF3D] bg-[#C6FF3D]/10 px-2 py-0.5 rounded border border-[#C6FF3D]/20">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Profile Micro-Integration */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-[#151B26] border border-[#252D3A] mb-5">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#1677FF]/40 shrink-0">
                <Image
                  src={profileData.avatar}
                  alt={profileData.displayName}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-[#F5F7FA]">
                  {profileData.displayName}
                </span>
                <span className="font-mono text-xs text-[#1677FF]">
                  {profileData.username}
                </span>
                <span className="font-mono text-[10px] text-[#697386]">
                  WEB3 DIGITAL CITIZEN
                </span>
              </div>
            </div>

            {/* Signal Oscilloscope Visualization Canvas */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#697386] mb-1.5">
                <span>SIGNAL OSCILLOSCOPE</span>
                <span className="text-[#C6FF3D]">384.2 kHz</span>
              </div>
              <div className="rounded-lg bg-[#080B12] border border-[#252D3A] p-2 overflow-hidden flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={340}
                  height={70}
                  className="w-full h-[70px] block"
                  aria-label="Real-time timeline frequency signal waveform"
                />
              </div>
            </div>

            {/* Identity Telemetry Readouts */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#151B26] border border-[#252D3A]">
                <div className="flex items-center gap-1.5 text-[#697386] text-[10px] mb-1">
                  <Globe className="w-3 h-3 text-[#1677FF]" />
                  <span>ECOSYSTEM</span>
                </div>
                <div className="text-[#F5F7FA] font-bold">ETHEREUM & L2s</div>
              </div>

              <div className="p-3 rounded-lg bg-[#151B26] border border-[#252D3A]">
                <div className="flex items-center gap-1.5 text-[#697386] text-[10px] mb-1">
                  <Activity className="w-3 h-3 text-[#C6FF3D]" />
                  <span>ALIGNMENT</span>
                </div>
                <div className="text-[#F5F7FA] font-bold">DECENTRALIZED</div>
              </div>

              <div className="p-3 rounded-lg bg-[#151B26] border border-[#252D3A]">
                <div className="flex items-center gap-1.5 text-[#697386] text-[10px] mb-1">
                  <Cpu className="w-3 h-3 text-[#1677FF]" />
                  <span>RADAR</span>
                </div>
                <div className="text-[#F5F7FA] font-bold">EARLY PROJECTS</div>
              </div>

              <div className="p-3 rounded-lg bg-[#151B26] border border-[#252D3A]">
                <div className="flex items-center gap-1.5 text-[#697386] text-[10px] mb-1">
                  <Hash className="w-3 h-3 text-[#C6FF3D]" />
                  <span>FREQUENCY</span>
                </div>
                <div className="text-[#F5F7FA] font-bold">CRYPTO TWITTER</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

