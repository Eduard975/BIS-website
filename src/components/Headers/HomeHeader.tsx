import { HeroHeader } from "./HeroHeader";
import { PrimaryButton } from "../Universal/PrimaryButton";
import homeHeader from "../../assets/images/homeHeader.jpg";

export const HomePageHeader = () => {
  // This is the component we pass into the slot
  const HeaderContent = () => (
    <div className="space-y-6 text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        BEST Iași <br /> Symposium
      </h1>

      <p className="text-lg md:text-xl text-gray-200 max-w-sm text-justify">
        Be part of an inspiring experience that brings together people
        passionate about change, innovation, and progress, creating
        opportunities to connect, learn, and make a meaningful impact.
      </p>

      <div className="pt-4">
        <PrimaryButton
          size="large"
          onClick={() =>
            window.open("https://docs.google.com/forms/...", "_blank")
          }
        >
          Join Us
        </PrimaryButton>
      </div>
    </div>
  );

  return (
    <HeroHeader
      backgroundImageSrc={homeHeader}
      alignContent="left"
      overlayOpacityClass="opacity-60"
      heightClass="min-h-[500px]"
    >
      <HeaderContent />
    </HeroHeader>
  );
};
