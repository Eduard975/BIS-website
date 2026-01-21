import React from "react";

interface OverprintTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function OverprintTitle({
  title,
  subtitle,
  className = "",
}: OverprintTitleProps) {
  return (
    // 1. Grid Layout: Creates a stack where both items occupy the same space (1st col, 1st row).
    // The container will now naturally stretch to fit the huge subtitle.
    <div
      className={`grid grid-cols-1 grid-rows-1 items-center justify-items-start ${className}`}
    >
      {/* Subtitle (Background) */}
      <span
        className="
          col-start-1 row-start-1
          text-3xl md:text-[3rem]
          font-subtitle
          text-primary/20 
          whitespace-nowrap 
          z-0 
          select-none 
          uppercase 
          tracking-widest
          leading-none
          
          /* 2. Offset Logic: 
             To replicate your 'higher' look without breaking the hitbox, 
             we add margin-bottom. This pushes the subtitle 'up' relative 
             to the center, and the box grows to keep it safe.
          */
          mb-6 md:mb-8
        "
      >
        {subtitle}
      </span>

      {/* Title (Foreground) */}
      <h2
        className="
          col-start-1 row-start-1
          z-10 
          text-xl md:text-2xl 
          font-title
          text-darkTxt 
          uppercase 
          tracking-wide 
          leading-none

          /* Pushes the title slightly down to contrast with the lifted subtitle */
          mt-2
        "
      >
        {title}
      </h2>
    </div>
  );
}
