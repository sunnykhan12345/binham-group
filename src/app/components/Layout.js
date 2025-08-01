"use client";
import React from "react";
import TopBar from "./TopBar";

import Hero from "./Hero";

import DestinationBarParent from "./DestinationBarParent";
import WorldVisaParent from "./WorldVisaParent";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Hero />
      <DestinationBarParent />
      <WorldVisaParent />
    </div>
  );
};

export default Layout;
