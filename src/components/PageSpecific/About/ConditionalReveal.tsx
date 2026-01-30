import {
  GENERAL_APPLICATION_URL,
  INGENIUM_APPLICATION_URL,
} from "../../../data/Links";
import { PrimaryButton } from "../../Universal/PrimaryButton";

interface ConditionalRevealProps {
  studentType: "ingenium" | "general";
}

const ConditionalReveal = ({ studentType }: ConditionalRevealProps) => {
  if (studentType === "ingenium") {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 text-justify">
        <div className="flex items-center gap-3">
          <span className="text-primary text-xs font-black tracking-widest uppercase">
            PARTNER PATH
          </span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Since your university is part of the{" "}
          <strong>INGENIUM European University Alliance</strong>, you have a
          dedicated application portal.
        </p>
        <PrimaryButton
          fullWidth
          size="normal"
          onClick={() => window.open(INGENIUM_APPLICATION_URL, "_blank")}
        >
          Apply via INGENIUM
        </PrimaryButton>
      </div>
    );
  }

  if (studentType === "general") {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 text-justify">
        <div className="flex items-center gap-3">
          <span className="text-primary text-xs font-black tracking-widest uppercase">
            GENERAL PATH
          </span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          For students from all other <strong>STEM universities</strong> or
          active members of the <strong>BEST network</strong>.
        </p>
        <PrimaryButton
          fullWidth
          size="normal"
          onClick={() => window.open(GENERAL_APPLICATION_URL, "_blank")}
        >
          General Application
        </PrimaryButton>
      </div>
    );
  }

  return null;
};

export default ConditionalReveal;
