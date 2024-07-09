import React from "react";
import { Switch } from "@material-tailwind/react";
import { useEffect } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  faAddressCard,
  faAddressBook,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiSkills } from "react-icons/gi";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { GrUserExpert } from "react-icons/gr";

function Header() {
  const { DarkMode, handleDark } = useDarkMode();

  useEffect(() => {
    document.body.className = DarkMode ? "dark" : "light";
    localStorage.setItem("DarkMode", JSON.stringify(DarkMode));
  }, [DarkMode]);

  const getlocal = () => {
    const darkLocal = localStorage.getItem("DarkMode");
    const local = darkLocal ? JSON.parse(darkLocal) : true;
    return local;
  };

  const labelProps = {
    variant: "small",
    color: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <>
      <div
        id="home"
        className="flex justify-between items-center px-8  bg-header-black shadow-high-shadow"
      >
        <div className="py-4">
          <a href="#home">
            <img
              src="/src/assets/Logo.png"
              className="w-12 h-12 "
              alt="lokesh"
            />
          </a>
        </div>

        <ul className="flex justify-between items-center gap-12 text-header-text font-roboto font-bold md:hidden">
          <li>
            <a
              href="#home"
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-16">
          <Switch
            id="custom-switch-component"
            defaultChecked={getlocal()}
            ripple={false}
            className="h-full w-full bg-[#D9D9D9] checked:bg-[#31333b]"
            containerProps={{
              className: "w-11 h-6",
            }}
            circleProps={{
              className: "before:hidden left-0.5 border-none",
            }}
            onClick={handleDark}
          />
          <div className="relative py-6 hidden md:block z-20 ">
            <div className="absolute bottom-0 right-0">
              <SpeedDial placement="bottom">
                <SpeedDialHandler
                  style={{
                    background: `${DarkMode ? "#31333b" : "#d9d9d9"}`,
                  }}
                >
                  <IconButton size="lg" className="rounded-full">
                    <Bars3Icon
                      className="h-5 w-5 transition-transform group-hover:hidden transition-all duration-2000"
                      color={`${DarkMode ? "#fff" : "#31333b"}`}
                    />
                    <XMarkIcon
                      className="hidden h-5 w-5 transition-transform group-hover:block transition-all duration-2000"
                      color={`${DarkMode ? "#fff" : "#31333b"}`}
                    />
                  </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent className="mt-5 ">
                  {/* About  */}
                  <a href="#about">
                    <SpeedDialAction
                      className="relative "
                      style={{
                        background: `${DarkMode ? "#fff" : "#31333b"}`,
                        borderColor: `${DarkMode ? "#fff" : "#31333b"}`,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        className="h-5 w-5"
                        color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                      />

                      <Typography
                        {...labelProps}
                        style={{ color: `${DarkMode ? "#fff" : "#31333b"}` }}
                      >
                        About
                      </Typography>
                    </SpeedDialAction>
                  </a>

                  {/* Skills  */}
                  <a href="#skills">
                    <SpeedDialAction
                      className="relative "
                      style={{
                        background: `${DarkMode ? "#fff" : "#31333b"}`,
                        borderColor: `${DarkMode ? "#fff" : "#31333b"}`,
                      }}
                    >
                      <GiSkills
                        className="h-5 w-5"
                        color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                      />
                      <Typography
                        {...labelProps}
                        style={{ color: `${DarkMode ? "#fff" : "#31333b"}` }}
                      >
                        Skills
                      </Typography>
                    </SpeedDialAction>
                  </a>

                  {/* PortFolio  */}
                  <a href="#portfolio">
                    <SpeedDialAction
                      className="relative "
                      style={{
                        background: `${DarkMode ? "#fff" : "#31333b"}`,
                        borderColor: `${DarkMode ? "#fff" : "#31333b"}`,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="h-5 w-5"
                        color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                      />

                      <Typography
                        {...labelProps}
                        style={{ color: `${DarkMode ? "#fff" : "#31333b"}` }}
                      >
                        Portfolio
                      </Typography>
                    </SpeedDialAction>
                  </a>

                  {/* Experience  */}
                  <a href="#experience">
                    <SpeedDialAction
                      className="relative "
                      style={{
                        background: `${DarkMode ? "#fff" : "#31333b"}`,
                        borderColor: `${DarkMode ? "#fff" : "#31333b"}`,
                      }}
                    >
                      <GrUserExpert
                        className="h-5 w-5"
                        color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                      />
                      <Typography
                        {...labelProps}
                        style={{ color: `${DarkMode ? "#fff" : "#31333b"}` }}
                      >
                        Experience
                      </Typography>
                    </SpeedDialAction>
                  </a>

                  {/* Contact Us  */}
                  <a href="#contact">
                    <SpeedDialAction
                      className="relative "
                      style={{
                        background: `${DarkMode ? "#fff" : "#31333b"}`,
                        borderColor: `${DarkMode ? "#fff" : "#31333b"}`,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        className="h-5 w-5"
                        color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                      />

                      <Typography
                        {...labelProps}
                        style={{ color: `${DarkMode ? "#fff" : "#31333b"}` }}
                      >
                        Contact
                      </Typography>
                    </SpeedDialAction>
                  </a>
                </SpeedDialContent>
              </SpeedDial>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
