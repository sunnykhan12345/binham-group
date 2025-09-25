"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import country1 from "../../../public/images/country1.png";
import country2 from "../../../public/images/country2.png";
import country3 from "../../../public/images/country3.png";
import country4 from "../../../public/images/country4.png";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true, // ✅ Enables auto sliding
  autoplaySpeed: 3000, // ✅ Time between slides in ms

  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

// 👉 Card Data
const cardData = [
  { image: country1, country: "PAKISTAN", price: "PKR 55,000" },
  { image: country2, country: "THAILAND", price: "PKR 14,500" },
  { image: country3, country: "MALAYSIA", price: "PKR 10,500" },
  { image: country4, country: "SINGAPORE", price: "PKR 9,000" },
];

const VisaCountrySlider = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center pb-9">
        <h1 className="text-[38px] font-semibold">WorldWide Visas</h1>
        <Link
          href="#"
          className="text-[22px] font-semibold text-[#FF6B11] border-b hover:text-black transition-all duration-500"
        >
          View More
        </Link>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {cardData.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="w-full max-w-[300px] h-[92px] border border-[#FF6B11] rounded-[20px] flex items-center bg-white overflow-hidden shadow-sm mx-auto">
                <div className="relative h-full w-[90px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.country}
                    width={90}
                    height={92}
                    className="object-cover h-full rounded-l-[18px]"
                  />
                </div>
                <div className="flex flex-col justify-center px-4 py-2 flex-grow">
                  <span className="text-[#03406D] font-semibold text-[26px] uppercase leading-tight">
                    {item.country}
                  </span>
                  <span className="text-[#FF6B11] font-semibold text-[26px] leading-tight">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default VisaCountrySlider;
