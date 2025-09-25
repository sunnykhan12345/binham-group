"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import mala from "../../../public/images/mala.png";
import { AirPlane } from "../../../public/icons/icon";
import { Timer } from "lucide-react";

// ✅ Mock Data
const packages = [
  {
    id: 1,
    title: "Malaysia + Srilanka",
    location: "Malaysia, Sri Lanka",
    duration: "7 Days - 6 Nights",
    image: mala,
    featured: true,
  },
  {
    id: 2,
    title: "Thailand + Bali",
    location: "Thailand, Indonesia",
    duration: "5 Days - 4 Nights",
    image: mala,
    featured: true,
  },
  {
    id: 3,
    title: "Dubai + Turkey",
    location: "Dubai, Turkey",
    duration: "6 Days - 5 Nights",
    image: mala,
    featured: true,
  },
];

const BestHolidayPackages = () => {
  return (
    <section className="max-w-[1296px] mx-auto px-6 lg:pt-20 pt-14 pb-20">
      {/* Heading */}
      <div className="flex sm:justify-between justify-center items-center pb-9">
        <h1 className="sm:text-[38px] text-3xl sm:text-start text-center font-semibold">Best Holiday Packages</h1>
        <Link
          href="#"
          className="text-[22px] sm:block hidden font-semibold text-[#FF6B11] border-b hover:text-black transition-all duration-500"
        >
          View More
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative max-w-sm bg-white border  border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={pkg.image}
                alt={pkg.title}
                className="object-cover w-full rounded-t-lg"
              />
              {pkg.featured && (
                <button className="absolute top-3 left-3 bg-[#FFFFFF] rounded-[50px] w-[80px] h-6 text-sm shadow">
                  Featured
                </button>
              )}
            </div>

            {/* Content */}
            <div className="py-5 px-4">
              <h3 className="text-[26px] font-semibold">{pkg.title}</h3>

              <div className="pt-1">
                <p className="flex items-center gap-3 text-base font-semibold text-[#909090]">
                  <AirPlane className="w-5 h-5 text-red-700" />
                  {pkg.location}
                </p>
                <p className="flex items-center pt-2 gap-3 text-base font-semibold text-[#909090]">
                  <Timer className="w-5 h-5 text-red-700" />
                  {pkg.duration}
                </p>
              </div>

              <button className="border cursor-pointer border-[#FF6B11] text-[#FF6B11] w-full mt-8 h-[52px] rounded-xl text-lg font-semibold hover:bg-[#FF6B11] hover:text-white transition-all duration-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestHolidayPackages;
