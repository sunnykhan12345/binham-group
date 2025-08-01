import Image from "next/image";
import Link from "next/link";
import React from "react";
import country1 from "../../../public/images/country1.png";
const VisaCountrySlider = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center pb-9">
        <h1 className="text-[38px] font-semibold ">WorldWide Visas</h1>
        <Link
          href="#"
          className="text-[22px] font-semibold text-[#FF6B11] border-b hover:text-black transition-all duration-500"
        >
          View More
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 gap-5">
        <div className=" w-full h-[92px] border border-[#FF6B11] rounded-[20px]">
          <Image src={country1} width={90} height={90}  alt="country" className="w-[90px] h-auto object-cover " />
       
        </div>
        <div className=" w-full h-[92px] border border-[#FF6B11] rounded-[20px]"></div>
        <div className=" w-full h-[92px] border border-[#FF6B11] rounded-[20px]"></div>
        <div className=" w-full h-[92px] border border-[#FF6B11] rounded-[20px]"></div>
      </div>
    </section>
  );
};

export default VisaCountrySlider;
