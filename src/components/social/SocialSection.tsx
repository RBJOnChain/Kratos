"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import SocialCard from "./SocialCard";
import { socialLinks } from "@/data/socialLinks";

export default function SocialSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="social" className="relative border-t border-[#252D3A]/60">
      {/* Background cyber lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C6FF3D]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <SectionHeading
        index="03"
        tag="NETWORK TRANSMISSION"
        title="FIND ME IN THE ECOSYSTEM."
        subtitle="Primary frequencies and verified access points. Follow the timeline, intercept signals, or open a direct channel."
      />

      {/* 3 Platform Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
      >
        {socialLinks.map((platform, idx) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            className="flex"
          >
            <div className="w-full flex">
              <SocialCard platform={platform} index={idx} />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

