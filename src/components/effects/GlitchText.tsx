"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  glitchOnHover?: boolean;
}

export default function GlitchText({
  text,
  className,
  as: Component = "span",
  glitchOnHover = true,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <Component
      className={cn(
        "relative inline-block transition-transform duration-200 select-none",
        isGlitching && "skew-x-1",
        className
      )}
      onMouseEnter={() => glitchOnHover && setIsGlitching(true)}
      onMouseLeave={() => glitchOnHover && setIsGlitching(false)}
    >
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          {/* Cyan/Electric Blue shift layer */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[-2px] text-[#1677FF] opacity-80 pointer-events-none select-none z-0 clip-path-[polygon(0_0,100%_0,100%_45%,0_45%)]"
          >
            {text}
          </span>
          {/* Lime highlight shift layer */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[2px] text-[#C6FF3D] opacity-70 pointer-events-none select-none z-0 clip-path-[polygon(0_55%,100%_55%,100%_100%,0_100%)]"
          >
            {text}
          </span>
        </>
      )}
    </Component>
  );
}

