"use client";

import React from "react";
import { ArrowUpRight, Send } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";
import Button from "../ui/Button";
import GlitchText from "../effects/GlitchText";

export default function ContactSection() {
  return (
    <SectionWrapper id="connect" className="relative border-t border-[#252D3A]/60 pt-24 pb-20">
      {/* Cinematic End-Scene Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#1677FF]/15 via-[#1677FF]/10 to-[#C6FF3D]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Closing Container */}
      <div className="relative z-10 max-w-4xl mx-auto rounded-3xl bg-[#0D111A]/90 border border-[#252D3A] p-8 sm:p-12 md:p-16 text-center cyber-cut shadow-2xl overflow-hidden group hover:border-[#1677FF]/50 transition-colors">
        {/* Futuristic accent header line */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF3D] uppercase tracking-widest bg-[#C6FF3D]/10 px-3.5 py-1.5 rounded-full border border-[#C6FF3D]/25 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-ping" />
          <span>TERMINAL 04 // FINAL TRANSMISSION</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#F5F7FA] uppercase leading-tight mb-6">
          <GlitchText text="SEE YOU ON THE TIMELINE." />
        </h2>

        {/* Supporting Quote */}
        <p className="text-[#A5ACB8] text-lg sm:text-xl font-sans max-w-xl mx-auto mb-10 leading-relaxed">
          &ldquo;The ecosystem never sleeps. Neither does curiosity.&rdquo;
        </p>

        {/* Dual Call To Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="primary"
            size="lg"
            href="https://x.com/KratosOnWeb3"
            isExternal
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            FOLLOW KRATOS ON X
          </Button>

          <Button
            variant="lime"
            size="lg"
            href="https://t.me/KratosOnWeb3"
            isExternal
            icon={<Send className="w-4 h-4 text-[#080B12]" />}
          >
            LET&apos;S CONNECT
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

