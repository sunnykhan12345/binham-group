"use client";
import React from "react";
import TopBar from "./TopBar";

import Hero from "./Hero";

import DestinationBarParent from "./DestinationBarParent";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Hero />
      <DestinationBarParent />
    </div>
  );
};

export default Layout;
