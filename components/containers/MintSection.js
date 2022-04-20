import Image from "next/image";
import React from "react";
import MintComponent from "../MintComponent";

const MintSection = () => {
  return (
    <div className="flex justify-center flex-wrap items-start z-50 my-4 md:my-6 lg:my-12 xl:my-20">
      <div className="w-full sm:w-1/4 p-4 md:p-6 lg:p-8">
        <Image
          src="/images/pageImg.png"
          width={280}
          height={523}
          alt="mainImg"
          layout="responsive"
          className="rounded-2xl"
        />
      </div>
      <div className="w-full sm:w-3/4 px-2 md:px-4">
        <MintComponent />
      </div>
    </div>
  );
};

export default MintSection;
