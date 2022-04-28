import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      {/* <div className="fixed">
        <Image
          className=""
          src={"/images/bluishBackgournd.svg"}
          width={788}
          height={896}
          layout="fixed"
          alt="first-background "
        />
      </div>
      <div className="fixed left-[200px] -top-28">
        <Image
          className=""
          src={"/images/greenishBackground.svg"}
          width={923}
          height={857}
          layout="fixed"
          alt="second-background"
        />
      </div>
      <div className="fixed left-[100px] top-[200px]">
        <Image
          className=""
          src={"/images/greenishBackground.svg"}
          width={923}
          height={857}
          layout="fixed"
          alt="second-background"
        />
      </div>
      <div className="fixed -right-[400px] top-[200px]">
        <Image
          className=""
          src={"/images/greenishBackground.svg"}
          width={923}
          height={857}
          layout="fixed"
          alt="second-background"
        />
      </div> */}
      <header className="flex-0 w-full max-w-[1366px] mx-auto ">
        <Nav />
      </header>
      <main className="flex-1 w-full overflow-hidden max-w-[1366px] mx-auto z-40 ">
        {children}
      </main>
      <footer className="flex-0 w-full overflow-hidden max-w-[1366px] mx-auto "></footer>
    </div>
  );
};

export default Layout;
