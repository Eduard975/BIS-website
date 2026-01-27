import { memo, type CSSProperties } from "react";
import CustomContainer from "../CustomContainer";
import lightbulbSvg from "../../assets/svgs/bec.svg";
import groupPhotoImg from "../../assets/images/GroupPhotoStatue.jpg";

// --- CONFIGURATION ---
// Kept outside to prevent re-allocation on every render
const LAYOUT = {
  leftWidth: "w-[45%]",
  rightWidth: "w-[55%]",
  slants: {
    topLeftCut: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
    topLeftFill: "polygon(0 85%, 100% 100%, 0 100%)",
    topRight: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    botLeftTop: "polygon(0 0, 100% 0%, 0 10%)",
    botRightTop: "polygon(10% 0%, 100% 0%, 100% 25%)",
    botLeftBottom: "polygon(0 75%, 85% 100%, 0 100%)",
    botRightBottom: "polygon(20% 100%, 100% 80%, 100% 100%)",
  },
} as const;

interface GeometricShapeProps {
  className: string;
  clipPath: string;
}

// Memoized to optimize heavy CSS clip-path painting
const GeometricShape = memo(({ className, clipPath }: GeometricShapeProps) => (
  <div
    className={`absolute h-full pointer-events-none ${className}`}
    style={{ clipPath } as CSSProperties}
    aria-hidden="true"
  />
));
GeometricShape.displayName = "GeometricShape";

export const AboutPageHeader = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* ======================= TOP SECTION ======================= */}
      <section className="relative w-full bg-white">
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-white z-20 shadow-sm`}
          clipPath={LAYOUT.slants.topLeftCut}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-white z-20 shadow-sm`}
          clipPath={LAYOUT.slants.topRight}
        />
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-secondary/50 z-10`}
          clipPath={LAYOUT.slants.topLeftFill}
        />

        <CustomContainer className="relative z-30 pt-12 pb-24 flex flex-row items-center justify-between gap-4 md:gap-8">
          <header className="flex-1 flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl md:text-7xl font-bold text-primary leading-[1.1]">
              BEST Iași <br /> Symposium
            </h1>
            <p className="text-lg md:text-4xl text-darkTxt font-medium">
              Where ideas, people, <br /> and cultures connect.
            </p>
          </header>

          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={lightbulbSvg}
              alt="Lightbulb sketch"
              width="500"
              height="500"
              className="w-full max-w-[140px] md:max-w-[450px] object-contain -rotate-5"
              loading="eager"
            />
          </div>
        </CustomContainer>
      </section>

      {/* ======================= BOTTOM SECTION ======================= */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center bg-gray-900 overflow-hidden z-0 -mt-24">
        <img
          src={groupPhotoImg}
          alt="Students group"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchPriority="high"
        />

        <div className="absolute inset-0 z-10 bg-black/70" aria-hidden="true" />
        <div
          className="absolute inset-0 z-10 bg-[#004d5e]/30 mix-blend-overlay"
          aria-hidden="true"
        />

        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-secondary/50 z-10 mt-24`}
          clipPath={LAYOUT.slants.botLeftTop}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-secondary/50 z-10 mt-24`}
          clipPath={LAYOUT.slants.botRightTop}
        />
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-colorBG/50 z-20`}
          clipPath={LAYOUT.slants.botLeftBottom}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-colorBG/50 z-20`}
          clipPath={LAYOUT.slants.botRightBottom}
        />

        <CustomContainer className="relative z-30 pt-40 pb-24 text-white">
          <div className="flex flex-col text-left gap-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">How do I join?</h2>

            <article className="text-lg md:text-xl text-gray-100 flex flex-col gap-6 text-justify">
              <p>
                Join the BEST Iași Symposium! You can apply through two simple
                methods:
              </p>
              <ul className="text-left space-y-4 md:pl-10">
                {[
                  {
                    title: "Ingenium universities",
                    desc: "open to all enrolled at any Ingenium institution.",
                  },
                  {
                    title: "STEM universities",
                    desc: "outside Ingenium - open to all STEM students from other universities.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-bold text-primary">{index + 1}.</span>
                    <span>
                      For students at{" "}
                      <span className="font-semibold text-white">
                        {item.title}
                      </span>{" "}
                      - {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </CustomContainer>
      </section>
    </div>
  );
};
