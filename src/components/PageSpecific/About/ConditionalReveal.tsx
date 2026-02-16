import {
  GENERAL_APPLICATION_URL,
  BEST_APPLICATION_URL,
} from "../../../data/Links";
import { PrimaryButton } from "../../Universal/PrimaryButton";

interface ConditionalRevealProps {
  studentType: "ingenium/stem" | "best";
}

const ConditionalReveal = ({ studentType }: ConditionalRevealProps) => {
  if (studentType === "ingenium/stem") {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 text-justify">
        <div className="flex items-center gap-3">
          <span className="text-primary text-sm font-black tracking-widest uppercase">
            General Path
          </span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Choose this option if you study at a university that is part of the{" "}
          <strong className="text-white">INGENIUM Alliance</strong>, or if you
          are a <strong className="text-white">STEM student</strong> in a city{" "}
          <strong className="text-white">without</strong> a local BEST group.
        </p>
        <PrimaryButton
          fullWidth
          size="normal"
          href={GENERAL_APPLICATION_URL}
          target="_blank"
          analyticsLabel="Apply: Google Form"
        >
          Open Application Form
        </PrimaryButton>
      </div>
    );
  }

  if (studentType === "best") {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 text-justify">
        <div className="flex items-center gap-3">
          <span className="text-primary text-sm font-black tracking-widest uppercase">
            BEST Application System Path
          </span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This option is for students who are{" "}
          <strong className="text-white">members of a local BEST group</strong>,
          or <strong className="text-white">STEM students</strong> studying in a
          city where a{" "}
          <strong className="text-white">BEST group is active</strong>.
        </p>
        <PrimaryButton
          fullWidth
          size="normal"
          href={BEST_APPLICATION_URL}
          target="_blank"
          analyticsLabel="Apply: BEST Application System"
        >
          Apply via BAS
        </PrimaryButton>
      </div>
    );
  }

  return null;
};

export default ConditionalReveal;
