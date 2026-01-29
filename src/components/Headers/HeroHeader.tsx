import React from "react";
import CustomContainer from "../Universal/CustomContainer"; // Ensure this path matches where you saved the file

type ContentAlignment = "center" | "left" | "bottom-left";

interface HeroHeaderProps {
  /** The source URL of the large background image */
  backgroundImageSrc: string;
  /** Alt text for accessibility */
  imageAlt?: string;
  /** The content to display on top of the image */
  children: React.ReactNode;
  /** Height control. Default: 'min-h-[600px]' */
  heightClass?: string;
  /** Background color of overlay. Default: 'bg-black' */
  overlayColorClass?: string;
  /** Opacity of overlay. Default: 'opacity-60' */
  overlayOpacityClass?: string;
  /** Position of the content block. Default: 'left' */
  alignContent?: ContentAlignment;
}

// Helper to map alignment props to Tailwind Flexbox classes
const alignmentMap: Record<ContentAlignment, string> = {
  center: "items-center justify-center text-center",
  left: "items-center justify-start text-left",
  "bottom-left": "items-end justify-start text-left pb-16",
};

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  backgroundImageSrc,
  imageAlt = "Header background",
  children,
  heightClass = "min-h-[400px]",
  overlayColorClass = "bg-black",
  overlayOpacityClass = "opacity-60",
  alignContent = "left",
}) => {
  return (
    <header
      className={`relative w-full ${heightClass} flex overflow-hidden group`}
    >
      {/* 1. The Background Image */}
      <img
        src={backgroundImageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full 
        object-cover object-center 
        transition-transform duration-700 group-hover:scale-105"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />

      {/* 2. The Overlay */}
      <div
        className={`absolute inset-0
           pointer-events-none ${overlayColorClass} ${overlayOpacityClass}`}
        aria-hidden="true"
      />

      {/* 3. The Content Container */}
      {/* WE USE YOUR CONTAINER HERE.
          - width="standard": Ensures text aligns with the 1200px page grid.
          - paddingX="normal": Ensures standard px-6/px-8 spacing.
          - h-full + flex: Essential so the vertical alignment (items-center) works.
          - relative z-10: Places text above the overlay.
      */}
      <CustomContainer
        width="standard"
        paddingX="normal"
        className={`relative z-10 h-full flex py-12 ${alignmentMap[alignContent]}`}
      >
        {/* We limit the inner text width so lines don't get too long to read */}
        <div className="max-w-3xl w-full">{children}</div>
      </CustomContainer>
    </header>
  );
};
