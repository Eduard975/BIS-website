import { useNavigate } from "react-router";
import { AboutPageHeader } from "../components/Headers/AboutHeader";
import { SectionContent } from "../components/Universal/SectionContent";
import { CustomSection } from "../components/Universal/CustomSection";
import { MemoryLane } from "../components/PageSpecific/About/MemoryLane";
import planetSvg from "../assets/svgs/planet.svg";
import { TestimonialsSection } from "../components/PageSpecific/About/TestimonialSection";
import { TESTIMONIALS } from "../data/Testimonials";
import { BehindTheTeam } from "../components/PageSpecific/About/Team";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <AboutPageHeader />
      <CustomSection
        bg="bg-whiteBG"
        className="overflow-hidden"
        contentClassName="relative flex flex-col md:flex-row items-center gap-[5vw]"
      >
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={planetSvg}
            alt="Globe Decoration"
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[80vw] max-w-[400px] opacity-20 pointer-events-none z-0
              md:static md:translate-x-0 md:translate-y-0 
              md:w-full md:max-w-[450px] md:opacity-100 md:z-auto 
              md:pointer-events-auto
              transition-all duration-700 ease-in-out object-contain
            "
          />
        </div>

        <SectionContent
          title="Bridge the Gap"
          subtitle="STEM & Innovation"
          buttonText="Discover More"
          onButtonClick={() => navigate("/conference")}
          className="relative z-10 md:flex-1"
        >
          <div className="flex flex-col gap-4 text-justify text-lg">
            <p>
              BEST Iași Symposium brings together international students,
              educators, and professionals to explore new international
              education opportunities and advance international student
              mobility.
            </p>
            <p>
              Participants join inspiring keynotes, interactive workshops, and
              training sessions to promote multicultural education and shape a
              more inclusive and sustainable future for international student
              mobility.
            </p>
          </div>
        </SectionContent>
      </CustomSection>

      <MemoryLane />

      <TestimonialsSection data={TESTIMONIALS} />

      <BehindTheTeam />
    </>
  );
}

export default About;
