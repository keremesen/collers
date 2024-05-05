import { LoveUsCardProps } from "@/app/types/interface";
import Image from "next/image";
import React from "react";

const LoveUsCard: React.FC<LoveUsCardProps> = ({
  logo,
  companyName,
  description,
  avatar,
  userName,
  userTitle,
}) => {
  return (
    <div className="flex flex-col gap-4 p-8 w-[333px] h-[352px] lg:h-[430px] lg:w-[384px] bg-white border border-slate-200 rounded-[20px] shadow-lg">
      <div className="flex items-center gap-2 py-4">
        <Image src={logo} alt="logo" />
        <h6 className="font-bold text-2xl text-slate-600"> {companyName} </h6>
      </div>
      <p className="font-normal text-[16px] lg:text-2xl text-black leading-[38.4px]">{description}</p>
      <div className="flex  pt-4 gap-4">
        <Image src={avatar} alt="avatar" />
        <div className="flex flex-col justify-center">
          <text className="font-normal text-lg text-slate-900">{userName}</text>
          <text className="font-normal text-[16px] text-slate-600">{userTitle}</text>
        </div>
      </div>
    </div>
  );
};

export default LoveUsCard;
