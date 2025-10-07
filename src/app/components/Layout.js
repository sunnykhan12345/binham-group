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

const Layout = () => {
  return (
    <div>
      <TopBar />
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
