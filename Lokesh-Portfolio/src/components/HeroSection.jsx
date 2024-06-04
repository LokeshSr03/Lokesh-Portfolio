import React from "react";

function HeroSection() {
  return (
    <div id="about">
      <div
        id="hero-container"
        className="bg-[#191924] flex justify-center relative py-20 px-8 md:py-16 md:px-4 sm:py-8 sm:px-4 z-10"
        style={{}}
      >
        <div id="hero-bg"></div>
        <div id="hero-innercontainer">
          <div id="left"></div>
          <div id="right"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
