import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  TimelineBody,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "../global store/DarkModeContext";

export default function Experience() {
  const { DarkMode } = useDarkMode();
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
        <div
          id="porttitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Experience
        </div>
        <div
          id="desc"
          className="text-[18px] text-center max-w-[600px] md:text-[16px]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </div>
        <div className="w-3/4">
          <Timeline>
            <TimelineItem className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              {/* <TimelineConnector className="!w-[78px]" /> */}
              <TimelineHeader>
                <TimelineIcon className="p-3" variant="ghost">
                  <BellIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-[15px]"
                  >
                    $2400, Design changes Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Laborum, modi.
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="text-[13px]"
                  >
                    $2400, Design changes
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-[12px]"
                  >
                    22 DEC 7:20 PM
                  </Typography>
                </div>
              </TimelineHeader>
              <TimelineBody>
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
