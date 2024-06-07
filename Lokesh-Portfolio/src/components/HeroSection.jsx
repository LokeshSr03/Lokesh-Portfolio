import React from "react";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import profile from "../Images/lokesh.jpg";
import { useEffect } from "react";
import { useDarkMode } from "../global store/DarkModeContext";

function HeroSection() {
  const { DarkMode } = useDarkMode();

  return (
    <div id="about">
      <div
        id="hero-container"
        className="flex justify-center relative py-20 px-8 md:py-16 md:px-4 sm:py-8 sm:px-4 z-10"
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
          >
            <div
              id="title"
              className="font-bold text-4xl text-[#F2F3F4] md:text-center sm:mb-2"
            >
              Hi, I am <br /> {Bio.name}
            </div>
            <div
              id="textloop"
              className="font-semibold text-3xl flex gap-3 text-[#F2F3F4] md:text-center sm:mb-4"
            >
              I am a
              <div id="span" className="text-[#F2F3F4] cursor-pointer">
                <Typewriter
                  options={{
                    strings: Bio.role,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            id="right"
            className="w-full flex order-2 justify-end gap-3 md:order-1 md:justify-center md:items-center md:mb-20 sm:mb-7"
          >
            <img
              src={profile}
              alt="lokesh"
              className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-[50%] md:max-w-[400px] md:max-h-[400px] sm:max-w-[280px] sm:max-h-[280px] "
              style={{
                border: `2px solid ${DarkMode ? "#be1adb" : "red"}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
