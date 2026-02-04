import { TEAM_MEMBERS } from "../../../data/TeamMembers";
import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";

interface TeamMember {
  id: string | number;
  lastName: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export const BehindTheTeam = () => {
  const sortedTeam = [...TEAM_MEMBERS].sort((a, b) => {
    if (a.role === "Main Organizer") return -1;
    if (b.role === "Main Organizer") return 1;
    return 0;
  });

  return (
    <CustomSection bg="bg-colorBG" id="team">
      <OverprintTitle
        title="THE TEAM"
        subtitle="BEHIND BIS"
        className="mb-12 md:mb-16"
      />

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 
      md:gap-x-12 md:gap-y-16 justify-items-center"
      >
        {sortedTeam.map((member: TeamMember, index) => (
          <PersonCard
            key={member.id}
            index={index}
            lastName={member.lastName}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedinUrl={member.linkedin}
            isMain={member.role === "Main Organizer"}
          />
        ))}
      </div>
    </CustomSection>
  );
};

export const PersonCard = ({
  lastName = "",
  name = "",
  role,
  image = "",
  linkedinUrl,
  isMain = false,
  index = 0,
  isAdd = false,
  onClick,
}: {
  lastName?: string;
  name?: string;
  role: string;
  image?: string;
  linkedinUrl?: string;
  isMain?: boolean;
  index?: number;
  isAdd?: boolean;
  onClick?: () => void;
}) => {
  const orderClasses = isAdd
    ? "order-last"
    : isMain
      ? "order-first md:order-2"
      : index === 1
        ? "md:order-1"
        : "md:order-3";

  const imageContainerClasses = `
    relative aspect-square w-full max-w-[160px] md:max-w-[200px] 
    rounded-full border-secondary overflow-hidden mb-4 shadow-sm flex items-center justify-center
    transition-all duration-300
    ${isMain ? "border-[5px]" : "border-[3px]"}
    ${isAdd ? "bg-[#EAE6D9]" : ""} 
    ${linkedinUrl ? "hover:opacity-80 hover:scale-105 cursor-pointer" : ""}
  `;

  const CircleContent = (
    <div className={imageContainerClasses}>
      {isAdd ? (
        <span className="text-primary text-6xl font-light mb-1">+</span>
      ) : (
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={`${lastName} ${name}`}
        />
      )}
    </div>
  );

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center w-full transition-transform duration-300 hover:scale-105 ${orderClasses} ${
        isAdd ? "cursor-pointer" : ""
      }`}
    >
      {linkedinUrl && !isAdd ? (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full flex justify-center"
        >
          {CircleContent}
        </a>
      ) : (
        CircleContent
      )}

      {/* Name/Label Area */}
      <div className="w-full max-w-[130px] md:max-w-[175px] border-b-2 border-primary text-center pb-1 mb-2">
        <h3 className="text-accent text-base md:text-lg font-bold uppercase tracking-tight leading-tight flex flex-col justify-center">
          {isAdd ? (
            <span className="whitespace-nowrap">
              <br />
              Become a Speaker
            </span>
          ) : name.includes("-") ? (
            <>
              <span className="whitespace-nowrap">{lastName}</span>
              <span className="whitespace-nowrap">{name}</span>
            </>
          ) : (
            <span className="whitespace-nowrap">
              <br />
              {lastName} {name}
            </span>
          )}
        </h3>
      </div>

      <p className="text-darkTxt text-xs md:text-sm font-medium text-center">
        {role}
      </p>
    </div>
  );
};
