"use client";

import React from "react";

const ContactButton = () => {
  return (
    <div className="button-bg cursor-pointer rounded-md p-[2px] inline-block hover:scale-105 transition duration-300 active:scale-100">
      <button className="w-[125px] cursor-pointer h-[33px] text-lg text-white rounded-md font-semibold bg-[#FF6B11]">
        Contact Us
      </button>
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .button-bg {
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #ff00c7,
            #ffd700,
            #00ff85,
            #8a2be2,
            #00f5ff
          );
          background-size: 300% 300%;
          animation: shine 4s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactButton;
