import React from "react";
import CustomContainer from "./CustomContainer";

interface SectionProps {
  children: React.ReactNode;
  bg?: string;
  decoration?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
}

export const CustomSection = ({
  children,
  bg = "bg-whiteBG",
  decoration,
  className = "",
  contentClassName = "",
  id,
}: SectionProps) => {
  return (
    <section id={id} className={`relative w-full ${bg} ${className}`}>
      {decoration}

      <CustomContainer
        width="standard"
        paddingX="normal"
        className={`py-16 md:py-24 ${contentClassName}`}
      >
        {children}
      </CustomContainer>
    </section>
  );
};
