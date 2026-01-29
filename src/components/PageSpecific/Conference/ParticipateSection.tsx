import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import { PrimaryButton } from "../../Universal/PrimaryButton";
import { useCountdown } from "../../../hooks/useCountdown";
import handsIllustration from "../../../assets/svgs/hands-compass.svg";
import { CONFERENCE_DATE } from "../Conference/TimerDisplay";
// Ensure this matches the date in your TimerDisplay

export const ParticipateSection = () => {
  const { isFinished } = useCountdown(CONFERENCE_DATE);

  const handleJoinClick = () => {
    window.open("YOUR_REGISTRATION_LINK", "_blank");
  };

  return (
    <CustomSection
      bg="bg-colorBG" // Matching the beige/off-white background
      className="overflow-hidden"
      contentClassName="relative flex flex-col md:flex-row items-center gap-12"
    >
      {/* Content Area */}
      <div className="flex-1 z-10">
        <SectionContent title="HOW TO PARTICIPATE" subtitle="LET'S FIND OUT">
          <div className="flex flex-col gap-6 text-lg">
            <p>
              Be part of our multicultural conference and engage with passionate
              participants from across Europe. Discover new ideas, share
              experiences, build connections, and explore opportunities by
              following the link below to join us!
            </p>

            {/* DYNAMIC CTA: Automatically switches based on countdown */}
            <div className="pt-4">
              {!isFinished ? (
                <p className="text-darkTxt font-medium">
                  The{" "}
                  <span className="text-accent font-semibold">
                    joining period
                  </span>{" "}
                  hasn't started yet.
                </p>
              ) : (
                <PrimaryButton
                  size="normal"
                  onClick={handleJoinClick}
                  className="animate-fade-in"
                >
                  Join Now
                </PrimaryButton>
              )}
            </div>
          </div>
        </SectionContent>
      </div>

      {/* Right Side Decoration: Hands and Compass */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={handsIllustration}
          alt="Hands holding a star decoration"
          className="w-[70vw] max-w-[500px] md:w-full object-contain"
        />
      </div>
    </CustomSection>
  );
};
