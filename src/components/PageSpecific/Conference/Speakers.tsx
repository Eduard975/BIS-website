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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-12 md:gap-y-16 justify-items-center">
        {SPEAKERS_DATA.map((speaker, index) => (
          <PersonCard
            key={speaker.id}
            index={index}
            lastName={speaker.lastName}
            name={speaker.name}
            role={speaker.role}
            image={speaker.image}
          />
        ))}

        {/* The persistent "Add New" card */}
        <PersonCard isAdd role="Join BIS 2026" onClick={handleApplyClick} />
      </div>
    </CustomSection>
  );
};
