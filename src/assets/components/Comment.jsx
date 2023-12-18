import React from "react";
// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// My Components
import Comment1 from "./Comment1";
import Comment2 from "./Comment2";
import Comment3 from "./Comment3";
import SwiperBtn from "./SwiperBtn";

function Comment() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Comment1 />
        </SwiperSlide>
        <SwiperSlide>
          <Comment2 />
        </SwiperSlide>
        <SwiperSlide>
          <Comment3 />
        </SwiperSlide>

        <SwiperBtn />
      </Swiper>
    </div>
  );
}

export default Comment;
