import { CustomSection } from "../components/CustomSection";
import { SectionContent } from "../components/SectionContent";
import TestimonialCarousel, {
  type TestimonialItem,
} from "./TestimonialCarousel";

interface TestimonialsSectionProps {
  data: TestimonialItem[];
}

export const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  return (
    <CustomSection
      bg="bg-whiteBG"
      className="relative overflow-hidden"
      contentClassName="flex flex-col gap-6"
    >
      <SectionContent
        title="TESTIMONIALS"
        subtitle="HERE ARE SOME"
        className="w-full"
      >
        <p className="text-lg md:text-xl text-darkTxt">
          Read through the experiences of our participants and see, from their
          perspectives, the meaningful connections, unforgettable moments, and
          lasting impact this event created.
        </p>
      </SectionContent>

      <TestimonialCarousel data={data} />
    </CustomSection>
  );
};
