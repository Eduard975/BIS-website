import { HomePageHeader } from "../components/Headers/HomeHeader";
import OverprintTitle from "../components/OverprintTitle";
import CustomContainer from "../components/CustomContainer"; // Update path as needed

function Home() {
  return (
    <>
      <HomePageHeader />

      {/* 2. Content goes INSIDE container to align with Navbar/Footer */}
      <CustomContainer
        width="standard" // 1200px
        paddingX="normal" // px-6 md:px-8
        className="flex flex-col mt-16 mb-32" // Margins passed here
      >
        <div className="p-8 border bg-gray-50 rounded-lg">
          Placeholder Content
        </div>

        <OverprintTitle
          title="BEST Iași Symposium"
          subtitle="Student Mobility"
        />
      </CustomContainer>
    </>
  );
}

export default Home;
