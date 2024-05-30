import React from "react";

function Header() {
  return (
    <div
      className="flex justify-between items-center px-8 pr-20"
      style={{ backgroundColor: "#2C2D31" }}
    >
      <div>
        <img src="/src/assets/Logo.png" className="w-28 h-28" alt="lokesh" />
      </div>

      <ul
        className="flex justify-between items-center gap-12 "
        style={{ color: "#D9D9D9" }}
      >
        <li>
          <a href="">Home</a>
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
    </div>
  );
}

export default Header;
