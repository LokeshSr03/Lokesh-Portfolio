import React from "react";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import profile from "/Images/lokesh.jpg";
import { useDarkMode } from "../global store/DarkModeContext";
import { IconButton } from "@material-tailwind/react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { Button } from "@material-tailwind/react";

function HeroSection() {
  const { DarkMode } = useDarkMode();
  return (
    <div id="home">
      <div
        id="hero-container"
        className="flex justify-center relative py-20 px-8 mdm:py-6 md:px-4 sm:py-6 sm:px-4 sm:pb-[54px] z-10 mt-32 mdm:mt-24 sm:mt-24"
        // style={{
        //   clipPath: "polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)",
        //   background:
        //     "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
        // }}
      >
        <div
          id="hero-bg"
          className="absolute flex justify-end  right-0 bottom-0  w-full h-full max-w-[1350px] overflow-hidden py-0 px-8 top-1/2 left-1/2 md:justify-center md:p-0"
          style={{
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          <div
            id="HeroBgAnimation"
            className="w-[600px] h-[500px] mdm:w-[500px] mdm:h-[400px] sm:w-[370px] sm:h-[270px]"
          >
            <svg
              className="BgAnimation__svg"
              viewBox="0 0 602 602"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.15">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
                  stroke="url(#paint0_radial)"
                  id="path_0"
                />
                <path
                  d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
                  stroke="url(#paint1_radial)"
                  id="path_1"
                />
                <path
                  d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
                  stroke="url(#paint2_radial)"
                  id="path_2"
                />
              </g>
              <ellipse
                cx="295.027"
                cy="193.118"
                transform="translate(-295.027 -193.118)"
                rx="1.07306"
                ry="1.07433"
                fill="#945DD6"
              >
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#path_2" />
                </animateMotion>
              </ellipse>
              <path
                d="M294.685 193.474L268.932 219.258"
                transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
                stroke="url(#paint3_linear)"
              >
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#path_2" />
                </animateMotion>
              </path>
              <ellipse
                cx="295.027"
                cy="193.118"
                transform="translate(-295.027 -193.118)"
                rx="1.07306"
                ry="1.07433"
                fill="#46737"
              >
                <animateMotion
                  dur="5s"
                  begin="1"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_2" />
                </animateMotion>
              </ellipse>
              <path
                d="M294.685 193.474L268.932 219.258"
                transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
                stroke="url(#paint7_linear)"
              >
                <animateMotion
                  dur="5s"
                  begin="1"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_2" />
                </animateMotion>
              </path>
              <ellipse
                cx="476.525"
                cy="363.313"
                rx="1.07433"
                ry="1.07306"
                transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
                fill="#945DD6"
              >
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </ellipse>
              <path
                d="M476.171 362.952L450.417 337.168"
                transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                stroke="url(#paint4_linear)"
              >
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </path>
              <ellipse
                cx="382.164"
                cy="155.029"
                rx="1.07433"
                ry="1.07306"
                transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
                fill="#F46737"
              >
                <animateMotion
                  dur="10s"
                  begin="1"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </ellipse>
              <path
                d="M381.81 154.669L356.057 128.885"
                transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
                stroke="url(#paint5_linear)"
              >
                <animateMotion
                  dur="10s"
                  begin="1"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </path>
              <ellipse
                cx="333.324"
                cy="382.691"
                rx="1.07306"
                ry="1.07433"
                transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
                fill="#F46737"
              >
                <animateMotion
                  dur="5s"
                  begin="0"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_1" />
                </animateMotion>
              </ellipse>
              <path
                d="M333.667 382.335L359.42 356.551"
                transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
                stroke="url(#paint6_linear)"
              >
                <animateMotion
                  dur="5s"
                  begin="0"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_1" />
                </animateMotion>
              </path>
              <ellipse
                cx="165.524"
                cy="93.9596"
                rx="1.07306"
                ry="1.07433"
                transform="translate(-165.524 -93.9596)"
                fill="#F46737"
              >
                <animateMotion
                  dur="10s"
                  begin="3"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </ellipse>
              <path
                d="M165.182 94.3159L139.429 120.1"
                transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
                stroke="url(#paint7_linear)"
              >
                <animateMotion
                  dur="10s"
                  begin="3"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </path>
              <ellipse
                cx="476.525"
                cy="363.313"
                rx="1.07433"
                ry="1.07306"
                transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
                fill="#13ADC7"
              >
                <animateMotion
                  dur="12s"
                  begin="4"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </ellipse>
              <path
                d="M476.171 362.952L450.417 337.168"
                transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                stroke="url(#paint11_linear)"
              >
                <animateMotion
                  dur="12s"
                  begin="4"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath xlinkHref="#path_0" />
                </animateMotion>
              </path>
              <defs>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(301 301) rotate(90) scale(300)"
                >
                  <stop offset="0.333333" stopColor="#FBFBFB" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(301 301) rotate(90) scale(300)"
                >
                  <stop offset="0.333333" stopColor="#FBFBFB" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(301 301) rotate(90) scale(300)"
                >
                  <stop offset="0.333333" stopColor="#FBFBFB" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="295.043"
                  y1="193.116"
                  x2="269.975"
                  y2="218.154"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#945DD6" />
                  <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="476.529"
                  y1="363.31"
                  x2="451.461"
                  y2="338.272"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#945DD6" />
                  <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear"
                  x1="382.168"
                  y1="155.027"
                  x2="357.1"
                  y2="129.989"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F46737" />
                  <stop offset="1" stopColor="#F46737" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear"
                  x1="333.309"
                  y1="382.693"
                  x2="358.376"
                  y2="357.655"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F46737" />
                  <stop offset="1" stopColor="#F46737" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear"
                  x1="165.54"
                  y1="93.9578"
                  x2="140.472"
                  y2="118.996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F46737" />
                  <stop offset="1" stopColor="#F46737" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear"
                  x1="414.367"
                  y1="301.156"
                  x2="439.435"
                  y2="276.118"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13ADC7" />
                  <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear"
                  x1="515.943"
                  y1="288.238"
                  x2="541.339"
                  y2="291.454"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13ADC7" />
                  <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear"
                  x1="117.001"
                  y1="230.619"
                  x2="117.36"
                  y2="258.193"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#945DD6" />
                  <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear"
                  x1="476.529"
                  y1="363.31"
                  x2="451.461"
                  y2="338.272"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13ADC7" />
                  <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          id="hero-innercontainer"
          className="relative flex justify-between items-center w-full max-w-[1100px] md:flex-col"
        >
          <div
            id="left"
            className="w-full order-1 md:order-2  md:flex md:flex-col md:items-center sm:order-2  sm:flex sm:flex-col sm:items-center "
          >
            <div
              id="title"
              className="font-bold text-5xl md:text-center sm:mb-3 sm:text-4xl"
              style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
            >
              Hi, I am <br /> {Bio.name}
            </div>
            <div
              id="textloop"
              className="font-semibold text-4xl flex gap-3  md:text-center sm:mb-3 md:flex-wrap sm:flex-wrap md:justify-center md:items-center sm:justify-center sm:items-center sm:text-2xl"
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
            <div className="flex gap-4 mt-4">
              <a href="mailto:lokeshsuthar0123@gmail.com">
                <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </IconButton>
              </a>
              <a href={`${Bio.linkedin}`}>
                <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                  <FaLinkedinIn className="text-xl" />
                </IconButton>
              </a>
              <a href={`${Bio.insta}`}>
                <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                  <FaInstagram className="text-xl" />
                </IconButton>
              </a>
              <a href={`${Bio.github}`}>
                <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <FaGithub className="text-xl" />
                </IconButton>
              </a>
            </div>
            <a href={Bio.resume}>
              <Button
                variant="gradient"
                className="flex items-center gap-3 mt-4 bg-custom-gradient"
                color="blue-gray"
              >
                <FaCloudDownloadAlt className="text-xl" />
                Resume
              </Button>
            </a>
          </div>
          <div
            id="right"
            className="w-full flex order-2 justify-end gap-3 md:order-1 md:justify-center md:items-center mdm:mb-16 sm:mb-12"
          >
            <img
              src={profile}
              alt="lokesh"
              className="relative w-full h-full max-w-[360px] max-h-[360px] rounded-[50%] mdm:max-w-[360px] mdm:max-h-[360px] sm:max-w-[260px] sm:max-h-[260px] mdm:mt-8 sm:mt-4"
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
