import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import floralSvg from "../../../assets/svgs/floral-red.svg";

// Import images
import nightGathering from "../../../assets/images/night-gathering.jpg";
import lectureHall from "../../../assets/images/lecture-hall.jpg";
import groupPose from "../../../assets/images/group-pose.jpg";
import outdoorActivity from "../../../assets/images/outdoor-activity.jpg";

export function MemoryLane() {
  return (
    <CustomSection
      bg="bg-colorBG"
      className="relative overflow-hidden"
      decoration={
        <img
          src={floralSvg}
          alt=""
          className="absolute right-0 bottom-0 h-[90%] 
          w-auto object-contain pointer-events-none 
          z-0 select-none translate-x-[20%] md:translate-x-[10%] opacity-40"
        />
      }
      contentClassName="relative z-10 flex flex-col gap-12"
    >
      <SectionContent
        title="Memory Lane"
        subtitle="A Trip Down"
        className="w-full md:w-2/3"
      >
        <p className="text-justify text-lg md:text-xl text-darkTxt">
          We continue our mission and year after year we create unforgettable
          memories and moments by bringing together people with ideas that can
          make a difference!
        </p>
      </SectionContent>
      {/* --- GRID CONFIGURATION --- 
          1. Removed 'grid-cols-1' so it stays 12-cols even on mobile.
          2. Used dynamic gaps (gap-2 to md:gap-12) to save space on small screens.
      */}
      <div className="grid grid-cols-12 gap-2 md:gap-12 items-start w-full">
        {/* TOP ROW */}

        {/* Top Left - Smaller Video Aspect
            'self-end' aligns bottom with Top Right
        */}
        <div className="col-span-5 col-start-2 rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl aspect-video self-end z-10">
          <img
            src={nightGathering}
            alt="Night gathering"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right - Larger Video Aspect */}
        <div className="col-span-6 rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl aspect-video z-10">
          <img
            src={lectureHall}
            alt="Lecture hall"
            className="w-full h-full object-cover"
          />
        </div>

        {/* BOTTOM ROW */}

        {/* Bottom Left - Larger Video Aspect */}
        <div className="col-span-6 col-start-1 rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl aspect-video z-10">
          <img
            src={groupPose}
            alt="Group pose"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right - Smaller 4/3 Aspect
            'self-start' aligns top with Bottom Left
        */}
        <div className="col-span-4 rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl aspect-[4/3] self-start z-10">
          <img
            src={outdoorActivity}
            alt="Outdoor activity"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default MemoryLane;
