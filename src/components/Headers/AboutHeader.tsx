import { lazy, memo, Suspense, useState } from "react";
import CustomContainer from "../Universal/CustomContainer";
import lightbulbSvg from "../../assets/svgs/bec.svg";
import groupPhotoImg from "../../assets/images/group-statue.webp";
import ReactGA from "react-ga4";

const revealLoader = () => import("../PageSpecific/About/ConditionalReveal");
const ConditionalReveal = lazy(revealLoader);

// ============================================================================
// 1. TOP BACKGROUND COMPONENT (Unchanged)
// Left: Cut corner. Right: Solid/Uncut.
// ============================================================================
const TopSectionBackground = memo(() => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <div className="absolute inset-0 bg-secondary/50" />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 0 H100 V100 H45 L0 85 Z" fill="white" />
    </svg>
  </div>
));

// ============================================================================
// 2. BOTTOM OVERLAY COMPONENT
// ============================================================================
const BottomSectionOverlays = memo(() => (
  <>
    {/* A. MIRRORED CYAN TRIANGLES */}
    <svg
      className="absolute top-24 left-0 w-full h-full pointer-events-none z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Left Mirror: Made shorter (15 -> 10) */}
      <path d="M0 0 H45 L0 10 Z" className="fill-secondary/50" />

      {/* Right Triangle: Made taller (15 -> 25) */}
      <path d="M50.5 0 H100 V25 Z" className="fill-secondary/50" />
    </svg>

    {/* B. BOTTOM SHARDS (Unchanged) */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 75 L35 100 H0 Z" className="fill-colorBG/50" />
      <path d="M55 100 L100 80 V100 Z" className="fill-colorBG/50" />
    </svg>
  </>
));

export const AboutPageHeader = () => {
  const [studentType, setStudentType] = useState<"ingenium/stem" | "best" | "">(
    "",
  );
  const isJoinPeriodActive = true; // Set to true when the application period starts

  const handleMouseEnter = () => revealLoader();

  const handleSelectionChange = (value: "ingenium/stem" | "best" | "") => {
    setStudentType(value);
    if (value !== "") {
      const pagePath = window.location.pathname.substring(1) || "Home";
      ReactGA.event({
        category: `Page: ${pagePath}`,
        action: "Select Student Origin",
        label: value,
      });
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      <section className="relative w-full z-10">
        <TopSectionBackground />

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
        className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center bg-gray-900 overflow-hidden z-0 -mt-24"
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

        {/* Geometric Shards Overlay */}
        <BottomSectionOverlays />

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
                <div className="flex flex-col md:flex-row items-center gap-3 text-lg md:text-xl font-medium text-gray-200">
                  <span>I am a student from</span>
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
                      INGENIUM Alliance / A city without a Local BEST Group
                    </option>
                    <option value="best" className="text-black">
                      BEST Member / A city with a Local BEST Group
                    </option>
                  </select>
                </div>
              ) : (
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

            {isJoinPeriodActive && (
              <div
                className={`text-justify transition-all duration-500 transform ${
                  studentType
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="min-h-[200px]">
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
