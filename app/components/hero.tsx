import React from "react";
import shoeSvg from "@/app/assets/shoe.svg";
import watchSvg from "@/app/assets/watch.svg";
import trophyRectangle from "@/app/assets/trophyRectangle.svg";
import tunnelRectangle from "@/app/assets/tunnelRectangle.svg";
import tvRectangle from "@/app/assets/tvRectangle.svg";
import Image from "next/image";
import { Trophy, Tunnel, Tv } from "iconoir-react";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-auto">
      <span className="absolute right-0 bottom-0 -z-10 block border-l-transparent border-t-transparent border-x-[806px] border-y-[424px] border-amber-100 w-0 h-0 "></span>
      <div className="flex flex-col md:flex-row justify-between w-full gap-20 p-20">
        <div className="flex flex-col gap-12 max-w-[714px] max-md:items-center max-md:text-center ">
          <h1 className="text-7xl font-extrabold text-slate-900">Collectible Sneakers</h1>
          <p className="text-lg font-normal">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="text-amber-900 gap-4 flex items-center">
            <button className="border-2 border-amber-900 rounded-lg p-4 w-[179px] hover:border-amber-700 hover:text-amber-700">
              Sign up now
            </button>
            <button className="hover:text-amber-700 flex items-center gap-2 px-3 py-2 ">
              <Image src={watchSvg} alt="Shoe" width={30} height={30} />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Image src={shoeSvg} alt="Shoe" width={600} height={600} />
        </div>
      </div>
      {/* BADGES */}
      <div className="flex flex-col md:flex-row max-md:text-center gap-20 p-20 w-full justify-between text-slate-900">
        <div className="flex flex-col gap-4 max-md:items-center">
          <span className="relative flex">
            <Image src={trophyRectangle} alt="Shoe" className="absolute left-8" width={64} height={64} />
            <Trophy color="#7c2d12" width={64} height={64} />
          </span>
          <h3 className="text-xl font-medium">Nibh viverra</h3>
          <p className="text-lg font-normal">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo,
            massa.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-md:items-center">
          <span className="relative flex">
            <Image
              src={tunnelRectangle}
              alt="Shoe"
              className="absolute left-6 -top-4"
              width={54}
              height={54}
            />
            <Tunnel color="#7c2d12" width={64} height={64} />
          </span>
          <h3 className="text-xl font-medium">Cursus amet</h3>
          <p className="text-lg font-normal">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo,
            massa.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-md:items-center">
          <span className="relative flex">
            <Image src={tvRectangle} alt="Shoe" className="absolute left-10 -top-2 " width={52} height={52} />
            <Tv color="#7c2d12" width={64} height={64} />
          </span>
          <h3 className="text-xl font-medium">Ipsum fermentum</h3>
          <p className="text-lg font-normal">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo,
            massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
