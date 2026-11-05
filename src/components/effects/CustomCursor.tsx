"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function subscribeTouch(callback: () => void) {
  const mq = window.matchMedia("(pointer: coarse)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getTouchSnapshot() {
  return window.matchMedia("(pointer: coarse)").matches;
}

function getTouchServerSnapshot() {
  return true;
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const isTouchDevice = useSyncExternalStore(
    subscribeTouch,
    getTouchSnapshot,
    getTouchServerSnapshot
  );
  const prefersReduced = useReducedMotion();

  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });

  const dotX = useSpring(0, { stiffness: 1000, damping: 45 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 45 });

  useEffect(() => {
    if (isTouchDevice || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, [data-interactive="true"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, isTouchDevice, prefersReduced]);

  if (isTouchDevice || prefersReduced || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer energy aura ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? "#C6FF3D" : "#1677FF",
          backgroundColor: isHovered ? "rgba(198, 255, 61, 0.08)" : "rgba(22, 119, 255, 0.04)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="w-8 h-8 rounded-full border border-[#1677FF]/60 shadow-[0_0_12px_rgba(22,119,255,0.45)] backdrop-blur-[0.5px]"
      />

      {/* Center sharp pulse core */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#C6FF3D" : "#1677FF",
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_#1677FF]"
      />
    </div>
  );
}
