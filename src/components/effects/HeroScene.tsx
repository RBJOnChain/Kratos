"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function checkWebgl(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const isTouchOrMobile = window.matchMedia("(pointer: coarse), (max-width: 1023px)").matches;
    if (isTouchOrMobile) return false; // Strictly bypass WebGL on mobile devices for battery & performance

    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function subscribeWebgl() {
  return () => {};
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const webglSupported = useSyncExternalStore(subscribeWebgl, checkWebgl, () => false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReduced || !webglSupported) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // High-performance Three.js setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 800);
    camera.position.z = 60;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false, // Turn off heavy MSAA for peak frame rates
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap DPR to 1.5 for efficiency
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Minimalist Editorial Architectural Depth: Subtle Floating Coordinate Nodes
    // Reduced particle count from 220 down to 70 for lightweight elegance
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x1677ff);
    const colorLime = new THREE.Color(0xc6ff3d);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const chosenColor = i % 8 === 0 ? colorLime : colorBlue;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Subtle Structural Perspective Plane (Brutalist Grid Wireframe)
    const gridGeo = new THREE.PlaneGeometry(160, 100, 16, 10);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x1677ff,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.position.z = -20;
    gridMesh.rotation.x = 0.2;
    scene.add(gridMesh);

    // Mouse movement parallax (smooth interpolation)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // Render loop with Visibility & IntersectionObserver controls
    let animationFrameId: number;
    let isVisible = true;
    const startTime = performance.now();

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible && !animationFrameId) {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Observer to pause rendering when user scrolls beyond the Hero section
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting && document.visibilityState === "visible";
        if (isVisible && !animationFrameId) {
          animate();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      particles.rotation.y = elapsedTime * 0.015 + targetX * 0.08;
      particles.rotation.x = targetY * 0.05;

      gridMesh.rotation.z = Math.sin(elapsedTime * 0.05) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeo.dispose();
      particleMat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      renderer.dispose();
    };
  }, [prefersReduced, webglSupported]);

  // Clean CSS Fallback on mobile or when WebGL is inactive
  if (prefersReduced || !webglSupported) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-[#1677FF]/8 blur-[70px]" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
