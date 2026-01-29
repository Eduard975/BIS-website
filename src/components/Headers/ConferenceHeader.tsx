import { HeroHeader } from "./HeroHeader";
import { PrimaryButton } from "../Universal/PrimaryButton";
import conferenceHeader from "../../assets/images/conferenceHeader.jpg";
import { TimerDisplay } from "../PageSpecific/Conference/TimerDisplay";

export const ConferencePageHeader = () => {
  const HeaderContent = () => (
    <div className="flex flex-col gap-[3vh] text-white h-full justify-center">
      <div>
        <h1 className="text-[8vw] md:text-[4vw] font-extrabold tracking-tight leading-[1.1]">
          Empower STEM:
          <br />
          Mobility Conference
        </h1>
      </div>

      {/* Countdown Section */}
      <div className="flex flex-col gap-[1.5vh]">
        <p className="text-[4vw] md:text-[1.2vw] font-medium text-gray-100">
          Time until the joining period starts
        </p>

        <TimerDisplay />
      </div>

      {/* CTA Button */}
      <div className="pt-[2vh]">
        <PrimaryButton
          size="large"
          className="bg-primary hover:bg-[#008f85] 
          text-white rounded-full px-[5vw] py-[2vh] 
          md:px-[2vw] md:py-[2vh] font-bold text-[4vw] 
          md:text-[1.1vw] transition-colors duration-300"
          onClick={() => console.log("Participate clicked")}
        >
          I want to participate
        </PrimaryButton>
      </div>
    </div>
  );

  return (
    <HeroHeader
      backgroundImageSrc={conferenceHeader}
      alignContent="left"
      overlayColorClass="bg-[#0077b6]"
      overlayOpacityClass="opacity-80 md:opacity-85 mix-blend-multiply"
      heightClass="min-h-[75vh]"
    >
      <HeaderContent />
    </HeroHeader>
  );
};
