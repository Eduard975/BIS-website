/* src/components/Headers/HeroHeader.tsx */
import React from "react";
import CustomContainer from "../Universal/CustomContainer";

type ContentAlignment = "center" | "left" | "bottom-left";
type ImagePosition = "center" | "top" | "bottom" | "left" | "right";
// Added object-fit types
type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";

interface HeroHeaderProps {
  backgroundImageSrc: string;
  imageAlt?: string;
  children?: React.ReactNode; // Made optional if you're passing undefined
  heightClass?: string;
  overlayColorClass?: string;
  overlayOpacityClass?: string;
  alignContent?: ContentAlignment;
  imagePosition?: ImagePosition;
  objectFit?: ObjectFit; // NEW PROP
  customImgStyle?: React.CSSProperties;
}

const alignmentMap: Record<ContentAlignment, string> = {
  center: "items-center justify-center text-center",
  left: "items-center justify-start text-left",
  "bottom-left": "items-end justify-start text-left pb-16",
};

const objectPositionMap: Record<ImagePosition, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  backgroundImageSrc,
  imageAlt = "Header background",
  children,
  heightClass = "min-h-[400px]",
  overlayColorClass = "bg-black",
  overlayOpacityClass = "opacity-60",
  alignContent = "left",
  imagePosition = "center",
  objectFit = "cover", // Defaulting to your original style
  customImgStyle,
}) => {
  return (
    <header
      className={`relative w-full ${heightClass} flex overflow-hidden group`}
    >
      <img
        src={backgroundImageSrc}
        alt={imageAlt}
        className={`absolute inset-0 w-full h-full transition-transform duration-700 
          ${!customImgStyle ? objectPositionMap[imagePosition] : ""}
          ${`object-${objectFit}`} 
        `}
        style={customImgStyle}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />

      <div
        className={`absolute inset-0 pointer-events-none ${overlayColorClass} ${overlayOpacityClass}`}
        aria-hidden="true"
      />

      <CustomContainer
        width="standard"
        paddingX="normal"
        className={`relative z-10 h-full flex py-12 ${alignmentMap[alignContent]}`}
      >
        <div className="max-w-3xl w-full">{children}</div>
      </CustomContainer>
    </header>
  );
};
