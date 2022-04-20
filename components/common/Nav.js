import Image from "next/image";
import React from "react";
import { WalletConnectButton } from "../elements/WalletConnectButton";

const Nav = () => {
  return (
    <div className="flex justify-between items-center w-full p-2 md:p-4 lg:p-6 bg-gradient-to-b from-white to-transparent">
      <Image
        src={"/images/logo.png"}
        width={260}
        height={34}
        layout="fixed"
        alt="logo"
      />
      <WalletConnectButton />
    </div>
  );
};

export default Nav;
