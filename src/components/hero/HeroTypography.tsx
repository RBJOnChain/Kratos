"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import Button from "../ui/Button";
import GlitchText from "../effects/GlitchText";

export default function HeroTypography() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center text-left w-full max-w-2xl"
    >
      {/* Minimal Technical Breadcrumb */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="font-mono text-xs text-[#1677FF] font-semibold tracking-widest uppercase">
          [01 // IDENTITY]
        </span>
        <span className="w-8 h-[1px] bg-[#252D3A]" />
        <span className="font-mono text-[11px] text-[#A5ACB8] tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
          ACTIVE IDENTITY
        </span>
      </motion.div>

      {/* Main Titan Heading: KRATOS */}
      <motion.h1
        variants={itemVariants}
        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#F5F7FA] uppercase leading-none select-none mb-4"
      >
        <GlitchText text={profileData.displayName} />
      </motion.h1>

      {/* Primary Tagline */}
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1677FF] uppercase">
          {profileData.tagline}
        </h2>
      </motion.div>

      {/* Editorial Brutalist Identity Strip */}
      <motion.div variants={itemVariants} className="mb-10">
        <p className="font-mono text-xs sm:text-sm font-medium tracking-widest text-[#A5ACB8] uppercase leading-relaxed border-l-2 border-[#252D3A] pl-4">
          CT GUY <span className="text-[#1677FF] mx-1.5">/</span> SHITPOSTER <span className="text-[#C6FF3D] mx-1.5">/</span> CAMPAIGN HUNTER <span className="text-[#1677FF] mx-1.5">/</span> WEB3 CONTRIBUTOR
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-4"
      >
        <Button
          variant="primary"
          size="lg"
          href="#about"
          icon={<ArrowDown className="w-4 h-4" />}
        >
          EXPLORE MY WORLD
        </Button>

        <Button
          variant="secondary"
          size="lg"
          href="https://x.com/KratosOnWeb3"
          isExternal
          icon={<ArrowUpRight className="w-4 h-4 text-[#1677FF]" />}
        >
          CONNECT ON X
        </Button>
      </motion.div>
    </motion.div>
  );
}
