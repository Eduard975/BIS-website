import { useNavigate } from "react-router";
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import { CAROUSEL_ITEMS } from "../../../data/HomeCarouselData";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { PrimaryButton } from "../../Universal/PrimaryButton";
import TUIASI from "../../../assets/logos/partners/event/TUIASI.png";

export const HomePartnersSection = () => {
  const navigate = useNavigate();

  return (
    <CustomSection bg="bg-whiteBG" contentClassName="flex flex-col gap-6">
      <SectionContent title="Our Partners" subtitle="Meet" className="w-full">
        <p>
          We are proud to collaborate with partners who support the mission and
          impact of this event.
        </p>
        <div className="flex flex-col justify-start gap-2 border-l-4 border-primary pl-4 py-1">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Co-organized by
          </span>
          <img
            src={TUIASI}
            alt="Technical University of Iasi logo"
            className="h-16 md:h-20 w-auto object-contain object-left"
          />
        </div>
      </SectionContent>

      <SwiperCarousel
        data={CAROUSEL_ITEMS}
        aspect="aspect-[4/3] md:aspect-video"
      />

      <div className="w-full flex justify-start">
        <PrimaryButton
          size="normal"
          analyticsLabel="Discover More"
          onClick={() => navigate("/partners")}
        >
          Discover More
        </PrimaryButton>
      </div>
    </CustomSection>
  );
};
