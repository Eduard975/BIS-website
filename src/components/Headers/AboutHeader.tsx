import { type CSSProperties, memo } from "react";
import CustomContainer from "../CustomContainer";
import lightbulbSvg from "../../assets/svgs/bec.svg";
import groupPhotoImg from "../../assets/images/GroupPhotoStatue.jpg";

// 1. Extract Geometric Shapes to a lightweight, memoized component
// This keeps the main logic clean and reduces DOM re-render cost.
interface GeoShapeProps {
  className: string;
  clipPath: string;
}

const GeometricShape = memo(({ className, clipPath }: GeoShapeProps) => (
  <div
    className={`absolute h-full ${className}`}
    style={{ clipPath } as CSSProperties}
    aria-hidden="true" // 3. Accessibility: Hide decorative shapes from screen readers
  />
));

export const AboutPageHeader = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* =========================================================
          TOP SECTION WRAPPER
          ========================================================= */}
      <div className="relative w-full bg-white">
        {/* Top Left White Block */}
        <GeometricShape
          className="top-0 left-0 w-[45%] bg-white z-20 shadow-sm"
          clipPath="polygon(0 0, 100% 0, 100% 100%, 0 85%)"
        />

        {/* Top Left Teal Filler */}
        <GeometricShape
          className="top-0 left-0 w-[45%] bg-secondary/50 z-10"
          clipPath="polygon(0 85%, 100% 100%, 0 100%)"
        />

        {/* Top Right White Block */}
        <GeometricShape
          className="top-0 right-0 w-[55%] bg-white z-20 shadow-sm"
          clipPath="polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        />

        {/* CONTENT LAYER */}
        <CustomContainer className="relative z-30 pt-12 pb-24 flex flex-col md:flex-row items-start gap-8">
          {/* Left: Text Block */}
          <div className="w-fit md:w-1/2 flex flex-col gap-6 pt-4 md:pt-8">
            <header className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-7xl font-bold text-primary leading-tight">
                BEST Iași <br /> Symposium
              </h1>
              <p className="text-xl md:text-4xl text-darkTxt font-medium mt-2">
                Where ideas, people, <br /> and cultures connect.
              </p>
            </header>
          </div>

          {/* Right: Lightbulb Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* 2. Performance: SVG is lightweight, but ensure it has width/height to prevent layout shift */}
            <img
              src={lightbulbSvg}
              alt="Artistic sketch of a lightbulb"
              width="500"
              height="500"
              className="w-full max-w-1/2 md:max-w-[500px] object-contain -rotate-5"
              loading="eager" // Load immediately as it is above the fold
            />
          </div>
        </CustomContainer>
      </div>

      {/* =========================================================
          BOTTOM SECTION: IMAGE BANNER
          ========================================================= */}
      {/* Note: -mt-25 is not standard Tailwind. using -mt-24 (6rem) or arbitrary -mt-[100px] is safer. */}
      <div className="relative w-full min-h-[600px] flex items-center bg-gray-900 overflow-hidden z-0 -mt-24">
        {/* Background Image Optimization */}
        {/* 2. Performance: High priority for Hero images to improve LCP */}
        <img
          src={groupPhotoImg}
          alt="Group of students gathered around a statue"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchPriority="high" // Crucial for LCP (Largest Contentful Paint)
          decoding="async"
        />

        {/* Static Overlays */}
        <div className="absolute inset-0 bg-black/70 z-10" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[#004d5e]/30 mix-blend-overlay z-10"
          aria-hidden="true"
        />

        {/* Geometric Overlays (Refactored) */}
        {/* Left Triangle (Top) */}
        <GeometricShape
          className="top-0 left-0 w-[45%] bg-secondary/50 z-10 mt-24" // Added mt-24 to offset the parent's negative margin if needed
          clipPath="polygon(0 0, 100% 0%, 0 10%)"
        />

        {/* Right Triangle (Top) */}
        <GeometricShape
          className="top-0 right-0 w-[55%] bg-secondary/50 z-10 mt-24"
          clipPath="polygon(10% 0%, 100% 0%, 100% 25%)"
        />

        {/* Left Triangle (Bottom) */}
        <GeometricShape
          className="top-0 left-0 w-[45%] bg-colorBG/50 z-30 pointer-events-none"
          clipPath="polygon(0 75%, 85% 100%, 0 100%)"
        />

        {/* Right Triangle (Bottom) */}
        <GeometricShape
          className="top-0 right-0 w-[55%] bg-colorBG/50 z-30 pointer-events-none"
          clipPath="polygon(20% 100%, 100% 80%, 100% 100%)"
        />

        {/* Content Container */}
        <CustomContainer
          width="standard"
          paddingX="normal"
          className="relative z-40 pt-40 pb-24 text-white"
        >
          <div className="flex flex-col items-left text-left gap-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              How do I join
            </h2>

            <article className="text-lg md:text-xl text-gray-100 flex flex-col gap-6 text-justify">
              <p>
                Join the BEST Iași Symposium! You can apply through two simple
                methods:
              </p>

              <ul className="text-left space-y-4 md:pl-10">
                <li className="flex gap-3">
                  <span className="font-bold text-[#00A499]">1.</span>
                  <span>
                    For students at{" "}
                    <span className="font-semibold">Ingenium universities</span>{" "}
                    - open to all enrolled at any Ingenium institution.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#00A499]">2.</span>
                  <span>
                    For students at{" "}
                    <span className="font-semibold">STEM universities</span>{" "}
                    outside Ingenium - open to all STEM students from other
                    universities.
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};
