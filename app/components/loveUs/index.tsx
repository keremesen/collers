"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { type Swiper as SwiperRef } from "swiper";
import { loveUsCardsData } from "@/app/constants";
import LoveUsCard from "./LoveUsCard";
import arrowLeft from "@/app/assets/arrow-left.svg";
import arrowRight from "@/app/assets/arrow-right.svg";

const LoveUs = () => {
  const swiperRef = useRef<SwiperRef>();

  return (
    <div className="flex flex-col relative gap-20 p-20 h-[832px] w-full">
      <div className="flex justify-center lg:justify-between items-center h-[62px] w-full gap-12">
        <h2 className=" font-bold text-[32px] lg:font-extrabold lg:text-[56px] text-slate-900 md:leading-[61.6px] leading-[35.2px]">
          Because they love us
        </h2>
        <div className="hidden lg:flex gap-6 ">
          <button
            className="flex justify-center items-center h-12 w-12 rounded-full border-2 border-amber-900"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image src={arrowLeft} alt="arrow-left" width={12.5} height={12} />
          </button>
          <button
            className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-amber-900"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image src={arrowRight} alt="arrow-right" width={12.5} height={12} />
          </button>
        </div>
      </div>

      <span className="flex absolute bg-amber-200 h-[421px] w-full  lg:w-5/6 left-0 right-0 mx-auto bottom-[192px]  "></span>

      <div className="absolute left-0  bottom-[148px] lg:bottom-24 w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          slidesPerView={"auto"}
          className=""
        >
          {loveUsCardsData.map((card, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
              }}
            >
              <LoveUsCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LoveUs;
