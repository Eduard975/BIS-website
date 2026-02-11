import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";
import { SectionContent } from "../../Universal/SectionContent";
import Host from "../../../assets/images/talking-host2.webp";

export const ConferenceIntroSection = () => {
  return (
    <CustomSection
      bg="bg-whiteBG"
      contentClassName="flex flex-col gap-10 md:gap-16"
    >
      <OverprintTitle title="THE CONFERENCE" subtitle="WHAT AWAITS AT" />

      <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Side: Content with Bold Keywords */}
        <SectionContent className="w-full md:w-[60%] text-justify">
          <div className="flex flex-col gap-6 text-darkTxt text-lg leading-relaxed">
            <p>
              <strong>Empower STEM: Mobility Conference</strong> is a premier
              international <strong>conference</strong> exploring how{" "}
              <strong>multiculturalism</strong> in <strong>STEM</strong>{" "}
              empowers diversity and drives innovation. Taking place on{" "}
              <strong>July 12th, 2026, in Iași, Romania</strong>, this event
              brings together students, academic mentors, and{" "}
              <strong>STEM industry leaders</strong> from across Europe to shape
              the future of <strong>international student mobility</strong>.
            </p>

            <p>
              In a globalized world, education thrives on cross-cultural
              collaboration. We believe that{" "}
              <strong>international exchange programs</strong> and diverse
              perspectives are essential for building{" "}
              <strong>global career paths</strong> and inclusive professional
              environments.
            </p>

            <p>
              <strong>Empower STEM: Mobility Conference</strong> is where
              multicultural ideas transform into action. Whether you want to
              explore international opportunities, connect with{" "}
              <strong>global tech companies</strong>, or be inspired by diverse
              keynote speakers, this is the place to be.
            </p>

            <p className="mt-2">
              Let's reimagine <strong>STEM mobilities</strong> together!
            </p>
          </div>
        </SectionContent>

        {/* Right Side: Image with internal zoom effect */}
        <div className="w-full md:w-[40%] self-stretch flex overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
          <img
            src={Host}
            alt="Conference host presenting"
            className="w-full h-full object-cover object-center scale-[1.4]"
          />
        </div>
      </div>
    </CustomSection>
  );
};
