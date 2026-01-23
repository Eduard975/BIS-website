import type { CSSProperties } from "react";
import CustomContainer from "../CustomContainer";
import lightbulbSvg from "../../assets/svgs/bec.svg";
import groupPhotoImg from "../../assets/images/GroupPhotoStatue.jpg";

// --- CONFIGURATION ---
const LAYOUT = {
  leftWidth: "w-[45%]",
  rightWidth: "w-[55%]",
  slants: {
    // Top Section
    topLeftCut: "polygon(0 0, 100% 0, 100% 100%, 0 85%)", // White Block (Cuts corner)
    topLeftFill: "polygon(0 85%, 100% 100%, 0 100%)", // Teal Fill (Fills corner)
    topRight: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // White Block (Full)

    // Bottom Section (Banner Overlays)
    botLeftTop: "polygon(0 0, 100% 0%, 0 10%)", // Top Left Triangle
    botRightTop: "polygon(10% 0%, 100% 0%, 100% 25%)", // Top Right Triangle
    botLeftBottom: "polygon(0 75%, 85% 100%, 0 100%)", // Bottom Left Triangle
    botRightBottom: "polygon(20% 100%, 100% 80%, 100% 100%)", // Bottom Right Triangle
  },
};

// --- REUSABLE COMPONENT ---
const GeometricShape = ({
  className,
  clipPath,
}: {
  className: string;
  clipPath: string;
}) => (
  <div
    className={`absolute h-full pointer-events-none ${className}`}
    style={{ clipPath } as CSSProperties}
    aria-hidden="true"
  />
);

export const AboutPageHeader = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* ======================= TOP SECTION ======================= */}
      <div className="relative w-full bg-white">
        {/* 1. White Background Blocks (z-20 to stay on top) */}
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-white z-20 shadow-sm`}
          clipPath={LAYOUT.slants.topLeftCut}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-white z-20 shadow-sm`}
          clipPath={LAYOUT.slants.topRight}
        />

        {/* 2. Top Left Fill (z-10 to sit under white block but above bg) */}
        {/* FIXED: Restored z-10 to ensure visibility */}
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-secondary/50 z-10`}
          clipPath={LAYOUT.slants.topLeftFill}
        />

        {/* Content */}
        <CustomContainer className="relative z-30 pt-12 pb-24 flex flex-col md:flex-row items-start gap-8">
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

          <div className="w-full md:w-1/2 flex justify-center relative">
            <img
              src={lightbulbSvg}
              alt="Lightbulb sketch"
              width="500"
              height="500"
              className="w-full max-w-1/2 md:max-w-[500px] object-contain -rotate-5"
              loading="eager"
            />
          </div>
        </CustomContainer>
      </div>

      {/* ======================= BOTTOM SECTION ======================= */}
      <div className="relative w-full min-h-[600px] flex items-center bg-gray-900 overflow-hidden z-0 -mt-24">
        {/* Background Image */}
        <img
          src={groupPhotoImg}
          alt="Students group"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchPriority="high"
        />

        {/* Overlays (Kept separate for correct mix-blend behavior) */}
        <div className="absolute inset-0 z-10 bg-black/70" aria-hidden="true" />
        <div
          className="absolute inset-0 z-10 bg-[#004d5e]/30 mix-blend-overlay"
          aria-hidden="true"
        />

        {/* Top Edge Triangles (Teal) */}
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-secondary/50 z-10 mt-24`}
          clipPath={LAYOUT.slants.botLeftTop}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-secondary/50 z-10 mt-24`}
          clipPath={LAYOUT.slants.botRightTop}
        />

        {/* Bottom Edge Triangles (Darker) */}
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-colorBG/50 z-20`}
          clipPath={LAYOUT.slants.botLeftBottom}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-colorBG/50 z-20`}
          clipPath={LAYOUT.slants.botRightBottom}
        />

        {/* Content */}
        <CustomContainer
          width="standard"
          paddingX="normal"
          className="relative z-30 pt-40 pb-24 text-white"
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
                  <span className="font-bold text-primary">1.</span>
                  <span>
                    For students at{" "}
                    <span className="font-semibold text-white">
                      Ingenium universities
                    </span>{" "}
                    - open to all enrolled at any Ingenium institution.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>
                    For students at{" "}
                    <span className="font-semibold text-white">
                      STEM universities
                    </span>{" "}
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
