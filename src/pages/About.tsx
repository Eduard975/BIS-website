import { useNavigate } from "react-router";
import { AboutPageHeader } from "../components/Headers/AboutHeader";
import { SectionContent } from "../components/SectionContent";
import { CustomSection } from "../components/CustomSection";
import { MemoryLane } from "../components/MemoryLane";
import planetSvg from "../assets/svgs/planet.svg";
import { TestimonialsSection } from "../components/TestimonialSection";
import type { TestimonialItem } from "../components/TestimonialCarousel";

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "BATUHAN ÖZDEMİR",
    location: "Istanbul, Turkey",
    countryCode: "tr",
    paragraphs: [
      "We produced a great result through teamwork. In the sessions we discussed topics in depth and made wonderful friendships",
    ],
  },
  {
    id: 2,
    name: "Katja Gruden",
    location: "Ljubljana, Slovenia",
    countryCode: "si",
    paragraphs: [
      "I liked the event very much. What I appreciated the most was how open and kind everyone was, and how they made sure we felt comfortable and happy throughout the event.",
    ],
  },
  {
    id: 3,
    name: "Estela González",
    location: "Oviedo, Spain",
    countryCode: "es",
    paragraphs: [
      "The event was very good structured and it was very dynamic. I had a very good impression.",
    ],
  },
  {
    id: 4,
    name: "Kadir Özkan",
    location: "Bornova, Turkey",
    countryCode: "tr",
    paragraphs: [
      "Overall, I really appreciated the event. What stood out the most for me was the LBG Iași members attitude towards the participants, they were welcoming and supportive.",
    ],
  },
];

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
          <div className="flex flex-col gap-4 text-justify md:text-left text-lg">
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
      <TestimonialsSection data={TESTIMONIALS} />;
    </>
  );
}

export default About;
