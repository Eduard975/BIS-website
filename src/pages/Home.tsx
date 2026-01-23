import { CustomSection } from "../components/CustomSection";
import { HomePageHeader } from "../components/Headers/HomeHeader";
import { useNavigate } from "react-router";
import atomSvg from "../assets/svgs/atom.svg";
import { SectionContent } from "../components/SectionContent";
import SwiperCarousel from "../components/SwiperCarousel";
import { PARTNER_CAROUSEL_ITEMS } from "../data/CarouselData";
import { PrimaryButton } from "../components/PrimaryButton"; // Make sure to import this

function Home() {
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
  const navigate = useNavigate();

  return (
    <>
      <HomePageHeader />

      {/* SECTION 1: Video */}
      <CustomSection
        bg="bg-whiteBG"
        contentClassName="flex flex-col md:flex-row items-center gap-12"
      >
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>

        {/* Standard usage: Text + Button included */}
        <SectionContent
          title="BEST Iași Symposium"
          subtitle="Student Mobility"
          buttonText="Discover More"
          onButtonClick={() => navigate("/about")}
        >
          <p>
            Experience a week-long intensive program in Iași, bringing together
            international students for dynamic workshops on multiculturalism and
            global exchange.
          </p>
          <p>
            Connect with academic leaders and industry experts to explore how
            international student mobilities are shaping a more inclusive
            future.
          </p>
        </SectionContent>
      </CustomSection>

      {/* SECTION 2: SVG Background */}
      <CustomSection
        bg="bg-colorBG"
        className="overflow-hidden"
        contentClassName="relative z-10 flex flex-col md:flex-row items-center gap-12"
        decoration={
          <img
            src={atomSvg}
            alt=""
            className="
              absolute pointer-events-none select-none transition-transform duration-500
              right-0 top-0
              w-full origin-bottom-right scale-65 opacity-20
              md:w-auto md:h-full md:origin-right md:scale-90 md:opacity-100
              object-cover
            "
          />
        }
      >
        <SectionContent
          title="Bridge the Gap"
          subtitle="STEM & Innovation"
          buttonText="Discover More"
          onButtonClick={() => navigate("/conference")}
          className="md:w-[60%]"
        >
          <p>
            Join us for an international opening conference that brings together
            multicultural perspectives and forward-thinking ideas. Connect with
            talented students, experts, mentors, and industry leaders from
            across Europe.
          </p>
        </SectionContent>
      </CustomSection>

      <CustomSection bg="bg-whiteBG" contentClassName="flex flex-col gap-6">
        <SectionContent title="Our Partners" subtitle="Meet" className="w-full">
          <p>
            We are proud to collaborate with partners who support the mission
            and impact of this event.
          </p>
        </SectionContent>

        <SwiperCarousel data={PARTNER_CAROUSEL_ITEMS} />

        <div className="w-full flex justify-start">
          <PrimaryButton size="normal" onClick={() => navigate("/partners")}>
            Discover More
          </PrimaryButton>
        </div>
      </CustomSection>
    </>
  );
}

export default Home;
