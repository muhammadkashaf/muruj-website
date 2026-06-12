"use client";

import type { ReactNode } from "react";

type ScrollButtonProps = {
  children: ReactNode;
  className?: string;
  sectionId: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function ScrollButton({
  children,
  className = "",
  sectionId,
  onClick,
  ariaLabel,
}: ScrollButtonProps) {
  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClick?.();
  };

  return (
    <button type="button" aria-label={ariaLabel} onClick={scrollToSection} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
