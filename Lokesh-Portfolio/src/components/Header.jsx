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
          <a href="" className="hover-text">
            About
          </a>
        </li>
        <li>
          <a href="" className="hover-text">
            Skills
          </a>
        </li>
        <li>
          <a href="" className="hover-text">
            Portfolio
          </a>
        </li>
        <li>
          <a href="" className="hover-text">
            Experience
          </a>
        </li>
        <li>
          <a href="" className="hover-text">
            Contact
          </a>
        </li>
      </ul>

      <Switch
        id="custom-switch-component"
        ripple={false}
        className="h-full w-full bg-[#37474f] checked:bg-[#D9D9D9]"
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
