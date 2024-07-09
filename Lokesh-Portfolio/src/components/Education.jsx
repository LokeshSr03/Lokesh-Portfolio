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
      id="experience"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
        <div
          id="porttitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Education
        </div>
        <div
          id="desc"
          className="text-[18px] text-center max-w-[600px] md:text-[16px] md:max-w-[420px]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>

        {Educations.map((edu, index) => (
          <div className="w-3/4" key={index}>
            <Timeline>
              <TimelineItem
                className="relative rounded-xl   py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5"
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
                      className="w-5 h-5"
                    />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h5"
                      // color="blue-gray"
                      className="text-[20px] md:text-[16px]"
                    >
                      {edu.course}
                    </Typography>
                    <Typography
                      variant="h6"
                      // color="blue-gray"
                      className="text-[18px] md:text-[14px]"
                    >
                      {edu.college}
                    </Typography>
                    <Typography
                      variant="small"
                      // color="gray"
                      className="font-normal text-[16px] md:text-[12px]"
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
