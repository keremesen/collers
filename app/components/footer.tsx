import React from "react";
import { footerButtonNames } from "../constants";
import { Youtube, Facebook, Twitter, Instagram, Linkedin, Language } from "iconoir-react";
import Image from "next/image";
import appStoreSvg from "@/app/assets/appStore.svg";
import playStoreSvg from "@/app/assets/playStore.svg";
import youtubeSvg from "@/app/assets/youtube.svg";
import facebookSvg from "@/app/assets/facebook.svg";
import twitterSvg from "@/app/assets/twitter.svg";
import instagramSvg from "@/app/assets/instagram.svg";
import linkedinSvg from "@/app/assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-slate-900 w-full min-h-[464px] h-auto text-white">
      <div className="flex flex-col md:flex-row max-md:items-center w-4/5 px-12 gap-12 border-b-[1px] border-slate-700 justify-between py-20">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-[16px] font-medium text-white">Product</h1>
          {footerButtonNames.product.map((name) => (
            <button className="text-[16px] font-normal text-slate-200" key={name}>
              {name}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-[16px] font-medium text-white">Solutions</h1>
          {footerButtonNames.solutions.map((name) => (
            <button className="text-[16px] font-normal text-slate-200" key={name}>
              {name}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-[16px] font-medium text-white">Support</h1>
          {footerButtonNames.support.map((name) => (
            <button className="text-[16px] font-normal text-slate-200" key={name}>
              {name}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center max:mdtext-center md:items-start gap-4">
          <h1 className="text-[16px] font-medium text-white">Get the App</h1>
          <Image src={appStoreSvg} alt="app-store" width={120} height={40} />
          <Image src={playStoreSvg} alt="play-store" width={120} height={40} />
          <div>
            <h1 className="text-[16px] font-medium text-white mt-5 mb-2 max-md:text-center">Follow Us</h1>
            <div>
              <div className="flex gap-4">
                <Image src={youtubeSvg} alt="youtube" width={24} height={24} />
                <Image src={facebookSvg} alt="facebook" width={24} height={24} />
                <Image src={twitterSvg} alt="twitter" width={24} height={24} />
                <Image src={instagramSvg} alt="instagram" width={24} height={24} />
                <Image src={linkedinSvg} alt="linkedin" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex max-md:flex-col max-md:items-center max-md:space-y-8 justify-between py-10">
        <h1 className="text-[16px] font-normal text-slate-200">Collers @ 2023. All rights reserved.</h1>
        <div className="gap-8 flex">
          <button className="text-[16px] font-normal text-slate-200">Terms</button>
          <button className="text-[16px] font-normal text-slate-200">Privacy</button>
          <button className="text-[16px] font-normal text-slate-200">Contact</button>
          <span className="flex gap-2">
            <Language color="#fff" />
            <button className="text-[16px] font-normal text-slate-200">EN</button>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
