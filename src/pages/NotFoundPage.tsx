import { useNavigate } from "react-router";
import { CustomSection } from "../components/Universal/CustomSection";
import { SectionContent } from "../components/Universal/SectionContent";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <CustomSection
      bg="bg-whiteBG"
      className="min-h-[80vh] flex items-center overflow-hidden"
    >
      <SectionContent
        title="404"
        subtitle="Path Not Found"
        buttonText="Return to Home"
        analyticsLabel="404: Back to Home"
        onButtonClick={() => navigate("/")}
        className="text-center md:text-left"
      >
        <p className="text-darkTxt text-lg">
          It seems you've drifted off the experimental track. The page you are
          looking for doesn't exist or has been moved to a new coordinate.
        </p>
      </SectionContent>
    </CustomSection>
  );
};

export default NotFound;
