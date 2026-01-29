import { useNavigate } from "react-router";
import atomSvg from "../../../assets/svgs/atom.svg";
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";

export const HomeBridgeGapSection = () => {
  const navigate = useNavigate();

  return (
    <CustomSection
      bg="bg-colorBG"
      className="overflow-hidden"
      contentClassName="relative z-10 flex flex-col md:flex-row items-center gap-[5vw] md:gap-[4vw]"
      decoration={
        <img
          src={atomSvg}
          alt=""
          className="
            absolute pointer-events-none select-none transition-transform duration-500
            right-0 -translate-y-1/2 origin-center object-contain
            top-[60%] max-h-[60%] w-[50vw] opacity-20
            md:opacity-100 md:top-1/2 md:w-auto md:h-auto
            md:max-h-[90%] md:max-w-[45vw]
          "
        />
      }
    >
      <SectionContent
        title="Bridge the Gap"
        subtitle="STEM & Innovation"
        buttonText="Discover More"
        onButtonClick={() => navigate("/conference")}
        className="md:w-[60%]"
      >
        <p>
          Join an international community where multiculturalism drives
          progress. Connect with talented students, experts, mentors, and
          industry leaders from across Europe to explore innovative ideas, share
          experiences, and unlock new career and academic opportunities.
        </p>
        <p>
          Engage in inspiring discussions and collaborative activities that
          prepare you for a global future.
        </p>
      </SectionContent>
    </CustomSection>
  );
};
