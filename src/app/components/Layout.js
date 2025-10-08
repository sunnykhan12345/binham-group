"use client";
import React from "react";
import TopBar from "./TopBar";

import Hero from "./Hero";

import DestinationBarParent from "./DestinationBarParent";
import WorldVisaParent from "./WorldVisaParent";
import Footer from "../Footer";
import BestHolodaypackges from "./BestHolodaypackges";
import PartnerSlider from "./PartnerSlider";
import ClientWords from "./ClientWords";
import TopDestinationsSlider from "./TopDestinationsSlider";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <TopBar />
      {/* <Navbar /> */}
      <Hero />
      <DestinationBarParent />
      <WorldVisaParent />
      <BestHolodaypackges />
      <TopDestinationsSlider />
      <ClientWords />
      <PartnerSlider />
      <Footer />
    </div>
  );
};

export default Layout;
