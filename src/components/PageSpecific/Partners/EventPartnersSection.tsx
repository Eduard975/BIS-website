import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";
import { SectionContent } from "../../Universal/SectionContent";
import TUIASI from "../../../assets/logos/partners/event/TUIASI.png";
import INGENIUM from "../../../assets/logos/partners/event/ingenium.svg";
import { INGENIUM_LINK, TUIASI_LINK } from "../../../data/Links";

export const EventPartnersSection = () => {
  return (
    <>
      <CustomSection
        bg="bg-whiteBG"
        contentClassName="flex flex-col gap-10 md:gap-16 pb-8 md:pb-12"
      >
        <OverprintTitle title="PARTNERS" subtitle="EVENT" />

        {/* Ingenium Block */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 self-stretch flex">
            <img
              src={INGENIUM}
              alt="Ingenium European University logo"
              className="w-full h-full object-contain object-top md:object-left-top"
            />
          </div>

          <SectionContent
            buttonText="Learn More"
            onButtonClick={() => window.open(INGENIUM_LINK, "_blank")}
            className="w-full md:w-1/2 text-justify"
          >
            <p>
              INGENIUM embodies the heterogeneity of European higher education,
              representing diversity in geography, cultural background,
              organization, and academic activities.
            </p>
            <p>
              As a strategic partner of TUIASI, INGENIUM strengthens the
              academic network and brings an international perspective to the
              symposium.
            </p>
          </SectionContent>
        </div>
      </CustomSection>

      {/* TUIASI Block */}
      <CustomSection
        bg="bg-whiteBG"
        contentClassName="flex flex-col gap-10 md:gap-16 pt-8 md:pt-12"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
          <SectionContent
            buttonText="Learn More"
            onButtonClick={() => window.open(TUIASI_LINK, "_blank")}
            className="w-full md:w-1/2 text-justify"
          >
            <p>
              "Gheorghe Asachi" Technical University of Iași is a historic
              institution and our main academic partner, fostering engineering
              excellence and student innovation.
            </p>
            <p>
              Their support is fundamental to creating a multicultural STEM
              environment during the BEST Iași Symposium.
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
    </>
  );
};
