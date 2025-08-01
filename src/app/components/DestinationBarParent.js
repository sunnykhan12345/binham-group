import React from "react";
import Destination from "./Destination";
import TripType from "./TripType";
import DaysBar from "./DaysBar";


const DestinationBarParent = () => {
  return (
    <section className="bg-[#EEEEEE]  lg:pt-16 pt-10 pb-20">
      <div className="max-w-[1296px]  mx-auto px-6  bg-white rounded-2xl flex flex-col justify-center items-center shadow py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          <div className="w-full h-15 flex items-center justify-center rounded-lg border-2 border-[#FF6B11] ">
            <Destination />
          </div>
          <div className=" w-full h-15 flex items-center justify-center rounded-lg border-2 border-[#FF6B11] ">
            <TripType />
          </div>
          <div className=" w-full h-15 flex items-center justify-center rounded-lg border-2 border-[#FF6B11] ">
            <DaysBar />
          </div>
          <div className="group bg-[#FF6B11] text-lg text-white w-full h-[60px] flex items-center justify-center rounded-[12px] border-2 border-[#FF6B11] hover:bg-white hover:text-[#FF6B11] transition-all duration-300 ease-in-out cursor-pointer">
            <span className="mr-2">Find Now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationBarParent;
