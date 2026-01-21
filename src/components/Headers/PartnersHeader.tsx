import { HeroHeader } from "./HeroHeader";

export const PartnersPageHeader = () => {
  const PartnersPageContent = () => <> </>;

  return (
    <HeroHeader
      backgroundImageSrc="src/assets/images/partnersHeader.jpg"
      heightClass="min-h-[300px]"
      overlayOpacityClass="opacity-0"
    >
      <PartnersPageContent />
    </HeroHeader>
  );
};
