import React from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import { skills } from "../data/constants";

function Skills() {
  const { DarkMode } = useDarkMode();
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
    >
      <div
        id="wrapper"
        className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col"
      >
        <div
          id="title"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Skills
        </div>
        <div
          id="skillsdesc"
          className="text-[18px] text-center  mdm:text-[16px] sm:text-[14px] md:max-w-[90%] sm:max-w-[90%]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Here are some of my skills on which I have been working
        </div>
        <div
          id="skillContainer"
          className="flex justify-center items-center flex-wrap gap-10 mt-5"
        >
          {skills.map((skill) => (
            <div
              id="skill"
              key={skill.title}
              className="w-full max-w-[500px] shadow-skill-shadow rounded-2xl py-[16px] px-9 mdm:max-w-[400px] mdm:py-[10px] mdm:px-9 sm:w-9/12 sm:py-[8px] sm:px-3 "
              style={{
                border: "0.1px solid #C2DDF3",
                background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
              }}
            >
              <h2
                id="skilltitle"
                className="text-[28px] font-semibold mb-5 text-center sm:text-[18px]"
                style={{
                  color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                }}
              >
                {skill.title}
              </h2>
              <div
                id="skilllist"
                className="flex justify-center flex-wrap gap-3 mb-5  "
              >
                {skill.skills.map((item) => (
                  <div
                    id="skillitem"
                    key={item.name}
                    className="text-[16px] font-semibold rounded-xl py-3 px-4 sm:py-1 sm:px-2 flex items-center justify-center flex-col gap-2 sm:gap-1
                     mdm:text-[14px] mdm:py-[6px] mdm:px-3 sm:text-[14px]   cursor-pointer"
                    style={{
                      color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                      border: `1px solid ${
                        DarkMode ? "#F2F3F4" + 80 : "#111111" + 80
                      }`,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 sm:w-3 sm:h-3"
                    />
                    <div className="text-xs sm:text-[10px]">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
