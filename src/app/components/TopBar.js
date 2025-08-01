"use client";

import React from "react";

const TopBar = () => {
  return (
    <section className="bg-[#FF6B11] h-auto md:h-[100px] py-2 md:py-0">
      <div className="flex flex-col md:flex-row justify-center items-center text-white space-y-2 md:space-y-0 md:space-x-4 h-full text-sm md:text-lg font-semibold  text-center cursor-pointer">
        <p className="transition duration-300 hover:underline hover:text-black">
       info@binhamaviation.com
        </p>
        <span className="md:inline hidden">|</span>
        <p className="transition duration-300 hover:underline hover:text-black">
          +92(335)6777177
        </p>
        <span className="md:inline hidden">|</span>
        <p className="transition duration-300 hover:underline hover:text-black">
          +92(311)9843152
        </p>
        <span className="md:inline hidden">|</span>
        <p className="transition duration-300 hover:underline hover:text-black">
          +92(334)5421633
        </p>
      </div>
    </section>
  );
};

export default TopBar;
