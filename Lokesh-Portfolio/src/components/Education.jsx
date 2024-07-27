import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { useDarkMode } from "../global store/DarkModeContext";
import { Educations } from "../data/constants";

function Education() {
  const { DarkMode } = useDarkMode();
  return (
    <div
      id="education"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0  mdm:pb-6 sm:pb-6"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
        <div
          id="edutitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Education
        </div>
        <div
          id="edudesc"
          className="text-[18px] text-center  mdm:text-[16px] sm:text-[14px] md:max-w-[90%] sm:max-w-[90%]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>

        {Educations.map((edu, index) => (
          <div className="w-3/4" key={index}>
            <Timeline>
              <TimelineItem
                className="relative rounded-xl   py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 sm:pr-4"
                style={{
                  color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                  background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
                }}
              >
                {/* <TimelineConnector className="!w-[78px]" /> */}
                <TimelineHeader>
                  <TimelineIcon className="p-3" variant="ghost">
                    <img
                      src={edu.image}
                      alt={edu.college}
                      className="h-5 w-5"
                      style={{
                        filter: `${
                          DarkMode
                            ? "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(156deg) brightness(110%) contrast(105%)"
                            : ""
                        }`,
                      }}
                    />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h5"
                      // color="blue-gray"
                      className="text-[20px] mdm:text-[14px] sm:text-[12px]"
                    >
                      {edu.course}
                    </Typography>
                    <Typography
                      variant="h6"
                      // color="blue-gray"
                      className="text-[18px] mdm:text-[12px] sm:text-[10px]"
                    >
                      {edu.college}
                    </Typography>
                    <Typography
                      variant="small"
                      // color="gray"
                      className="font-normal text-[16px] mdm:text-[10px] sm:text-[8px]"
                    >
                      {edu.date}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
