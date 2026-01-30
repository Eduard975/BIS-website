import { AboutPageHeader } from "../components/Headers/AboutHeader";
import { MemoryLane } from "../components/PageSpecific/About/MemoryLane";
import { TestimonialsSection } from "../components/PageSpecific/About/TestimonialSection";
import { TESTIMONIALS } from "../data/Testimonials";
import { BehindTheTeam } from "../components/PageSpecific/About/Team";
import { WhatIsBisSection } from "../components/PageSpecific/About/WhatIsBIS";

function About() {
  return (
    <>
      <AboutPageHeader />
      <WhatIsBisSection />

      <MemoryLane />

      <TestimonialsSection data={TESTIMONIALS} />

      <BehindTheTeam />
    </>
  );
}

export default About;
