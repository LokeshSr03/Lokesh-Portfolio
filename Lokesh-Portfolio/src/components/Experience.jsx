import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  Typography,
  TimelineHeader,
  TimelineBody,
} from "@material-tailwind/react";
import { useDarkMode } from "../global store/DarkModeContext";
import { experiences } from "../data/constants";

export default function Experience() {
  const { DarkMode } = useDarkMode();
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0  mdm:pb-6 sm:pb-6"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
        <div
          id="exptitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Experience
        </div>
        <div
          id="expdesc"
          className="text-[18px] text-center  mdm:text-[16px] sm:text-[14px] md:max-w-[90%] sm:max-w-[90%]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </div>

        {experiences.map((experience, index) => (
          <div className="w-3/4" key={index} data-aos="fade-in">
            <Timeline>
              <TimelineItem
                className="relative rounded-xl   py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 sm:pr-4"
                style={{
                  border: "0.1px solid #C2DDF3",
                  color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                  background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
                }}
              >
                {/* <TimelineConnector className="!w-[78px]" /> */}
                <TimelineHeader>
                  <TimelineIcon className="p-3" variant="ghost">
                    <img
                      src={experience.image}
                      alt={experience.company}
                      className="w-5 h-5"
                    />
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h5"
                      // color="blue-gray"
                      className="text-[20px] mdm:text-[16px] sm:text-[12px]"
                    >
                      {experience.role}
                    </Typography>
                    <Typography
                      variant="h6"
                      // color="blue-gray"
                      className="text-[18px] mdm:text-[14px] sm:text-[10px]"
                    >
                      {experience.company}
                    </Typography>
                    <Typography
                      variant="small"
                      // color="gray"
                      className="font-normal text-[16px] mdm:text-[12px] sm:text-[8px] "
                    >
                      {experience.date}
                    </Typography>
                  </div>
                </TimelineHeader>
                <TimelineBody>
                  <Typography
                    color="gary"
                    className="font-normal text-[15px] mdm:text-[12px] sm:text-[10px]"
                  >
                    <ul>
                      {experience.points.map((point, index) => (
                        <li key={index} style={{ listStyle: "square" }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        ))}
      </div>
    </div>
  );
}
