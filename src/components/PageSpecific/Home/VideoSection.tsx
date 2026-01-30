import { useNavigate } from "react-router";
import { PROMO_VIDEO_URL } from "../../../data/Links";
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";

export const HomeVideoSection = () => {
  const navigate = useNavigate();

  return (
    <CustomSection
      bg="bg-whiteBG"
      contentClassName="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black">
        <div className="relative w-full aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={PROMO_VIDEO_URL}
            title="Video"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
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
