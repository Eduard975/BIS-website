import React from "react";
import OverprintTitle from "./OverprintTitle";
import { PrimaryButton } from "./PrimaryButton";

interface SectionContentProps {
  title: string;
  subtitle: string;
  /** Main body text */
  children: React.ReactNode;
  /** If omitted, the button will not render */
  buttonText?: string;
  /** Action for the button */
  onButtonClick?: () => void;
  /** * Adjust width here.
   * Default: "w-full md:w-1/2"
   * Example: "w-full md:w-2/3" or "w-full"
   */
  className?: string;
}

export const SectionContent = ({
  title,
  subtitle,
  children,
  buttonText,
  onButtonClick,
  // Default is 50% width on desktop, full on mobile
  className = "w-full md:w-1/2",
}: SectionContentProps) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <OverprintTitle title={title} subtitle={subtitle} />

      {/* Container for text with consistent spacing */}
      <div className="text-justify w-full text-darkTxt space-y-4">
        {children}
      </div>

      {/* Only render button if both text and handler are provided */}
      {buttonText && onButtonClick && (
        <PrimaryButton size="normal" onClick={onButtonClick}>
          {buttonText}
        </PrimaryButton>
      )}
    </div>
  );
};
