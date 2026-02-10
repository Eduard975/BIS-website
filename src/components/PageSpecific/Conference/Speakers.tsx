import { SPEAKER_FORM_URL } from "../../../data/Links";
import { SPEAKERS_DATA } from "../../../data/Speakers";
import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";
import { PersonCard } from "../../Universal/PersonCard";

export const SpeakersSection = () => {
  const handleApplyClick = () => {
    window.open(SPEAKER_FORM_URL, "_blank");
  };

  return (
    <CustomSection bg="bg-whiteBG" id="speakers">
      <OverprintTitle
        title="THE SPEAKERS"
        subtitle="MEET OUR"
        className="mb-12 md:mb-16"
      />

      {/* CHANGED: Grid -> Flex with justify-center to handle orphan items */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
        {SPEAKERS_DATA.map((speaker) => (
          <div key={speaker.id} className="w-[160px] md:w-[220px]">
            <PersonCard
              lastName={speaker.lastName}
              name={speaker.name}
              role={speaker.role}
              image={speaker.image}
            />
          </div>
        ))}

        <div className="w-[160px] md:w-[220px]">
          <PersonCard isAdd role="Join BIS 2026" onClick={handleApplyClick} />
        </div>
      </div>
    </CustomSection>
  );
};
