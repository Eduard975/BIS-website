import { TEAM_MEMBERS } from "../../../data/TeamMembers";
import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";
import { PersonCard } from "../../Universal/PersonCard";

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
