import Image from "next/image";
import React from "react";
import Title from "../elements/Title";
import MintComponent from "../MintComponent";

const MintSection = () => {
  return (
    <div className="flex justify-center flex-wrap items-start z-50 my-4 md:my-6 lg:my-12 xl:my-20">
      <Title title={"Mint Section"}/>
      <div className="w-full  px-2 md:px-4">
        <MintComponent />
      </div>
    </div>
  );
};

export default MintSection;
