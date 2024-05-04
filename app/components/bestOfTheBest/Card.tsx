import { BestOfBestCardProps } from "@/app/types/interface";
import Image from "next/image";
import React from "react";
import buyNowSvg from "@/app/assets/buyNow.svg";

const BestOfBestCard: React.FC<BestOfBestCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-slate-900 w-[361px] md:w-[394.67px] h-auto border border-slate-900 rounded-[10px] shadow-xxl z-50">
      <Image src={image} alt="shoe" width={394.67} height={220} className="rounded-t-[10px]" />
      <div className="flex flex-col gap-4 py-8 pl-8">
        <h2 className="text-white font-bold text-[24px]">{title}</h2>
        <p className="text-white text-lg font-normal">{description}</p>
      </div>
      <div className="flex gap-4 p-8">
        <button className="flex  items-center  justify-center border-2 border-white rounded-lg p-4 w-[330.67px] h-14  text-white text-xl font-medium ">
          <Image src={buyNowSvg} alt="buy now" width={24} height={24} />
          <text className="px-4">Buy Now</text>
        </button>
      </div>
    </div>
  );
};

export default BestOfBestCard;
