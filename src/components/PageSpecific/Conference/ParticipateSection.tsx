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

            left-1/2 -translate-x-1/2 
            md:left-auto md:translate-x-0 md:right-0

            w-[70vw] md:w-[45vw] max-w-[600px] 
            opacity-15 md:opacity-100
 
            max-h-[80%] md:max-h-[90%]
            object-contain pointer-events-none 
            z-0 select-none
          "
        />
      }
      contentClassName="relative z-10"
    >
      <SectionContent title="HOW TO PARTICIPATE" subtitle="LET'S FIND OUT">
        <div className="flex flex-col gap-6 text-lg text-justify md:w-[60%]">
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
                <span className="text-accent font-semibold">
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
    </CustomSection>
  );
};
