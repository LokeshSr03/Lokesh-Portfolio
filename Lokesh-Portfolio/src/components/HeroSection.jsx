import React from "react";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import profile from "../Images/lokesh.jpg";
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
              className="font-bold text-5xl md:text-center sm:mb-2"
              style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
            >
              Hi, I am <br /> {Bio.name}
            </div>
            <div
              id="textloop"
              className="font-semibold text-4xl flex gap-3  md:text-center sm:mb-4"
              style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
            >
              I am a
              <div
                id="span"
                className={`cursor-pointer ${
                  DarkMode ? "white-move" : "black-move"
                }`}
              >
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
              className="relative w-full h-full max-w-[360px] max-h-[360px] rounded-[50%] md:max-w-[360px] md:max-h-[360px] sm:max-w-[250px] sm:max-h-[250px] "
              style={{
                border: "2px solid #C2DDF3",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
