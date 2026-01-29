import { CustomSection } from "../components/Universal/CustomSection";
import { PartnersPageHeader } from "../components/Headers/PartnersHeader";
import { SectionContent } from "../components/Universal/SectionContent";
import SwiperCarousel from "../components/Universal/SwiperCarousel";
import { PARTNER_CAROUSEL_ITEMS } from "../data/CarouselData";
import TUIASI from "../assets/logos/partners/TUIASI.png";
import INGENIUM from "../assets/logos/partners/INGENIUM.png";
import OverprintTitle from "../components/Universal/OverprintTitle";

function Partners() {
  return (
    <>
      <PartnersPageHeader />

      <CustomSection
        bg="bg-whiteBG"
        contentClassName="flex flex-col gap-10 md:gap-16 pb-8 md:pb-12"
      >
        <OverprintTitle title="EVENT" subtitle="PARTNERS" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 self-stretch flex">
            <img
              src={INGENIUM}
              alt="Ingenium European University logo"
              className="w-full h-full object-contain object-top md:object-left-top"
            />
          </div>

          {/* Right Side: Content */}
          <SectionContent
            buttonText="Learn More"
            onButtonClick={() =>
              window.open("https://ingenium-eu.eu/", "_blank")
            }
            className="w-full md:w-1/2 text-justify"
          >
            <p>
              INGENIUM embodies the heterogeneity of European higher education,
              representing diversity in geography, cultural background,
              organization, and academic activities. By connecting a wide range
              of universities and institutions, INGENIUM fosters collaboration,
              knowledge exchange, and cross-cultural understanding across
              Europe.
            </p>
            <p>
              As a strategic partner of TUIASI, INGENIUM strengthens the
              academic network and brings an international perspective to the
              BEST Iași Symposium. Their involvement provides participants with
              opportunities to explore innovative ideas, share experiences, and
              engage with a diverse STEM community.
            </p>
          </SectionContent>
        </div>
      </CustomSection>

      <CustomSection
        bg="bg-whiteBG"
        contentClassName="flex flex-col gap-10 md:gap-16 pt-8 md:pt-12"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
          {/* Right Side: Content */}
          <SectionContent
            buttonText="Learn More"
            onButtonClick={() =>
              window.open("https://www.tuiasi.ro/?lang=en", "_blank")
            }
            className="w-full md:w-1/2 text-justify"
          >
            <p>
              INGENIUM embodies the heterogeneity of European higher education,
              representing diversity in geography, cultural background,
              organization, and academic activities. By connecting a wide range
              of universities and institutions, INGENIUM fosters collaboration,
              knowledge exchange, and cross-cultural understanding across
              Europe.
            </p>
            <p>
              As a strategic partner of TUIASI, INGENIUM strengthens the
              academic network and brings an international perspective to the
              BEST Iași Symposium. Their involvement provides participants with
              opportunities to explore innovative ideas, share experiences, and
              engage with a diverse STEM community.
            </p>
          </SectionContent>
          <div className="w-full md:w-1/2 self-stretch flex">
            <img
              src={TUIASI}
              alt="Technical University of Iasi logo"
              className="w-full h-full object-contain object-top md:object-left-top"
            />
          </div>
        </div>
      </CustomSection>

      <CustomSection bg="bg-colorBG" contentClassName="flex flex-col gap-6">
        <SectionContent
          title="Partners"
          subtitle="Our Annual"
          className="w-full"
        ></SectionContent>

        <SwiperCarousel
          data={PARTNER_CAROUSEL_ITEMS}
          mobileSlidesPerView={2}
          desktopSlidesPerView={4}
          aspect="aspect-[4/5] md:aspect-square"
        />
      </CustomSection>
      <CustomSection bg="bg-whiteBG" contentClassName="flex flex-col gap-6">
        <SectionContent
          title="Sponsors"
          subtitle="Event"
          className="w-full"
        ></SectionContent>

        <SwiperCarousel
          data={PARTNER_CAROUSEL_ITEMS}
          mobileSlidesPerView={2}
          desktopSlidesPerView={4}
          aspect="aspect-[4/5] md:aspect-square"
        />
      </CustomSection>
    </>
  );
}

export default Partners;
