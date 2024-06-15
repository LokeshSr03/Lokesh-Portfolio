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
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
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
          className="text-[18px] text-center  md:text-[16px] md:max-w-[90%] sm:max-w-[90%]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
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
            <div key={single.class}>
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src={single.image} alt="card-image" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {single.class}
                  </Typography>
                  <Typography>{single.desc}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button onClick={() => handleOpen(single.class)}>
                    Certificate
                  </Button>
                </CardFooter>
              </Card>
              <Dialog
                size="xl"
                open={openCard === single.class}
                handler={() => handleOpen(single.class)}
              >
                <DialogHeader className="justify-between">
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
                <DialogBody>
                  <img
                    alt="nature"
                    className="h-[33rem] w-full rounded-lg object-cover object-center"
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
