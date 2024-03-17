"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ResponsiveType } from "react-multi-carousel";
import Image from "next/image";

const MainCarousel = () => {
  const SINGLE_ITEM_BREAKPOINTS: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const data = [
    {
      url: "/images/banner3-1-1024x376.jpg",
    },
    {
      url: "/images/banner3-1-1024x376.jpg",
    },
    {
      url: "/images/banner3-1-1024x376.jpg",
    },
  ];

  return (
    <section className="header-slider w-100">
      <div className="swiper position-sticky">
        <div className="swiper-wrapper">
          <Carousel
            responsive={SINGLE_ITEM_BREAKPOINTS}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable>
            {data.map((banner: any, index: number) => {
              return (
                <a key={index} className="flex justify-center items-center w-100">
                  <Image
                    style={{
                      maxHeight: "500px",
                      minHeight: "220px",
                    }}
                    className="img-fluid"
                    src={banner.url}
                    alt="security"
                    width={2170}
                    height={500}
                    quality={100}
                  />
                </a>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MainCarousel;
