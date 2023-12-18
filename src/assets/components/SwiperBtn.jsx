import React from "react";
import { useSwiper } from "swiper/react";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

export const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="w-[90%] mx-auto flex justify-end items-center gap-3 pt-2">
      <button onClick={() => swiper.slidePrev()}>
        <LeftArrow />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <RightArrow />
      </button>
    </div>
  );
};

export default SwiperBtn;
