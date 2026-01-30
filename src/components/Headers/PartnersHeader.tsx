/* src/components/Headers/PartnersPageHeader.tsx */
import { HeroHeader } from "./HeroHeader";
import partnersHeader from "../../assets/images/partnersHeader.jpg";

export const PartnersPageHeader = () => {
  return (
    <HeroHeader
      backgroundImageSrc={partnersHeader}
      heightClass="min-h-[55vh] h-fit"
      overlayOpacityClass="opacity-15"
      objectFit="none" // Disables the auto-stretch
    >
      {null}
    </HeroHeader>
  );
};
