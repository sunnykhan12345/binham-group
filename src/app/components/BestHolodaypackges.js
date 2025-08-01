import Image from "next/image";
import Link from "next/link";
import React from "react";
import mala from "../../../public/images/mala.png";
const BestHolodaypackges = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };
  return (
    <section className="max-w-[1296px] mx-auto px-6 lg:pt-20 pt-14 pb-20">
      <div className="flex justify-between items-center pb-9">
        <h1 className="text-[38px] font-semibold">Best Holiday Packages</h1>
        <Link
          href="#"
          className="text-[22px] font-semibold text-[#FF6B11] border-b hover:text-black transition-all duration-500"
        >
          View More
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <span
            className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
            style={{
              top: position.y + 10,
              left: position.x + 10,
              opacity: tooltipVisible ? 1 : 0,
              transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
              transition: "all 0.2s ease-out",
            }}
          >
            Country: malaysia
          </span>

          <div className="relative">
            <Image src={mala} alt="malayasiia" className="object-cover" />
            <button className="absolute top-3 left-3 bg-[#FFFFFF] rounded-[50px] w-[80px] h-6 text-sm">
              Featured
            </button>
          </div>
        </div>
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <span
            className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
            style={{
              top: position.y + 10,
              left: position.x + 10,
              opacity: tooltipVisible ? 1 : 0,
              transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
              transition: "all 0.2s ease-out",
            }}
          >
            Country: malaysia
          </span>

          <div className="relative">
            <Image src={mala} alt="malayasiia" className="object-cover" />
            <button className="absolute top-3 left-3 bg-[#FFFFFF] rounded-[50px] w-[80px] h-6 text-sm">
              Featured
            </button>
          </div>
        </div>
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <span
            className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
            style={{
              top: position.y + 10,
              left: position.x + 10,
              opacity: tooltipVisible ? 1 : 0,
              transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
              transition: "all 0.2s ease-out",
            }}
          >
            Country: malaysia
          </span>

          <div className="relative">
            <Image src={mala} alt="malayasiia" className="object-cover" />
            <button className="absolute top-3 left-3 bg-[#FFFFFF] rounded-[50px] w-[80px] h-6 text-sm">
              Featured
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestHolodaypackges;
