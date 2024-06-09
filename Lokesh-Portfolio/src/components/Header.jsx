import React from "react";
import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const { DarkMode, handleDark } = useDarkMode();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.className = DarkMode ? "dark" : "light";
    localStorage.setItem("DarkMode", JSON.stringify(DarkMode));
  }, [DarkMode]);

  const getlocal = () => {
    const darkLocal = localStorage.getItem("DarkMode");
    const local = darkLocal ? JSON.parse(darkLocal) : true;
    return local;
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
          <div className="hidden py-6 z-20 relative md:block">
            <div className="absolute bottom-0 right-0">
              <SpeedDial open={open} handler={setOpen}>
                <SpeedDialHandler>
                  <IconButton size="lg" className="rounded-full">
                    <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                  </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                  <a href="#home">
                    <SpeedDialAction>
                      <HomeIcon className="h-5 w-5" />
                    </SpeedDialAction>
                  </a>
                  <SpeedDialAction>
                    <CogIcon className="h-5 w-5" />
                  </SpeedDialAction>
                  <SpeedDialAction>
                    <Square3Stack3DIcon className="h-5 w-5" />
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
