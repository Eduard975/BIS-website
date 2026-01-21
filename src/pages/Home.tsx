import { HomePageHeader } from "../components/Headers/HomeHeader";
import OverprintTitle from "../components/OverprintTitle";
import CustomContainer from "../components/CustomContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router";
import atomSvg from "../assets/svgs/atom.svg";

function Home() {
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
  const navigate = useNavigate();

  return (
    <>
      <HomePageHeader />

      <CustomContainer
        width="standard"
        paddingX="normal"
        className="bg-whiteBG flex flex-col md:flex-row mt-16 mb-8 items-center gap-12"
      >
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <OverprintTitle
            title="BEST Iași Symposium"
            subtitle="Student Mobility"
          />
          <p className="text-justify w-full text-darkTxt">
            Experience a week-long intensive program in Iași, bringing together
            international students for dynamic workshops on multiculturalism and
            global exchange. Connect with academic leaders and industry experts
            to explore how international student mobilities are shaping a more
            inclusive future.
          </p>
          <PrimaryButton size="normal" onClick={() => navigate("/about")}>
            Discover More
          </PrimaryButton>
        </div>
      </CustomContainer>

      <CustomContainer
        width="standard"
        paddingX="normal"
        className="bg-colorBG flex flex-col md:flex-row mt-8 mb-8 items-center gap-12"
      >
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <OverprintTitle
            title="BEST Iași Symposium"
            subtitle="Student Mobility"
          />
          <p className="text-justify w-full text-darkTxt">
            Experience a week-long intensive program in Iași, bringing together
            international students for dynamic workshops on multiculturalism and
            global exchange. Connect with academic leaders and industry experts
            to explore how international student mobilities are shaping a more
            inclusive future.
          </p>
          <PrimaryButton size="normal" onClick={() => navigate("/about")}>
            Discover More
          </PrimaryButton>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={atomSvg}
            alt="Hand holding an Illustration"
            className="w-full h-auto max-w-[400px] object-contain align-right"
          />
        </div>
      </CustomContainer>
    </>
  );
}

export default Home;
