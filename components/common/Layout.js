import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      <header className="flex-0 w-full max-w-[1366px] mx-auto ">
        <Nav />
      </header>
      <main className="flex-1 w-full overflow-hidden max-w-[1366px] mx-auto z-40 ">
        {children}
      </main>
      <footer className="flex-0 w-full overflow-hidden max-w-[1366px] mx-auto mt-12 md:mt-16 border-t py-4 text-center text-gray-600 border-gray-200">
        Cool Cat Collection @ All rights reserved
      </footer>
    </div>
  );
};

export default Layout;
