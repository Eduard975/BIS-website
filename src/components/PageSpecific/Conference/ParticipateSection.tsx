import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import { PrimaryButton } from "../../Universal/PrimaryButton";
import { useCountdown } from "../../../hooks/useCountdown";
import handsIllustration from "../../../assets/svgs/hands-compass.svg";
import { CONFERENCE_DATE } from "../Conference/TimerDisplay";
import { OOD_JOIN_FORM_URL } from "../../../data/Links";

export const ParticipateSection = () => {
  const { isFinished } = useCountdown(CONFERENCE_DATE);

  const handleJoinClick = () => {
    window.open(OOD_JOIN_FORM_URL, "_blank");
  };

  return (
    <CustomSection
      bg="bg-colorBG"
      id="participate"
      className="overflow-hidden"
      /* Pass the image as a decoration to sit behind the content */
      decoration={
        <img
          src={handsIllustration}
          alt=""
          className="
            absolute bottom-0 right-0 
            w-[70vw] md:w-[45vw] max-w-[600px] 
            /* Constraint: Ensures the illustration height never exceeds the section background */
            max-h-[90%]
            object-contain pointer-events-none 
            z-0 select-none
          "
        />
      }
      contentClassName="relative z-10"
    >
      <div className="max-w-2xl">
        <SectionContent title="HOW TO PARTICIPATE" subtitle="LET'S FIND OUT">
          <div className="flex flex-col gap-6 text-lg">
            <p>
              Be part of our multicultural conference and engage with passionate
              participants from across Europe. Discover new ideas, share
              experiences, build connections, and explore opportunities by
              following the link below to join us!
            </p>

            <div className="pt-4">
              {/* Dynamic CTA that switches automatically when isFinished is true */}
              {!isFinished ? (
                <p className="text-darkTxt font-medium">
                  The{" "}
                  <span className="text-[#E63946] font-semibold">
                    joining period
                  </span>{" "}
                  hasn't started yet
                </p>
              ) : (
                <PrimaryButton size="normal" onClick={handleJoinClick}>
                  Join Now
                </PrimaryButton>
              )}
            </div>
          </div>
        </SectionContent>
      </div>
    </CustomSection>
  );
};
