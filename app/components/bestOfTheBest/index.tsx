import Image from "next/image";
import React from "react";
import backlight from "@/app/assets/backlights.svg";
import Card from "./Card";
import { bestOfBestCardsData } from "@/app/constants";

const BestOfTheBest = () => {
  return (
    <div className="flex flex-col bg-slate-900 h-auto gap-20 p-20 ">
      {/* TITLE */}
      <div className="flex flex-col flex-wrap lg:flex-row max-lg:items-center max-lg:text-center justify-between gap-20">
        <h1 className="text-white font-bold text-[32px] md:font-extrabold md:text-[56px] md:leading-[61.6px] leading-[35.2px] ">
          The Best Of The Best
        </h1>
        <button className="border-2 border-white text-white rounded-lg px-5 py-6 w-[233px] h-16 flex items-center justify-center font-bold text-2xl">
          Sign up now
        </button>
      </div>
      {/* CARDS */}
      <div className="flex flex-col 2xl:flex-row w-full items-center max-2xl:gap-8 justify-evenly">
        <Image
          src={backlight}
          alt="backlight"
          className="max-2xl:rotate-90 absolute max-2xl:min-w-[900px]"
          width={1440}
          height={527}
        />
        {bestOfBestCardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default BestOfTheBest;
