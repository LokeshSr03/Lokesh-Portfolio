import React from "react";
import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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
          <img src="/src/assets/Logo.png" className="w-12 h-12 " alt="lokesh" />
        </div>

        <ul className="flex justify-between items-center gap-12 text-header-text font-roboto font-bold md:hidden">
          <li>
            <a href="" className="hover-text">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover-text transition duration-150 ease-out hover:ease-in hover:text-[#bfbdbd]"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href=""
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
                      color={`${DarkMode ? "#d9d9d9" : "#31333b"}`}
                    />
                    <XMarkIcon
                      className="hidden h-5 w-5 transition-transform group-hover:block transition-all duration-2000"
                      color={`${DarkMode ? "#d9d9d9" : "#31333b"}`}
                    />
                  </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent className="mt-5 ">
                  {/* Home  */}
                  <SpeedDialAction
                    className="relative "
                    style={{
                      background: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                      borderColor: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                    }}
                  >
                    <HomeIcon
                      className="h-5 w-5"
                      color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                    />
                    <Typography
                      {...labelProps}
                      style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
                    >
                      Home
                    </Typography>
                  </SpeedDialAction>

                  {/* About  */}
                  <SpeedDialAction
                    className="relative "
                    style={{
                      background: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                      borderColor: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                    }}
                  >
                    <CogIcon
                      className="h-5 w-5"
                      color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                    />
                    <Typography
                      {...labelProps}
                      style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
                    >
                      Settings
                    </Typography>
                  </SpeedDialAction>

                  {/* Skills  */}
                  <SpeedDialAction
                    className="relative "
                    style={{
                      background: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                      borderColor: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                    }}
                  >
                    <Square3Stack3DIcon
                      className="h-5 w-5"
                      color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                    />
                    <Typography
                      {...labelProps}
                      style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
                    >
                      Pages
                    </Typography>
                  </SpeedDialAction>

                  {/* PortFolio  */}
                  <SpeedDialAction
                    className="relative "
                    style={{
                      background: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                      borderColor: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                    }}
                  >
                    <Square3Stack3DIcon
                      className="h-5 w-5"
                      color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                    />
                    <Typography
                      {...labelProps}
                      style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
                    >
                      Pages
                    </Typography>
                  </SpeedDialAction>

                  {/* Experience  */}
                  <SpeedDialAction
                    className="relative "
                    style={{
                      background: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                      borderColor: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                    }}
                  >
                    <Square3Stack3DIcon
                      className="h-5 w-5"
                      color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                    />
                    <Typography
                      {...labelProps}
                      style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
                    >
                      Pages
                    </Typography>
                  </SpeedDialAction>

                  {/* Contact  */}
                  <SpeedDialAction
                    className="relative "
                    style={{
                      background: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                      borderColor: `${DarkMode ? "#d9d9d9" : "#31333b"}`,
                    }}
                  >
                    <Square3Stack3DIcon
                      className="h-5 w-5"
                      color={`${DarkMode ? "#31333b" : "#d9d9d9"}`}
                    />
                    <Typography
                      {...labelProps}
                      style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
                    >
                      Pages
                    </Typography>
                  </SpeedDialAction>
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
