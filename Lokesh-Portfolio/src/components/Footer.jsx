import React from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  FaSquareFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareGithub,
} from "react-icons/fa6";
import { Bio } from "../data/constants";

function Footer() {
  const { DarkMode } = useDarkMode();
  return (
    <div id="footcontainer" className="w-full py-4 px-0 flex justify-center ">
      <footer
        className="w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-4 "
        style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
      >
        <h1
          className="font-semibold text-[20px] "
          style={{ color: `${DarkMode ? "#854CE6" : "#be1adb"}` }}
        >
          Lokesh Suthar
        </h1>
        <nav className="w-full max-w-[800px] mt-2 flex flex-row gap-8 justify-center md:flex-wrap md:gap-4 md:justify-center md:text-center text-[12px]">
          <a
            href="#about"
            className={`no-underline text-[1.2rem] md:text-[1rem] hover:${
              DarkMode ? "red" : "#be1adb"
            }`}
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            About
          </a>
          <a
            href="#skills"
            className={`no-underline text-[1.2rem] md:text-[1rem] hover:${
              DarkMode ? "#854CE6" : "#be1adb"
            }`}
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            Skills
          </a>
          <a
            href="#project"
            className={`no-underline text-[1.2rem] md:text-[1rem] hover:${
              DarkMode ? "#854CE6" : "#be1adb"
            }`}
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`no-underline text-[1.2rem] md:text-[1rem] hover:${
              DarkMode ? "#854CE6" : "#be1adb"
            }`}
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`no-underline text-[1.2rem] md:text-[1rem] hover:${
              DarkMode ? "#854CE6" : "#be1adb"
            }`}
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            Contact
          </a>
        </nav>
        <div id="social" className="flex mt-4 flex-wrap gap-4 ">
          <a href={Bio.facebook} target="display">
            <FaSquareFacebook
              color={`${DarkMode ? "#d9d9d9" : "#31333b"}`}
              className="h-6 w-6"
            />
          </a>
          <a href={Bio.insta} target="display">
            <FaInstagram
              color={`${DarkMode ? "#d9d9d9" : "#31333b"}`}
              className="h-6 w-6"
            />
          </a>
          <a href={Bio.linkedin} target="display">
            <FaLinkedin
              color={`${DarkMode ? "#d9d9d9" : "#31333b"}`}
              className="h-6 w-6"
            />
          </a>
          <a href={Bio.github} target="display">
            <FaSquareGithub
              color={`${DarkMode ? "#d9d9d9" : "#31333b"}`}
              className="h-6 w-6"
            />
          </a>
        </div>
        <p
          className="mt-[1.5rem] text-[0.9rem] text-center "
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          &copy; 2024 Lokesh Suthar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
