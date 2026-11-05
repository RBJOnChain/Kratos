"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import MagneticButton from "../effects/MagneticButton";

function subscribeDate() {
  return () => {};
}
function getYear() {
  return new Date().getFullYear();
}
function getServerYear() {
  return 2026;
}

export default function Footer() {
  const currentYear = React.useSyncExternalStore(subscribeDate, getYear, getServerYear);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#252D3A] bg-[#080B12] pt-14 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#252D3A]/60">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <Link
              href="#hero"
              className="group inline-flex items-center gap-3 w-fit"
              data-interactive="true"
            >
              <div className="w-8 h-8 rounded-lg bg-[#151B26] border border-[#252D3A] relative overflow-hidden group-hover:border-[#1677FF] transition-colors shrink-0">
                <Image
                  src={profileData.logo}
                  alt={profileData.brandName}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#C6FF3D]" />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-[#F5F7FA]">
                {profileData.brandName}
              </span>
            </Link>
            <p className="font-mono text-xs text-[#A5ACB8] max-w-sm mt-1">
              Personal Web3 Digital Identity &bull; Exploring the culture beyond the timeline.
            </p>
          </div>

          {/* Social Links (5 cols) */}
          <div className="md:col-span-5 flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs">
            {socialLinks.map((s) =>
              s.url ? (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A5ACB8] hover:text-[#1677FF] flex items-center gap-1 transition-colors"
                  data-interactive="true"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span
                  key={s.id}
                  className="text-[#697386] flex items-center gap-1"
                  title="Discord Identifier"
                >
                  <span>{s.name}:</span>
                  <span className="text-[#A5ACB8]">{s.handle}</span>
                </span>
              )
            )}
          </div>

          {/* Back to top (2 cols) */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <MagneticButton>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#151B26] border border-[#252D3A] text-xs font-mono text-[#A5ACB8] hover:text-[#F5F7FA] hover:border-[#1677FF] hover:bg-[#1D2535] transition-all group"
                aria-label="Scroll back to top"
                data-interactive="true"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#1677FF] group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#697386]">
          <div>
            &copy; {currentYear} {profileData.brandName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
            <span>ENCRYPTED TIMELINE BROADCAST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

