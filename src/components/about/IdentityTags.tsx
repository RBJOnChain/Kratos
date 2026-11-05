"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Compass, Zap, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

const TAGS: TagItem[] = [
  {
    id: "ct-guy",
    name: "CT GUY",
    desc: "Living on the Crypto Twitter timeline 24/7. Tracking real-time shifts, market sentiment, and community pulses.",
    icon: <Terminal className="w-4 h-4 text-[#1677FF]" />,
  },
  {
    id: "shitposter",
    name: "SHITPOSTER",
    desc: "Unfiltered commentary, high-signal memes, and cultural critique that keeps Web3 grounded and fun.",
    icon: <Flame className="w-4 h-4 text-[#C6FF3D]" />,
  },
  {
    id: "campaign-hunter",
    name: "CAMPAIGN HUNTER",
    desc: "Scouting early testnets, reward quests, retroactive distributions, and next-generation token launches.",
    icon: <Zap className="w-4 h-4 text-[#1677FF]" />,
  },
  {
    id: "web3-contributor",
    name: "WEB3 CONTRIBUTOR",
    desc: "Participating in test networks, liquidity experiments, governance discussions, and feedback loops.",
    icon: <Shield className="w-4 h-4 text-[#C6FF3D]" />,
  },
  {
    id: "early-explorer",
    name: "EARLY PROJECT EXPLORER",
    desc: "Diving into new L1/L2s, cross-chain primitives, and experimental on-chain protocols before consensus.",
    icon: <Compass className="w-4 h-4 text-[#1677FF]" />,
  },
];

export default function IdentityTags() {
  const [activeTag, setActiveTag] = useState<string>("ct-guy");
  const selected = TAGS.find((t) => t.id === activeTag) || TAGS[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Interactive Tag Chips */}
      <div className="flex flex-wrap gap-2.5">
        {TAGS.map((tag) => {
          const isActive = tag.id === activeTag;
          return (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={cn(
                "group relative flex items-center gap-2 px-4 py-2.5 rounded-lg border font-mono text-xs uppercase tracking-wider transition-all duration-300",
                isActive
                  ? "bg-[#151B26] border-[#1677FF] text-[#F5F7FA] shadow-[0_0_15px_rgba(22,119,255,0.35)]"
                  : "bg-[#0D111A] border-[#252D3A] text-[#A5ACB8] hover:border-[#1677FF]/60 hover:text-[#F5F7FA]"
              )}
              data-interactive="true"
            >
              {tag.icon}
              <span>{tag.name}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] shadow-[0_0_6px_#C6FF3D]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Tag Dynamic Description Console */}
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-5 sm:p-6 rounded-xl bg-[#0D111A]/90 border border-[#252D3A] cyber-cut relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1677FF]/10 blur-[50px] pointer-events-none" />
        <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#1677FF]">
          <span>{"// IDENTITY PILLAR:"}</span>
          <span className="text-[#C6FF3D] font-bold">{selected.name}</span>
        </div>
        <p className="text-[#F5F7FA] text-sm sm:text-base font-sans leading-relaxed">
          {selected.desc}
        </p>
      </motion.div>
    </div>
  );
}

