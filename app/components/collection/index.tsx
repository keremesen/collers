"use client";
import React, { useState } from "react";
import Image from "next/image";
import { collectionData } from "@/app/constants";
import arrowRight from "@/app/assets/collection/collectionArrowRight.svg";
import waves from "@/app/assets/collection/collectionWaves.svg";

const Collection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex relative flex-col h-auto md:h-[996px] gap-20 px-20 pt-20 pb-[128px] ">
      <div className="flex flex-col max-md:items-center max-md:justify-center max-md:text-center gap-8 text-slate-900 ">
        <h2 className="font-extrabold text-[32px] md:text-[56px] md:leading-[61.6px] leading-[35.2px]">Grow your collection</h2>
        <p className="font-normal text-[18px] md:text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu
          non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et
          volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-20 justify-between">
        <ul className="flex md:flex-col gap-4 max-md:overflow-x-auto no-scrollbar max-md:p-2">
          {collectionData.map((data, index) => (
            <li
              key={index}
              className={`flex relative p-4 gap-4 rounded-lg min-w-[240px] w-[254px] h-14 items-center cursor-pointer ${
                selected === index ? "bg-white shadow-md" : ""
              } `}
              onClick={() => setSelected(index)}
            >
              <Image src={data.icon} alt="icon" />
              <span className="text-[20px] font-medium text-slate-900">{data.title}</span>
              {selected === index && (
                <Image src={arrowRight} alt="arrowRight" className=" absolute right-4" />
              )}
              <h5> </h5>
            </li>
          ))}
        </ul>
        <div>
          {typeof collectionData[selected].content === "string" ? (
            <p className="font-normal text-[16px] md:text-lg">{collectionData[selected].content}</p>
          ) : (
            <Image src={collectionData[selected].content} className="flex min-w-96" alt="bibendum tellus" />
          )}
        </div>
      </div>
      {/* WAVES */}
      <Image src={waves} alt="waves" className="absolute w-full bottom-0 right-0 -z-10" />
    </div>
  );
};

export default Collection;
