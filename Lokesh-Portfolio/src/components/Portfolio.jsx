import React from "react";
import { useDarkMode } from "../global store/DarkModeContext";

function Portfolio() {
  const { DarkMode } = useDarkMode();
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
        <div
          id="abouttitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          About
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
