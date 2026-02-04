import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import data from "../../../data/scheduleData.json";
import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface Event {
  time: string;
  title: string;
  description?: string;
  details?: string[];
}

interface ScheduleDay {
  id: string;
  label: string;
  events: Event[];
}

const scheduleData = (data as ScheduleDay[]) || [];

export const ScheduleSection: React.FC = () => {
  const [activeDayId, setActiveDayId] = useState<string>(scheduleData[0]?.id);

  const activeDay = useMemo(
    () => scheduleData.find((day) => day.id === activeDayId) || scheduleData[0],
    [activeDayId],
  );

  if (!scheduleData.length) return null;

  return (
    <CustomSection id="schedule" bg="bg-whiteBG">
      <OverprintTitle
        title="July 11 — July 22"
        subtitle="Event Schedule"
        className="mb-16"
      />

      <div className="flex flex-col items-center w-full">
        {/* Main Container: Flex row, centered, with gap for spacing */}
        <div className="w-full flex items-center justify-center gap-6 relative max-w-[80vw] lg:max-w-[60vw] mb-16">
          {/* LEFT ARROW */}
          <button
            className="prev-day shrink-0 z-20
            bg-white shadow-sm rounded-full p-2 
            text-primary border border-gray-100 
            disabled:opacity-20 hover:bg-gray-50
             hover:scale-110 transition-all cursor-pointer"
          >
            <HiChevronLeft size={20} />
          </button>

          {/* MIDDLE SECTION: Swiper Wrapper */}
          {/* flex-1: Takes up all available space between arrows */}
          {/* min-w-0: Critical for Swiper to calculate width correctly in a flex container */}
          <div className="flex-1 min-w-0 relative">
            <Swiper
              modules={[Navigation, FreeMode, Mousewheel]}
              navigation={{
                prevEl: ".prev-day",
                nextEl: ".next-day",
              }}
              mousewheel={{ forceToAxis: true }}
              spaceBetween={16}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                640: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                1024: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
              }}
              // px-2 adds a little internal breathing room so slides don't get cut off at the very edge
              className="px-2 w-full"
            >
              {scheduleData.map((day: ScheduleDay) => (
                <SwiperSlide key={day.id}>
                  <button
                    onClick={() => setActiveDayId(day.id)}
                    aria-pressed={activeDayId === day.id}
                    className={`w-full px-4 py-2 
                    rounded-full border transition-all
                    duration-300 font-semibold text-sm 
                    md:text-base outline-none whitespace-nowrap ${
                      activeDayId === day.id
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white text-gray-400 border-gray-200 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {day.label}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT ARROW */}
          <button
            className="next-day shrink-0 bg-white shadow-sm rounded-full
            p-2 text-primary border border-gray-100
             disabled:opacity-20 hover:bg-gray-50 
             hover:scale-110 transition-all cursor-pointer"
          >
            <HiChevronRight size={20} />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="w-full max-w-4xl space-y-8">
          {activeDay.events.map((event, index) => (
            <article
              key={`${activeDayId}-${index}`}
              className="flex gap-4 md:gap-10 animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <div className="min-w-[75px] pt-4">
                <time className="bg-gray-100 text-primary font-bold px-3 py-1.5 rounded text-sm md:text-base">
                  {event.time}
                </time>
              </div>

              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md border-l-4 border-l-transparent hover:border-l-primary">
                <h4 className="text-2xl font-bold text-primary mb-3">
                  {event.title}
                </h4>

                {event.description && (
                  <p className="text-gray-600 leading-relaxed italic">
                    {event.description}
                  </p>
                )}

                {event.details && (
                  <ul className="mt-4 space-y-3">
                    {event.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span
                          className="text-primary mt-1.5 text-[8px]"
                          aria-hidden="true"
                        >
                          ●
                        </span>
                        <span className="text-sm md:text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </CustomSection>
  );
};
