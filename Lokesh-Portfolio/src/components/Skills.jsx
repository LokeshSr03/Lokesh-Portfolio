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
          id="desc"
          className="text-[18px] text-center max-w-[600px] md:text-[16px]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Here are some of my skills on which I have been working
        </div>
        <div
          id="skillContainer"
          className="w-full flex flex-wrap mt-[30px] gap-[30px] justify-center"
        >
          {skills.map((skill) => (
            <div
              id="skill"
              key={skill.title}
              className="w-full max-w-[500px] shadow-skill-shadow rounded-2xl py-[16px] px-9 md:max-w-[400px] md:py-[10px] md:px-9 sm:max-w-[330px] sm:py-[10px] sm:px-9 "
              style={{
                border: "0.1px solid #C2DDF3",
                background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
              }}
            >
              <h2
                id="skilltitle"
                className="text-[28px] font-semibold mb-5 text-center"
                style={{ color: `${DarkMode ? "#b1b2b3" : "#48494a"}` }}
              >
                {skill.title}
              </h2>
              <div
                id="skilllist"
                className="flex justify-center flex-wrap gap-3 mb-5"
              >
                {skill.skills.map((item) => (
                  <div
                    id="skillitem"
                    key={item.name}
                    className="text-[16px] font-semibold rounded-xl py-3 px-4 flex items-center justify-center flex-col gap-2 md:text-[14px] md:py-[6px] md:px-3 sm:text-[14px] sm:py-[6px] sm:px-3 cursor-pointer"
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
                      srcset=""
                      className="w-6 h-6"
                    />
                    <div className="text-xs">{item.name}</div>
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
