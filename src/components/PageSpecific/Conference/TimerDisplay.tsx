import { useCountdown, formatTime } from "../../../hooks/useCountdown";
import { memo } from "react";

// --- CONFIGURATION ---
// [!] SET THE END DATE HERE (Format: YYYY-MM-DDTHH:MM:SS)
export const CONFERENCE_DATE = "2026-07-13T09:00:00";

// 1. ISOLATED COMPONENT
export const TimerDisplay = () => {
  const { days, hours, minutes, seconds, isFinished } =
    useCountdown(CONFERENCE_DATE);

  if (isFinished) {
    return (
      // UPDATED FORMATTING:
      // - 'w-fit': Prevents the background from stretching across the screen
      // - 'px-[3vw]': Responsive padding
      // - 'uppercase tracking-widest': Makes it look like a proper status label
      <div className="w-fit bg-primary/90 text-white rounded-xl px-[4vw] py-[1.5vh] md:px-[1.5vw] md:py-[1vh] backdrop-blur-sm shadow-lg">
        <span className="text-[4vw] md:text-[1.2vw] font-bold uppercase tracking-widest leading-none">
          The Join period is over
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-[3vw] md:gap-[1.5vw]">
      <CountdownBox value={formatTime(days)} label="Days" />
      <CountdownBox value={formatTime(hours)} label="Hours" />
      <CountdownBox value={formatTime(minutes)} label="Minutes" />
      <CountdownBox value={formatTime(seconds)} label="Seconds" />
    </div>
  );
};

// 2. MEMOIZED UI COMPONENT
const CountdownBox = memo(
  ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-[12vw] h-[12vw] min-w-[45px] min-h-[45px] md:w-[5vw] md:h-[5vw] md:max-w-[100px] md:max-h-[100px] bg-primary rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 will-change-transform">
        <span className="text-[5vw] md:text-[2vw] font-bold text-white font-mono leading-none tabular-nums">
          {value}
        </span>
      </div>

      <span className="mt-2 text-[2.5vw] md:text-[0.7vw] font-medium uppercase tracking-wider text-white">
        {label}
      </span>
    </div>
  ),
);
