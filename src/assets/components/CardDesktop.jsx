import React from "react";
// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// My Components
import CarouselItem1 from "./CarouselItem1";
import CarouselItem2 from "./CarouselItem2";
import CarouselItem3 from "./CarouselItem3";
import SwiperBtn from "./SwiperBtn";

function CardDesktop() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
      >
        <SwiperSlide>
          <CarouselItem1 />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem2 />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem3 />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem1 />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem2 />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem3 />
        </SwiperSlide>

        <SwiperBtn />
      </Swiper>
    </div>
  );
}

export default CardDesktop;
