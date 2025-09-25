"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../../../public/icons/icon";
import { Menu, X } from "lucide-react";
import ContactButton from "./ContactButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinationouts" },
  { name: "Domestic", href: "/domestic" },
  { name: "International", href: "/international" },
  { name: "Umrah", href: "/umrah" },
  { name: "Visa", href: "/visa" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about-us" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex bg-white lg:-top-5 lg:h-20 h-16 max-w-[1296px] mx-auto relative lg:rounded-[20px] px-6 shadow-sm z-50">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <Logo />
          </Link>

          <div className="lg:flex gap-6 items-center hidden">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative text-gray-800 font-semibold text-sm lg:text-lg transition duration-300 hover:text-[#FF6B11] group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF6B11] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <ContactButton />
          </div>

          {/* Mobile Menu Icon (only below lg) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-800"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 p-6 transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-700"
        >
          <X size={24} />
        </button>

        <nav className="mt-10 flex flex-col gap-5">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className="text-gray-800 font-medium text-base hover:text-[#FF6B11] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
