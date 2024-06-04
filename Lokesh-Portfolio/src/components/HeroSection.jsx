import React from "react";

function HeroSection() {
  return (
    <div id="about">
      <div
        id="hero-container"
        className="bg-[#191924] flex justify-center relative py-20 px-8 md:py-16 md:px-4 sm:py-8 sm:px-4 z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
        }}
      >
        <div
          id="hero-bg"
          className="absolute flex justify-end top-0 right-0 bottom-0 left-0 w-full h-full max-w-[1350px] overflow-hidden py-0 px-8 top-1/2 left-1/2 md:justify-center md:p-0"
          style={{
            transform: "translateX(-50%) translateY(-50%)",
          }}
        ></div>
        <div
          id="hero-innercontainer"
          className="relative flex justify-between items-center w-full max-w-[1100px] md:flex-col"
        >
          <div
            id="left"
            className="w-full order-1 md:order-2 md:mb-7 md:flex md:flex-col md:items-center sm:order-2 sm:mb-7 sm:flex sm:flex-col sm:items-center"
          ></div>
          <div
            id="right"
            className="w-full flex order-2 justify-end gap-3 md:order-1 md:justify-center md:items-center md:mb-20 sm:mb-7"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
