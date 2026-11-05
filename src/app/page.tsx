"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SocialSection from "@/components/social/SocialSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import ParticleBackground from "@/components/effects/ParticleBackground";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Preloader from "@/components/effects/Preloader";
import { useLenis } from "@/hooks/useLenis";

export default function HomePage() {
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  // Initialize Lenis smooth scrolling with GSAP ScrollTrigger synchronization
  useLenis();

  return (
    <>
      {/* Full-Screen Cinematic Preloader */}
      {isPreloaderActive && (
        <Preloader onComplete={() => setIsPreloaderActive(false)} />
      )}

      {/* Top Futuristic Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Cyberpunk Interactive Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Deep Space / Cyber Atmosphere Background */}
      <ParticleBackground />

      {/* Primary Fixed Navigation Bar */}
      <Navbar />

      {/* Exactly 4 Primary Sections */}
      <main className="relative z-10 flex flex-col w-full">
        {/* SECTION 01 — HERO EXPERIENCE */}
        <HeroSection />

        {/* SECTION 02 — ABOUT KRATOS */}
        <AboutSection />

        {/* SECTION 03 — SOCIAL IDENTITY */}
        <SocialSection />

        {/* SECTION 04 — CONNECT / FOOTER */}
        <ContactSection />
      </main>

      {/* Persistent Closing Footer */}
      <Footer />
    </>
  );
}
