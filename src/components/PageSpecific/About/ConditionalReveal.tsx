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
          This registration path is open to{" "}
          <strong className="text-white">everyone</strong> from{" "}
          <strong className="text-white">STEM universities</strong> or the{" "}
          <strong className="text-white">
            INGENIUM European University Alliance
          </strong>
          . Please complete your application via our dedicated Form.
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
            BAS Path
          </span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          For active members of the BEST network, please complete your
          registration via the{" "}
          <strong className="text-white">BEST Application System</strong>.
        </p>
        <PrimaryButton
          fullWidth
          size="normal"
          href={BEST_APPLICATION_URL}
          target="_blank"
          analyticsLabel="Apply: BAS System"
        >
          Apply via BAS
        </PrimaryButton>
      </div>
    );
  }

  return null;
};

export default ConditionalReveal;
