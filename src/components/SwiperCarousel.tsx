import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export interface CarouselItem {
  id: string | number;
  imageSrc: string;
  altText: string;
  redirectUrl: string;
}

interface SwiperCarouselProps {
  data: CarouselItem[];
}

const SwiperCarousel = ({ data }: SwiperCarouselProps) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // === MOBILE: 1 Card Visible ===
          0: {
            slidesPerView: 1, // Shows exactly 1 card
            centeredSlides: true, // Centers it
          },
          // === DESKTOP: 3 Cards Visible ===
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        className="w-full h-[250px]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <div
              className="
                relative w-full h-full 
                bg-white rounded-2xl overflow-hidden 
                border border-gray-100 shadow-md 
                cursor-pointer 
                hover:shadow-lg transition-shadow duration-300
              "
              onClick={() => navigate(item.redirectUrl)}
            >
              <div className="w-full h-full p-6 flex items-center justify-center">
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
