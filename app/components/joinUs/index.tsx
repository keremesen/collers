import Image from "next/image";
import React from "react";
import videoSvg from "@/app/assets/video.svg";
import tickSvg from "@/app/assets/tick.svg";

const JoinUs = () => {
  return (
    <div className="flex items-center justify-center h-auto 2xl:h-[816px] py-40 px-20 ">
      <div className="flex flex-col 2xl:flex-row p-10 gap-10 bg-white rounded-[30px] shadow-xl shadow-[#0000001A] h-auto 2xl:h-[496px] w-4/5 max-w-[1280px] min-w-[361px] ">
        <div className="flex flex-col gap-6 max-2xl:items-center max-2xl:text-center justify-center">
          <h2 className="text-slate-900 font-bold lg:font-extrabold text-[32px] lg:text-[56px]">
            Why join us
          </h2>
          <ul className=" flex flex-col text-left font-normal text-slate-900 text-[16px] lg:text-xl lg:min-w-max ">
            <li className="flex gap-2 items-start justify-start">
              <Image src={tickSvg} alt="tick" width={24} height={24} />
              <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
            </li>
            <li className="flex gap-2 items-start justify-start">
              <Image src={tickSvg} alt="tick" width={24} height={24} />
              <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>
            </li>
            <li className="flex gap-2 items-start justify-start">
              <Image src={tickSvg} alt="tick" width={24} height={24} />
              <p>Ullamcorper ornare in et egestas dolor orci.</p>
            </li>
          </ul>
          <button className="flex border-2 border-amber-900 text-amber-900 rounded-lg p-4 w-[179px] h-14 items-center justify-center hover:border-amber-700 hover:text-amber-700 z-50">
            Sign up now
          </button>
        </div>
        <Image
          src={videoSvg}
          alt="join us"
          width={713}
          height={625.24}
          className="scale-150 md:scale-125 2xl:scale-150"
        />
      </div>
    </div>
  );
};

export default JoinUs;
