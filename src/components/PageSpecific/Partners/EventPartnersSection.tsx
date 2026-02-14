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
              src={TUIASI}
              alt="Technical University of Iasi logo"
              className="w-full h-full object-contain object-top md:object-left-top"
            />
          </div>

          <SectionContent
            buttonText="Learn More"
            analyticsLabel="Partner: TUIASI"
            onButtonClick={() => window.open(TUIASI_LINK, "_blank")}
            className="w-full md:w-1/2 text-justify"
          >
            <p>
              TUIAȘI, as a local BEST partner, plays an important role in
              supporting student development and technical education. The
              university is actively involved in fostering an academic
              environment focused on innovation, research, and strong
              collaboration between students and the academic community.
            </p>
            <p>
              Within the BEST Iași Symposium, TUIAȘI contributes by providing
              the necessary infrastructure, logistical support, and academic
              expertise for the successful organization of the event. Its
              involvement ensures a well-structured and professional setting
              that encourages meaningful academic dialogue and the exchange of
              ideas among participants.
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
            analyticsLabel="Learn More"
            onButtonClick={() => window.open(INGENIUM_LINK, "_blank")}
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
              As a strategic partner of TUIAȘI, INGENIUM strengthens the
              academic network and brings an international perspective to the
              BEST Iași Symposium. Their involvement provides participants with
              opportunities to explore innovative ideas, share experiences, and
              engage with a diverse STEM community, enhancing both the academic
              and cultural impact of the event.
            </p>
          </SectionContent>
          <div className="w-full md:w-1/2 self-stretch flex">
            <img
              src={INGENIUM}
              alt="Ingenium European University logo"
              className="w-full h-full object-contain object-top md:object-left-top"
            />
          </div>
        </div>
      </CustomSection>
    </>
  );
};
