"use client";
import { collectionData } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";
import arrowRight from "@/app/assets/collection/collectionArrowRight.svg";

const CollectionContent = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-between">
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
            {selected === index && <Image src={arrowRight} alt="arrowRight" className=" absolute right-4" />}
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
  );
};

export default CollectionContent;
