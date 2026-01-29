import { PartnersPageHeader } from "../components/Headers/PartnersHeader";
import { EventPartnersSection } from "../components/PageSpecific/Partners/EventPartnersSection";
import { AnnualPartnersSection } from "../components/PageSpecific/Partners/AnnualPartnersSection";
import { EventSponsorsSection } from "../components/PageSpecific/Partners/EventSponsorsSection";

function Partners() {
  return (
    <>
      <PartnersPageHeader />
      <EventPartnersSection />
      <AnnualPartnersSection />
      <EventSponsorsSection />
    </>
  );
}

export default Partners;
