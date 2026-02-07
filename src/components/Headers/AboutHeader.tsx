import { lazy, memo, Suspense, useState, type CSSProperties } from "react";
import CustomContainer from "../Universal/CustomContainer";
import lightbulbSvg from "../../assets/svgs/bec.svg";
import groupPhotoImg from "../../assets/images/group-statue.webp";
import ReactGA from "react-ga4";

const LAYOUT = {
  leftWidth: "w-[45.1%]",
  rightWidth: "w-[55.1%]",
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

const GeometricShape = memo(({ className, clipPath }: GeometricShapeProps) => (
  <div
    className={`absolute h-full pointer-events-none ${className}`}
    style={{ clipPath } as CSSProperties}
    aria-hidden="true"
  />
));

const revealLoader = () => import("../PageSpecific/About/ConditionalReveal");
const ConditionalReveal = lazy(revealLoader);

export const AboutPageHeader = () => {
  const [studentType, setStudentType] = useState<"ingenium/stem" | "best" | "">(
    "",
  );
  const isJoinPeriodActive = false;

  const handleMouseEnter = () => {
    revealLoader();
  };

  const handleSelectionChange = (value: "ingenium/stem" | "best" | "") => {
    setStudentType(value);
    const pagePath = window.location.pathname.substring(1) || "Home";
    const pageCategory = pagePath.charAt(0).toUpperCase() + pagePath.slice(1);

    if (value !== "") {
      ReactGA.event({
        category: `Page: ${pageCategory}`,
        action: "Select Student Origin",
        label:
          value === "ingenium/stem"
            ? "INGENIUM Alliance/STEM Student"
            : "BEST Member",
      });
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* ======================= TOP SECTION ======================= */}
      <section className="relative w-full bg-white">
        <GeometricShape
          className={`top-0 left-0 ${LAYOUT.leftWidth} bg-white z-20`}
          clipPath={LAYOUT.slants.topLeftCut}
        />
        <GeometricShape
          className={`top-0 right-0 ${LAYOUT.rightWidth} bg-white z-20`}
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

      <section
        id="how-to-join"
        className="relative w-full min-h-[500px] 
        md:min-h-[600px] flex items-center bg-gray-900 overflow-hidden z-0 -mt-24"
      >
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

        <CustomContainer className="relative z-30 pt-48 pb-24 text-white">
          <div className="flex flex-col gap-10 max-w-2xl mx-auto text-center md:text-left">
            <div
              className="space-y-6"
              onMouseEnter={handleMouseEnter}
              onFocus={handleMouseEnter}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {isJoinPeriodActive ? "Ready to Join?" : "Coming Soon!"}
              </h2>

              {isJoinPeriodActive ? (
                /* ======================= ACTIVE JOIN PERIOD ======================= */
                <div className="flex flex-col md:flex-row items-center gap-3 text-lg md:text-xl font-medium text-gray-200">
                  <span>I am a student from</span>
                  <label htmlFor="student-origin" className="sr-only">
                    Select your university origin
                  </label>
                  <select
                    value={studentType}
                    onChange={(e) =>
                      handleSelectionChange(e.target.value as any)
                    }
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer backdrop-blur-sm"
                  >
                    <option value="" className="text-black">
                      Select origin
                    </option>
                    <option value="ingenium/stem" className="text-black">
                      INGENIUM Alliance / STEM Student
                    </option>
                    <option value="best" className="text-black">
                      Member of BEST
                    </option>
                  </select>
                </div>
              ) : (
                /* ======================= PERIOD NOT STARTED ======================= */
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Excitement is building! The application period for the
                    <strong> BEST Iași Symposium</strong> hasn't opened just
                    yet.
                  </p>
                  <p className="text-md md:text-lg text-secondary font-medium italic">
                    Stay tuned, we'll be ready to welcome your ideas and energy
                    very soon.
                  </p>
                </div>
              )}
            </div>

            {/* Only show the reveal section if the join period is actually active */}
            {isJoinPeriodActive && (
              <div
                className={`text-justify transition-all duration-500 transform ${studentType ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <div className="min-h-[200px] transition-all duration-500">
                  <Suspense fallback={null}>
                    {studentType !== "" && (
                      <ConditionalReveal studentType={studentType} />
                    )}
                  </Suspense>
                </div>
              </div>
            )}
          </div>
        </CustomContainer>
      </section>
    </div>
  );
};
