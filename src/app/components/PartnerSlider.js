"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Sample mock logos
const partners = [
  "/images/comapny.png",
  "/images/comapny1.png",
  "/images/company2.png",
  "/images/comapny2.png",
];

const PartnerSlider = () => {
  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // smooth infinite scroll
    arrows: false,
    pauseOnHover: true,
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

  return (
    <section className="max-w-[1296px] mx-auto px-4 py-20 overflow-hidden">
      <h3 className="text-[38px] font-semibold mb-10">Our Partners</h3>
      <div className="relative">
        <Slider {...settings}>
          {partners.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-[20px] border-2 border-[#FF6B11]  shadow-md p-4 h-[149px] flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={logo}
                  alt={`Partner ${index}`}
                  width={247}
                  height={117}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Optional gradients (like your marquee effect) */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default PartnerSlider;
