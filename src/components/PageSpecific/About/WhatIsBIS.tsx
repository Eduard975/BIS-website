import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import planetSvg from "../../../assets/svgs/planet.svg";

export const WhatIsBisSection = () => {
  return (
    <CustomSection
      bg="bg-colorBG"
      className="overflow-hidden"
      contentClassName="relative flex flex-col md:flex-row items-center gap-[5vw]"
    >
      {/* Globe Decoration */}
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src={planetSvg}
          alt="Globe Decoration"
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[80vw] max-w-[400px] opacity-20 pointer-events-none z-0
            md:static md:translate-x-0 md:translate-y-0 
            md:w-full md:max-w-[450px] md:opacity-100 md:z-auto 
            md:pointer-events-auto
            transition-all duration-700 ease-in-out object-contain
          "
        />
      </div>

      {/* Content Block */}
      <SectionContent
        title="BEST Iasi Symposium"
        subtitle="What is"
        buttonText="Discover More"
        className="relative z-10 md:flex-1"
      >
        <div className="flex flex-col gap-4 text-justify text-lg">
          <p>
            BEST Iași Symposium brings together{" "}
            <strong>international students</strong>, educators, and
            professionals to explore new{" "}
            <strong>international education opportunities</strong> and advance
            international student mobility. The event addresses challenges like
            lack of information, institutional differences, cultural adaptation,
            and financial barriers, offering practical and{" "}
            <strong>inclusive solutions</strong>.
          </p>
          <p>
            Participants join inspiring keynotes, interactive workshops, and
            training sessions to{" "}
            <strong>promote multicultural education</strong>,{" "}
            <strong>cross-cultural exchange</strong>, and wider access to
            mobility programs. The symposium fosters collaboration,
            idea-sharing, and hands-on learning to shape a more inclusive and
            sustainable future for{" "}
            <strong>international student mobility</strong>.
          </p>
        </div>
      </SectionContent>
    </CustomSection>
  );
};
