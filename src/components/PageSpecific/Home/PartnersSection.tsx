import { useNavigate } from "react-router";
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import { CAROUSEL_ITEMS } from "../../../data/HomeCarouselData";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { PrimaryButton } from "../../Universal/PrimaryButton";

export const HomePartnersSection = () => {
  const navigate = useNavigate();

  return (
    <CustomSection bg="bg-whiteBG" contentClassName="flex flex-col gap-6">
      <SectionContent title="Our Partners" subtitle="Meet" className="w-full">
        <p>
          We are proud to collaborate with partners who support the mission and
          impact of this event.
        </p>
      </SectionContent>

      <SwiperCarousel
        data={CAROUSEL_ITEMS}
        aspect="aspect-[4/3] md:aspect-video"
      />

      <div className="w-full flex justify-start">
        <PrimaryButton size="normal" onClick={() => navigate("/partners")}>
          Discover More
        </PrimaryButton>
      </div>
    </CustomSection>
  );
};
