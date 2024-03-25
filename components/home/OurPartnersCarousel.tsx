"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ResponsiveType } from "react-multi-carousel";
import OurPartnersBtnsGroup from "./OurPartnersBtnsGroup";
import Image from "next/image";
import CategoryCard from "./PartnerCard";

interface Props {
  lang: string;
  partnersTabs: any[];
}

const OurPartnersCarousel = ({ lang, partnersTabs }: Props) => {
  const isRtl = lang === "ar";

  const TOP_CATEGORIES_BREAKPOINTS: ResponsiveType = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 5,
      slidesToSlide: 1,
    },
    betweenDesktopAndTablet: {
      breakpoint: { max: 1200, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
      items: 5,
      slidesToSlide: 1,
    },
    betweenTabletAndMobile: {
      breakpoint: { max: 850, min: 600 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container">
      <div className="categories-wrapper">
        <div className="swiper sticky">
          <div className="swiper-wrapper" style={{ paddingTop: "2rem" }}>
            <Carousel
              additionalTransfrom={0}
              autoPlay
              autoPlaySpeed={5000}
              ssr={true}
              arrows={false}
              centerMode={false}
              containerClass=""
              responsive={TOP_CATEGORIES_BREAKPOINTS}
              customButtonGroup={<OurPartnersBtnsGroup lang={lang} />}
              renderButtonGroupOutside
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderDotsOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              rtl={isRtl}>
              {partnersTabs.map((partner: string, index: number) => {
                return (
                  <div key={`partner--key-${index}`} className="p-[1rem]">
                    <CategoryCard item={partner} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnersCarousel;
