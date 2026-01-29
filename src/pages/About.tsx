import { AboutPageHeader } from "../components/Headers/AboutHeader";
import { MemoryLane } from "../components/PageSpecific/About/MemoryLane";
import { TestimonialsSection } from "../components/PageSpecific/About/TestimonialSection";
import { TESTIMONIALS } from "../data/Testimonials";
import { BehindTheTeam } from "../components/PageSpecific/About/Team";
import { BridgeGapSection } from "../components/PageSpecific/About/BridgeGap";

function About() {
  return (
    <>
      <AboutPageHeader />
      <BridgeGapSection />

      <MemoryLane />

      <TestimonialsSection data={TESTIMONIALS} />

      <BehindTheTeam />
    </>
  );
}

export default About;
