import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { ES_CAROUSEL_ITEMS } from "../../../data/SponsorsCarouselData";

export const EventSponsorsSection = () => {
  // Check if data exists before rendering the entire section
  if (!ES_CAROUSEL_ITEMS || ES_CAROUSEL_ITEMS.length === 0) return null;

  return (
    <CustomSection bg="bg-whiteBG" contentClassName="flex flex-col gap-6">
      <SectionContent title="Sponsors" subtitle="Event" className="w-full" />
      <SwiperCarousel
        data={ES_CAROUSEL_ITEMS}
        mobileSlidesPerView={2}
        desktopSlidesPerView={4}
        aspect="aspect-[4/5] md:aspect-square"
      />
    </CustomSection>
  );
};
