"use client";

import React, { useState } from "react";
import SampleArrowLeft from "./simpleArrowLeft";
import SampleArrowRight from "./simpleArrowRight";

const OurPartnersBtnsGroup = ({ next, previous, goToSlide, lang, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  const [isOverRight, setIsOverRight] = useState<boolean>(false);
  const [isOverLeft, setIsOverLeft] = useState<boolean>(false);

  return (
    <>
      <div className={`top-slider-arrows absolute mx-2 ${lang === "en" ? "end-0" : "start-0"}`} style={{ top: "-0px" }}>
        {lang === "en" ? (
          <>
            <div
              className="swiper-button-prev-outside"
              onClick={() => previous()}
              onMouseOver={() => setIsOverRight(true)}
              onMouseLeave={() => setIsOverRight(false)}>
              <SampleArrowLeft fill={isOverRight ? "#264aec" : "white"} width={16} height={16} />
            </div>
            <div
              className="swiper-button-next-outside"
              onClick={() => next()}
              onMouseOver={() => setIsOverLeft(true)}
              onMouseLeave={() => setIsOverLeft(false)}>
              <SampleArrowRight fill={isOverLeft ? "#264aec" : "white"} width={16} height={16} />
            </div>
          </>
        ) : (
          <>
            <div
              className="swiper-button-next-outside"
              onClick={() => next()}
              onMouseOver={() => setIsOverLeft(true)}
              onMouseLeave={() => setIsOverLeft(false)}>
              <SampleArrowRight fill={isOverLeft ? "#264aec" : "white"} width={16} height={16} />
            </div>
            <div
              className="swiper-button-prev-outside"
              onClick={() => previous()}
              onMouseOver={() => setIsOverRight(true)}
              onMouseLeave={() => setIsOverRight(false)}>
              <SampleArrowLeft fill={isOverRight ? "#264aec" : "white"} width={16} height={16} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OurPartnersBtnsGroup;
