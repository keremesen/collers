import React from "react";
import Image from "next/image";
import waves from "@/app/assets/collection/collectionWaves.svg";
import CollectionContent from "./collectionContent";

const Collection = () => {
  return (
    <div className="flex relative flex-col h-auto md:h-[996px] gap-8 md:gap-20 py-12 px-4 md:p-20  ">
      <div className="flex flex-col max-md:items-center max-md:justify-center max-md:text-center gap-8 text-slate-900 ">
        <h2 className="font-extrabold text-[32px] md:text-[56px] md:leading-[61.6px] leading-[35.2px]">
          Grow your collection
        </h2>
        <p className="font-normal text-[18px] md:text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu
          non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et
          volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <CollectionContent />
      {/* WAVES */}
      <Image src={waves} alt="waves" className="absolute w-full bottom-0 right-0 -z-10" />
    </div>
  );
};

export default Collection;
