import { useNavigate } from "react-router";
import { PROMO_VIDEO_ID } from "../../../data/Links";
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const HomeVideoSection = () => {
  const navigate = useNavigate();

  return (
    <CustomSection
      bg="bg-whiteBG"
      contentClassName="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black">
        <div className="relative w-full aspect-video">
          <LiteYouTubeEmbed
            id={PROMO_VIDEO_ID} // e.g., "dQw4w9WgXcQ" (NOT the full URL)
            title="BIS 2026 Teaser"
            poster="maxresdefault" // Uses the high-res thumbnail
            webp={true} // Uses faster WebP images
          />
        </div>
      </div>

      <SectionContent
        title="BEST Iași Symposium"
        subtitle="Student Mobility"
        buttonText="Discover More"
        analyticsLabel="Discover More"
        onButtonClick={() => navigate("/about")}
      >
        <p>
          Experience a week-long intensive program in Iași, bringing together
          international students for dynamic workshops on multiculturalism and
          global exchange.
        </p>
        <p>
          Connect with academic leaders and industry experts to explore how
          international student mobilities are shaping a more inclusive future.
        </p>
      </SectionContent>
    </CustomSection>
  );
};
