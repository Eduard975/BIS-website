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
        subtitle="Symposium Schedule"
        className="mb-16"
      />

      <div className="flex flex-col items-center w-full">
        <div className="w-full flex items-center justify-center gap-4 md:gap-8 relative max-w-full md:max-w-4xl lg:max-w-6xl mb-16">
          <button className="prev-day shrink-0 z-20 bg-white shadow-sm rounded-full p-2 text-primary border border-gray-100 disabled:opacity-20 hover:bg-gray-50 transition-all cursor-pointer">
            <HiChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="flex-1 min-w-0 relative">
            <Swiper
              modules={[Navigation, FreeMode, Mousewheel]}
              navigation={{
                prevEl: ".prev-day",
                nextEl: ".next-day",
              }}
              mousewheel={{ forceToAxis: true }}
              breakpoints={{
                320: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 12 },
                640: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 14 },
                960: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 16 },
              }}
              className="px-1 w-full"
            >
              {scheduleData.map((day: ScheduleDay) => (
                // ADDED: flex justify-center to center the button in its slot
                <SwiperSlide key={day.id} className="flex justify-center">
                  <button
                    onClick={() => setActiveDayId(day.id)}
                    className={`
                      w-auto h-10 rounded-full border transition-all duration-300 
                      flex items-center justify-center
                      outline-none whitespace-nowrap
                      
                      px-4 lg:px-6
                      
                      text-xs sm:text-sm lg:text-base font-bold
                      
                      ${
                        activeDayId === day.id
                          ? "bg-primary text-white border-primary shadow-md"
                          : "bg-white text-gray-400 border-gray-200 hover:border-primary/40 hover:text-primary"
                      }
                    `}
                  >
                    {day.label}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="next-day shrink-0 bg-white shadow-sm rounded-full p-2 text-primary border border-gray-100 disabled:opacity-20 hover:bg-gray-50 transition-all cursor-pointer">
            <HiChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="w-full max-w-4xl space-y-4">
          {activeDay.events.map((event, index) => {
            const hasExtra = !!(
              event.description ||
              (event.details && event.details.length > 0)
            );

            return (
              <article
                key={`${activeDayId}-${index}`}
                className="flex gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <div className="min-w-[75px] pt-3">
                  <time className="bg-gray-100 text-primary font-bold px-3 py-1.5 rounded text-sm md:text-base">
                    {event.time}
                  </time>
                </div>

                <div
                  className={`
                    flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm 
                    transition-all duration-300 hover:shadow-md border-l-4 border-l-transparent 
                    hover:border-l-primary flex flex-col justify-center
                    ${hasExtra ? "p-5 md:p-6" : "p-3 md:p-4"} 
                  `}
                >
                  <h4
                    className={`text-xl md:text-2xl font-bold text-primary ${hasExtra ? "mb-2" : "mb-0"}`}
                  >
                    {event.title}
                  </h4>

                  {event.description && (
                    <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                      {event.description}
                    </p>
                  )}

                  {event.details && (
                    <ul className="mt-3 space-y-2">
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
            );
          })}
        </div>
      </div>
    </CustomSection>
  );
};
