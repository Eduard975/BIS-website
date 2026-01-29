import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { PA_CAROUSEL_ITEMS } from "../../../data/PACarouselData";

export const AnnualPartnersSection = () => {
  return (
    <CustomSection bg="bg-colorBG" contentClassName="flex flex-col gap-6">
      <SectionContent title="Partners" subtitle="Annual" className="w-full" />
      <SwiperCarousel
        data={PA_CAROUSEL_ITEMS}
        mobileSlidesPerView={2}
        desktopSlidesPerView={4}
        aspect="aspect-[4/5] md:aspect-square"
      />
    </CustomSection>
  );
};
