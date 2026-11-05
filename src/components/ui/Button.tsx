"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MagneticButton from "../effects/MagneticButton";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "lime";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  magnetic?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  magnetic = true,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-[#1677FF] text-white hover:bg-[#1677FF]/90 shadow-[0_0_20px_rgba(22,119,255,0.45)] hover:shadow-[0_0_35px_rgba(22,119,255,0.65)] border border-[#1677FF]/60 cyber-cut-sm",
    secondary:
      "bg-[#151B26] text-[#F5F7FA] hover:bg-[#1D2535] hover:text-white border border-[#252D3A] hover:border-[#1677FF]/50 shadow-sm cyber-cut-sm",
    outline:
      "bg-transparent text-[#F5F7FA] hover:text-[#1677FF] border border-[#252D3A] hover:border-[#1677FF] hover:bg-[#1677FF]/5 cyber-cut-sm",
    lime:
      "bg-[#C6FF3D] text-[#080B12] font-bold hover:bg-[#D4FF66] shadow-[0_0_20px_rgba(198,255,61,0.4)] hover:shadow-[0_0_35px_rgba(198,255,61,0.65)] border border-[#C6FF3D] cyber-cut-sm",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    "group",
    className
  );

  if (href) {
    if (isExternal) {
      const linkElement = (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          data-interactive="true"
        >
          {content}
        </a>
      );
      return magnetic ? <MagneticButton>{linkElement}</MagneticButton> : linkElement;
    }

    const nextLinkElement = (
      <Link href={href} className={combinedClasses} data-interactive="true">
        {content}
      </Link>
    );
    return magnetic ? <MagneticButton>{nextLinkElement}</MagneticButton> : nextLinkElement;
  }

  const buttonElement = (
    <button className={combinedClasses} data-interactive="true" {...props}>
      {content}
    </button>
  );

  return magnetic ? <MagneticButton>{buttonElement}</MagneticButton> : buttonElement;
}

