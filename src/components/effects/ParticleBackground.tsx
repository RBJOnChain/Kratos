"use client";

import React, { useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ParticleBackground() {
  const prefersReduced = useReducedMotion();

  // Desktop-only subtle ambient floating nodes
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      x: (i * 47) % 94 + 3,
      y: (i * 31) % 92 + 4,
      size: (i % 2) + 1.5,
      opacity: ((i % 4) + 2) * 0.08,
      isLime: i % 5 === 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#080B12]" aria-hidden="true">
      {/* High-Performance Hardware-Accelerated Ambient Glows (No expensive blur filter layers) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(22,119,255,0.08)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(22,119,255,0.04)_0%,_transparent_70%)]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(198,255,61,0.02)_0%,_transparent_70%)]" />

      {/* Subtle Structural Cyber Grid (Minimal opacity) */}
      <div className="absolute inset-0 cyber-grid opacity-15" />

      {/* Desktop Only: Ambient Subtle Nodes (Hidden on mobile for peak touch performance) */}
      {!prefersReduced && (
        <div className="hidden lg:block absolute inset-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.isLime ? "#C6FF3D" : "#1677FF",
                opacity: p.opacity,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
