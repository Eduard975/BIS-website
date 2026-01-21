import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  paddingX?: "normal" | "tight" | "none";
  /**
   * "standard" = 1200px (Good for text/articles)
   * "wide"     = 1440px (Good for Navbars/Footers on large screens)
   * "full"     = 100%   (Edge to edge)
   */
  width?: "standard" | "wide" | "full";
  className?: string;
  id?: string;
}

export default function CustomContainer({
  children,
  paddingX = "normal",
  width = "standard",
  className = "",
  id,
}: ContainerProps) {
  const paddingClasses = {
    normal: "px-6 md:px-8",
    tight: "px-4 md:px-6",
    none: "",
  };

  // Define your max-widths here
  const widthClasses = {
    standard: "max-w-[1200px]",
    wide: "max-w-[1536px]", // Matches Tailwind's '2xl' breakpoint. Much wider.
    full: "max-w-full",
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto ${widthClasses[width]} ${paddingClasses[paddingX]} ${className}`}
    >
      {children}
    </div>
  );
}
