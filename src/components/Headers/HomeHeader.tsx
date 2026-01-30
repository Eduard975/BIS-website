import { HeroHeader } from "./HeroHeader";
import { PrimaryButton } from "../Universal/PrimaryButton";
import homeHeader from "../../assets/images/homeHeader.jpg";
import { useNavigate } from "react-router";

const HeaderContent = ({ onJoinClick }: { onJoinClick: () => void }) => (
  <div className="space-y-6 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
      BEST Iași <br /> Symposium
    </h1>

    <p className="text-lg md:text-xl text-gray-200 max-w-sm text-justify">
      Be part of an inspiring experience that brings together people passionate
      about change, innovation, and progress, creating opportunities to connect,
      learn, and make a meaningful impact.
    </p>

    <div className="pt-4">
      <PrimaryButton
        size="large"
        onMouseEnter={() => import("../../pages/About")}
        analyticsLabel="Join Us"
        onClick={onJoinClick}
      >
        Join Us
      </PrimaryButton>
    </div>
  </div>
);

export const HomePageHeader = () => {
  const navigate = useNavigate();

  return (
    <HeroHeader
      backgroundImageSrc={homeHeader}
      alignContent="left"
      overlayOpacityClass="opacity-60"
      heightClass="min-h-[500px]"
    >
      <HeaderContent onJoinClick={() => navigate("/about#how-to-join")} />
    </HeroHeader>
  );
};
