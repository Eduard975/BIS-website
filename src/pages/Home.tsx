import { HomePageHeader } from "../components/Headers/HomeHeader";
import { HomeBridgeGapSection } from "../components/PageSpecific/Home/BridgeGapSection";
import { HomePartnersSection } from "../components/PageSpecific/Home/PartnersSection";
import { HomeVideoSection } from "../components/PageSpecific/Home/VideoSection";

function Home() {
  return (
    <>
      <HomePageHeader />
      <HomeVideoSection />
      <HomeBridgeGapSection />
      <HomePartnersSection />
    </>
  );
}

export default Home;
