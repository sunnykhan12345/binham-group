"use client";

import Slider from "react-slick";
import Image from "next/image";

const destinationData = [
  { title: "Malaysia", img: "/images/des1.png" },
  { title: "Bali", img: "/images/des2.png" },
  { title: "Dubai", img: "/images/des1.png" },
  { title: "Turkey", img: "/images/des2.png" },
  { title: "Switzerland", img: "/images/des1.png" },
];

const TopDestinationsSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:py-20 py-12 text-white bg-[#03406D]">
      <div className="max-w-[1244px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 lg:px- px-4">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold">Top Destinations</h1>
          <a href="#" className="text-[#FF6B11] text-xl hover:underline">
            View More
          </a>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {destinationData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="">
                <div className="relative border-2 rounded-[20px] border-[#FF6B11]">
                  <div className="overflow-hidden rounded-[20px] h-[257px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={385}
                      height={257}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute top-3 left-3 bg-gray-300  text-black text-sm font-semibold px-3 py-1 rounded-[50px]">
                    Featured
                  </button>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopDestinationsSlider;
