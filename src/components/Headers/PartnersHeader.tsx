import { HeroHeader } from "./HeroHeader";
import partnersHeader from "../../assets/images/partnersHeader.jpg";

export const PartnersPageHeader = () => {
  return (
    <HeroHeader
      backgroundImageSrc={partnersHeader}
      heightClass="min-h-[300px]"
      overlayOpacityClass="opacity-0"
      children={undefined}
    ></HeroHeader>
  );
};
