"use client";

import Image from "next/image";
import React from "react";
import hero from "../../../public/images/hero.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="w-full h-screen object-cover relative">
      <Image
        src={hero}
        alt="Hero Banner"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover w-full h-auto"
      />
     <Navbar />
    </section>
  );
};

export default Hero;
