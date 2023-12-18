import React from "react";
// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// My Components
import Faq1 from "./Faq1";
import Faq2 from "./Faq2";
import Faq3 from "./Faq3";
import SwiperBtn from "./SwiperBtn";

function Faq() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Faq1 />
        </SwiperSlide>
        <SwiperSlide>
          <Faq2 />
        </SwiperSlide>
        <SwiperSlide>
          <Faq3 />
        </SwiperSlide>

        <SwiperBtn />
      </Swiper>
    </div>
  );
}

export default Faq;
