import React from "react";
import worldMap from "@/app/assets/worldMap.svg";
import Image from "next/image";
import Tooltip from "./tooltip";
const ShoeCollected = () => {
  return (
    <div className="flex relative items-center justify-center gap-20 p-20 h-[717px] bg-amber-900 text-amber-50 ">
      <div className=" absolute ">
        <Image src={worldMap} alt="world map" className="object-cover object-left min-w-full h-[635px] " />
        <div className="absolute -top-10 left-1 z-50">
          <Tooltip />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-amber-50 z-50">
        <h1 className=" font-extrabold text-[56px] md:text-[96px] leading-[52.8px] md:leading-[105.6px]">
          11,658,467
        </h1>
        <h1 className=" font-extrabold text-[32px] md:text-[56px] leading-[35.2px] md:leading-[61.6px]">
          Shoes Collected
        </h1>
      </div>
    </div>
  );
};

export default ShoeCollected;
