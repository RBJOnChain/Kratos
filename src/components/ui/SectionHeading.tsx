"use client";

import React from "react";
import { cn } from "@/lib/utils";
import GlitchText from "../effects/GlitchText";

interface SectionHeadingProps {
  index: string; // e.g. "01", "02"
  tag: string; // e.g. "IDENTITY PROTOCOL"
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  tag,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {/* Index and Category Tag */}
      <div
        className={cn(
          "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <span className="text-[#1677FF] font-bold">[{index}]</span>
        <span className="w-6 h-[1px] bg-[#252D3A]" />
        <span className="text-[#C6FF3D] tracking-wider">{tag}</span>
      </div>

      {/* Main Heading */}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] uppercase leading-[1.08] mb-4">
        <GlitchText text={title} />
      </h2>

      {/* Subtitle if provided */}
      {subtitle && (
        <p className="text-[#A5ACB8] text-base md:text-lg font-sans leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

