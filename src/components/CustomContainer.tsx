import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  paddingX?: "normal" | "tight" | "none";
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
  // Now using CSS variables for easy global editing
  const paddingClasses = {
    normal: "px-[var(--container-padding)]",
    tight: "px-[var(--container-padding-tight)]",
    none: "px-0",
  };

  const widthClasses = {
    standard: "max-w-7xl",
    wide: "max-w-[95vw] 2xl:max-w-[90vw]",
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
