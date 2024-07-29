import React, { useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { certificates } from "../data/constants";

function About() {
  const { DarkMode } = useDarkMode();

  const [openCard, setOpenCard] = useState(null);

  const handleOpen = (card) => setOpenCard(openCard === card ? null : card);

  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0  mdm:pb-6 sm:pb-6"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
        <div
          id="abouttitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          About
        </div>
        <div
          id="about-desc"
          className="text-[18px] text-center  mdm:text-[16px] sm:text-[14px] md:max-w-[90%] sm:max-w-[90%]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          data-aos="slide-in-down"
        >
          Dedicated BSc IT student and Full Stack Developer experienced in
          JavaScript, React, and Node. js. Specializes in developing intuitive
          website solutions with a creative flair. Likes to solve problems with
          the most mind-boggling coding techniques. Dedicated to participate in
          latest projects and to provide technology available.I have completed
          two courses, which are listed below.
        </div>

        <div
          id="about-box"
          className="flex justify-center items-center flex-wrap gap-10 mt-5"
        >
          {certificates.map((single) => (
            <div
              key={single.class}
              className="sm:flex sm:justify-center sm:items-center"
              data-aos="fade-in-left"
            >
              <Card
                className="mt-6 w-96 sm:w-9/12"
                style={{
                  background: `${DarkMode ? "#171721" : "#ffffff"}`,
                }}
              >
                <CardHeader
                  style={{ background: "rgb(111,135,147)" }}
                  className="relative h-56 flex justify-center items-center sm:h-36"
                  data-aos="fade-in-left"
                >
                  <img
                    src={single.image}
                    alt="card-image"
                    className="h-[249px] w-[249px] sm:h-[160px] sm:w-[160px]"
                  />
                </CardHeader>
                <CardBody
                  className="min-h-[215px] sm:min-h-[170px]"
                  style={{ color: `${DarkMode ? "#84858A" : "#888888"}` }}
                  data-aos="fade-in-left"
                >
                  <Typography variant="h5" className="mb-2 sm:text-[18px]">
                    {single.class}
                  </Typography>
                  <Typography className="sm:text-[14px]">
                    {single.desc}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0" data-aos="fade-in-left">
                  <Button
                    variant="gradient"
                    className="flex items-center gap-3 bg-custom-gradient  sm:text-[12px]"
                    color="blue-gray"
                    onClick={() => handleOpen(single.class)}
                  >
                    Certificate
                  </Button>
                </CardFooter>
              </Card>
              <Dialog
                size="xl"
                open={openCard === single.class}
                handler={() => handleOpen(single.class)}
              >
                <DialogHeader className="justify-between sm:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="-mt-px flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {single.class}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconButton
                      color="blue-gray"
                      size="sm"
                      variant="text"
                      onClick={() => handleOpen(single.class)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  </div>
                </DialogHeader>
                <DialogBody className="flex justify-center items-center">
                  <img
                    alt="nature"
                    className="h-[35rem] md:h-auto sm:h-auto rounded-lg object-cover object-center"
                    src={single.certificate}
                  />
                </DialogBody>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
