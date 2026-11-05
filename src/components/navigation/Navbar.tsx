"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080B12]/85 backdrop-blur-md border-b border-[#252D3A] py-3.5 shadow-lg shadow-black/50"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded"
            data-interactive="true"
          >
            <div className="w-8 h-8 rounded-lg bg-[#151B26] border border-[#252D3A] relative overflow-hidden group-hover:border-[#1677FF] transition-colors shrink-0 shadow-sm">
              <Image
                src={profileData.logo}
                alt={profileData.brandName}
                fill
                sizes="32px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#C6FF3D]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA] group-hover:text-white transition-colors">
                {profileData.brandName}
              </span>
              <span className="font-mono text-[9px] text-[#A5ACB8] tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-pulse inline-block" />
                TIMELINE ACTIVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#0D111A]/80 border border-[#252D3A] px-4 py-1.5 rounded-full backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-[#A5ACB8] hover:text-[#F5F7FA] hover:bg-[#151B26] px-3.5 py-1.5 rounded-full transition-all duration-200"
                data-interactive="true"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="https://x.com/KratosOnWeb3"
              isExternal
              icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#1677FF]" />}
              className="hidden sm:inline-flex"
            >
              FOLLOW ON X
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded border border-[#252D3A] bg-[#151B26] flex items-center justify-center text-[#F5F7FA] hover:text-[#1677FF] hover:border-[#1677FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              data-interactive="true"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#252D3A] bg-[#080B12]/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between font-mono text-sm text-[#A5ACB8] hover:text-[#C6FF3D] hover:bg-[#151B26] px-4 py-3 rounded border border-transparent hover:border-[#252D3A] transition-all"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#1677FF]">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#252D3A] mt-2 flex flex-col gap-2">
              <a
                href="https://x.com/KratosOnWeb3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded bg-[#1677FF] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(22,119,255,0.4)]"
              >
                <span>CONNECT ON X</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

