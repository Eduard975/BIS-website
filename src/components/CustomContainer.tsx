import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  paddingX?: "normal" | "tight" | "none";
  /**
   * "standard" = Standard layout (~1280px)
   * "wide"     = Wide layout (90% of screen)
   * "full"     = Edge to edge
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
  // UPDATED: Using vw units ensures padding scales with the device size
  const paddingClasses = {
    normal: "px-[5vw] md:px-[2vw]",
    tight: "px-[3vw] md:px-[1.5vw]",
    none: "",
  };

  // UPDATED: Replaced fixed pixels with responsive max-widths
  const widthClasses = {
    standard: "max-w-7xl", // Standard Tailwind max-width (~1280px)
    wide: "max-w-[95vw] 2xl:max-w-[90vw]", // Wide but with safety margins
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
