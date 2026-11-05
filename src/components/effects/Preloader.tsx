"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prefersReduced = useReducedMotion();
  const startTimeRef = useRef<number>(0);

  // Prevent background scrolling while preloading
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isVisible]);

  // Asset readiness tracking & progress calculation
  useEffect(() => {
    startTimeRef.current = Date.now();

    if (prefersReduced) {
      const timer = setTimeout(() => {
        setProgress(100);
        setIsCompleted(true);
        setIsVisible(false);
      }, 50);
      return () => clearTimeout(timer);
    }

    let isMounted = true;
    let currentProgress = 1;
    let targetProgress = 30; // Initial target while assets initialize
    let animationFrameId: number;

    // Track critical assets: Avatar image, fonts, and DOM
    const avatarPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = profileData.avatar;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(true); // Fail gracefully if network error
    });

    const fontsPromise =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready.catch(() => true)
        : Promise.resolve(true);

    const domPromise = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        const handler = () => {
          if (document.readyState === "complete") {
            window.removeEventListener("readystatechange", handler);
            resolve(true);
          }
        };
        document.addEventListener("readystatechange", handler);
      }
    });

    // When critical assets complete, accelerate target to 100%
    Promise.all([avatarPromise, fontsPromise, domPromise]).then(() => {
      if (isMounted) {
        targetProgress = 100;
      }
    });

    // Safety timeout: Never hang indefinitely (max 1.8s)
    const safetyTimeout = setTimeout(() => {
      if (isMounted) {
        targetProgress = 100;
      }
    }, 1800);

    const updateProgress = () => {
      if (!isMounted) return;

      const elapsed = Date.now() - startTimeRef.current;
      if (elapsed > 400 && targetProgress < 75) {
        targetProgress = 75;
      }

      if (currentProgress < targetProgress) {
        const step = targetProgress === 100 ? 3 : 1.2;
        currentProgress = Math.min(targetProgress, currentProgress + step);
        setProgress(Math.floor(currentProgress));
      }

      if (currentProgress >= 100) {
        setProgress(100);
        setIsCompleted(true);

        // Hold briefly at 100% then trigger exit transition
        setTimeout(() => {
          if (isMounted) {
            setIsVisible(false);
          }
        }, 320);
        return;
      }

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(safetyTimeout);
    };
  }, [prefersReduced]);

  // Phased technical status readout
  const getStatusText = (val: number) => {
    if (val < 35) return "INITIALIZING DIGITAL IDENTITY";
    if (val < 75) return "PREPARING EXPERIENCE";
    if (val < 100) return "SYNCHRONIZING TIMELINE";
    return "WELCOME TO MY DIGITAL WORLD";
  };

  const formattedPercentage = String(progress).padStart(2, "0");

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="kratos-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1], // Smooth cinematic curtain wipe
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#080B12] text-[#F5F7FA] flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={1}
          aria-valuemax={100}
          aria-label="KRATOS Digital Identity Loading Progress"
        >
          {/* Subtle Structural Cyber Grid Background */}
          <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

          {/* Centralized Atmospheric Radial Lighting (Zero expensive blur filter) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(22,119,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

          {/* 1. Header Bar */}
          <header className="relative z-10 flex items-center justify-between font-mono text-[11px] sm:text-xs text-[#A5ACB8] tracking-widest uppercase">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
              <span className="text-[#F5F7FA] font-bold">{profileData.brandName}</span>
              <span className="text-[#697386]">{"// SYSTEM INITIALIZATION"}</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[#697386]">
              <span>SECTOR: 0x7F</span>
              <span className="w-1 h-1 rounded-full bg-[#1677FF]" />
              <span className="text-[#1677FF] font-semibold">IDENTITY PROTOCOL</span>
            </div>
          </header>

          {/* 2. Centerpiece: Monolithic Avatar & Titan Brandmark */}
          <main className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
            {/* Editorial Monolithic Avatar Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-52 rounded-xl bg-[#0D111A] border border-[#252D3A] p-2.5 shadow-2xl shadow-black/80"
            >
              {/* Precision Corner Crosshair Accents */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 text-[#1677FF] font-mono text-[9px] leading-none pointer-events-none select-none">
                +
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 text-[#252D3A] font-mono text-[9px] leading-none pointer-events-none select-none">
                +
              </div>
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 text-[#252D3A] font-mono text-[9px] leading-none pointer-events-none select-none">
                +
              </div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 text-[#C6FF3D] font-mono text-[9px] leading-none pointer-events-none select-none">
                +
              </div>

              {/* Real User Avatar Container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#151B26] border border-[#252D3A]/60">
                <Image
                  src={profileData.avatar}
                  alt={profileData.avatarAlt}
                  fill
                  sizes="(max-width: 640px) 120px, 180px"
                  priority
                  loading="eager"
                  className="object-cover object-top filter brightness-[0.98] contrast-[1.03]"
                />
                {/* Subtle base vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Accent baseline indicator */}
              <div className="absolute -bottom-[1px] left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#1677FF] to-transparent" />
            </motion.div>

            {/* Titan Brand Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F7FA] tracking-tight uppercase mt-6 mb-2 text-center"
            >
              {profileData.brandName}
            </motion.h1>

            {/* Dynamic Status Readout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#1677FF] tracking-widest uppercase text-center"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-ping" />
              <span>{getStatusText(progress)}</span>
            </motion.div>
          </main>

          {/* 3. Footer Bar: Prominent Percentage Counter & Progress Line */}
          <footer className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-3">
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] sm:text-xs text-[#697386] tracking-widest uppercase">
                  PROGRESS
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-[#A5ACB8] tracking-wider">
                  {isCompleted ? "INITIALIZED // READY" : "LOADING ASSETS"}
                </span>
              </div>

              {/* Prominent Counter: 01% -> 100% */}
              <div className="flex items-baseline font-display font-bold text-4xl sm:text-6xl md:text-7xl text-[#F5F7FA] tracking-tighter tabular-nums leading-none">
                <span>{formattedPercentage}</span>
                <span className="text-xl sm:text-3xl text-[#C6FF3D] ml-1">%</span>
              </div>
            </div>

            {/* High-Precision Progress Bar */}
            <div className="w-full h-[2px] bg-[#151B26] relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1677FF] via-[#1677FF] to-[#C6FF3D] relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              >
                {/* Acid Lime active tip spark */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C6FF3D] shadow-[0_0_8px_#C6FF3D]" />
              </motion.div>
            </div>

            {/* Minimalist System Diagnostic Footer Line */}
            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#697386] tracking-wider pt-1">
              <span>MEMORY: OPTIMAL</span>
              <span className="text-[#A5ACB8]">KRATOS DIGITAL OS &bull; 2026</span>
              <span>NETWORK: ONLINE</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
