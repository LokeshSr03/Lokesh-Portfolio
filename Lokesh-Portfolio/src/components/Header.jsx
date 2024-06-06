import React from "react";
import { Switch } from "@material-tailwind/react";
import { useState, useEffect } from "react";

function Header() {
  const [DarkMode, SetDarkMode] = useState(() => {
    const darkLocal = localStorage.getItem("DarkMode");
    return darkLocal ? JSON.parse(darkLocal) : true;
  });

  const handleDark = () => {
    SetDarkMode(!DarkMode);
  };

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
    <div className="flex justify-between items-center px-8 pr-16 bg-header-black shadow-high-shadow">
      <div className="py-4">
        <img src="/src/assets/Logo.png" className="w-12 h-12 " alt="lokesh" />
      </div>

      <ul className="flex justify-between items-center gap-12 text-header-text font-roboto font-bold">
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
    </div>
  );
}

export default Header;
