import React from "react";
import tooltipShoe from "@/app/assets/tooltipShoe.svg";
import Image from "next/image";

const Tooltip = () => {
  return (
    <div className="flex flex-col relative">
      <Image src={tooltipShoe} alt="tooltip shoe" className="" />
      <div className="absolute -bottom-[22px] bg-slate-200 text-slate-900 left-7 w-[250px] px-4 h-16 rounded-b-[5px] shadow-2xl -z-10 ">
        <h2 className="text-sm font-normal leading-[19.6px] ">
          Emma Simpson collected one pair of <b>Cool Shoes.</b>
        </h2>
        <span className="w-2 h-2  -rotate-45 bg-slate-200 absolute -bottom-1 left-0 right-0 mx-auto"></span>
      </div>
    </div>
  );
};

export default Tooltip;
