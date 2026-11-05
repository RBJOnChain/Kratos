import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  className,
  children,
  containerClassName,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        !noPadding && "py-20 sm:py-24 md:py-32 lg:py-40",
        className
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

