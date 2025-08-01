import React from "react";
import { FooterLogo } from "../../public/icons/icon";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import gallery from "../../public/images/gallery.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <footer className="bg-[#002540] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1296px] mx-auto px-6">
          <div>
            <div className="">
              <FooterLogo />
              <p className="mt-6 text-white max-w-[285px] text-lg font-medium">
                Binham Aviation is your gateway to unforgettable journeys. We
                specialize in crafting personalized travel experiences that
                cater to your every need and desire.
              </p>
              <div className="flex items-center gap-2 mt-5 cursor-pointer">
                <span className="bg-[#FF6B11] w-[30px] h-[30px] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Facebook className="text-white w-5 h-5" />
                </span>
                <span className="bg-[#FF6B11] w-[30px] h-[30px] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Instagram className="text-white w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h2 className="text-[#FF6B11] font-semibold text-[25px] lg:pt-10">
              Useful Links
            </h2>
            <ul className="space-y-3 pt-5">
              {["Home", "Destination", "Umrah", "Visa"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white hover:text-[#FF6B11] transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="text-[#FF6B11] font-semibold text-[25px] lg:pt-10">
              Gallery
            </h2>
            <div className="grid grid-cols-3 gap-3  pt-5">
              {Array(6)
                .fill(gallery)
                .map((imgSrc, index) => (
                  <Image
                    key={index}
                    src={imgSrc}
                    width={119}
                    height={88}
                    alt={`gallery-${index}`}
                    className="w-[119px] h-[88px] object-cover rounded-lg"
                  />
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-[#FF6B11] font-semibold text-[25px] lg:pt-10">
              Subscribe
            </h2>
            <p className="text-lg text-white font-medium pt-3">
              Subscribe Our Newsletter For Getting Quick Updates
            </p>
            <div className="pt-3">
              <input
                type=""
                placeholder="Subscribe Now"
                className="h-16 rounded-xl w-full border-2 border-[#FF6B11] px-5 text-lg font-semibold text-white placeholder:text-[#FF6B11]"
              />
            </div>
            <button className="mt-3 group bg-[#FF6B11] text-lg text-white w-full h-[60px] flex items-center justify-center rounded-[12px] border-2 border-[#FF6B11] hover:bg-white hover:text-[#FF6B11] transition-all duration-300 ease-in-out cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
