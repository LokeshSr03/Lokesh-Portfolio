import React from "react";
import { Switch } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 pr-16 bg-header-black shadow-high-shadow">
      <div className="py-4">
        <img src="/src/assets/Logo.png" className="w-12 h-12 " alt="lokesh" />
      </div>

      <ul className="flex justify-between items-center gap-12 text-header-text font-roboto font-bold">
        <li>
          <a href="">Home </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Experience</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <Switch
        id="custom-switch-component"
        ripple={false}
        className="h-full w-full checked:bg-[#2ec946]"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
      />
    </div>
  );
}

export default Header;
