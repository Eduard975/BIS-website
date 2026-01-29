import { ConferencePageHeader } from "../components/Headers/ConferenceHeader";
import { ConferenceIntroSection } from "../components/PageSpecific/Conference/IntroSection";
import { ParticipateSection } from "../components/PageSpecific/Conference/ParticipateSection";
import { SpeakersSection } from "../components/PageSpecific/Conference/Speakers";

function Conference() {
  return (
    <>
      <ConferencePageHeader />
      <ConferenceIntroSection />
      <ParticipateSection />
      <SpeakersSection />
    </>
  );
}

export default Conference;
