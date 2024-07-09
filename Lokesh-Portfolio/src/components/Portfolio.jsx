import React, { useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  Carousel,
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { FaGithubSquare } from "react-icons/fa";
import { Project } from "../data/constants";

function Portfolio() {
  const { DarkMode } = useDarkMode();
  const screenwidth = window.innerWidth;
  const breakpoint = 960;
  const [openCard, setOpenCard] = useState(null);
  const handleOpen = (card) => setOpenCard(openCard === card ? null : card);
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  if (screenwidth < breakpoint) {
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
            Project
          </div>
          <div
            id="desc"
            className="text-[18px] text-center max-w-[600px] md:text-[16px] md:max-w-[420px]"
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            I have worked on a wide range of projects.Here are some of my
            projects.
          </div>
          <Carousel className="rounded-xl" navigation={false} autoplay loop>
            {Project.map((single) => (
              <div
                className="flex justify-center items-center gap-7"
                key={single.Pname}
              >
                <Card
                  className="w-80"
                  style={{
                    background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
                  }}
                >
                  <CardHeader floated={false} className="h-60 w-70">
                    <img
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="profile-picture"
                    />
                  </CardHeader>
                  <CardBody className="text-center pb-0">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2"
                      style={{
                        color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                      }}
                    >
                      {single.Pname}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex justify-center gap-7 pt-2 flex-wrap">
                    {single.Picon.map((ic, index) => (
                      <Tooltip key={index} content={ic.name}>
                        <img
                          src={ic.ico}
                          alt={ic.name}
                          className="w-4 h-4 cursor-pointer"
                        />
                      </Tooltip>
                    ))}
                  </CardFooter>
                  <CardFooter className="pt-0 flex justify-center gap-3 items-center flex-wrap ">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2 hover:bg-[#a6b8c1]"
                      style={{
                        color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                      }}
                      onClick={() => handleOpen(single.Pname)}
                    >
                      Gallery
                      <PhotoIcon
                        className="h-5 w-5 transition-transform group-hover:hidden transition-all duration-2000"
                        color={`${DarkMode ? "#fff" : "#31333b"}`}
                      />
                    </Button>

                    <a href={single.Pgithub} className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 hover:bg-[#a6b8c1]"
                        style={{
                          color: `${
                            DarkMode ? "#F2F3F4" + 80 : "#111111" + 80
                          }`,
                        }}
                      >
                        Github
                        <FaGithubSquare
                          className="h-5 w-5"
                          color={`${DarkMode ? "#fff" : "#31333b"}`}
                        />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
                <Dialog
                  size="xl"
                  open={openCard === single.Pname}
                  handler={() => handleOpen(single.Pname)}
                  style={{ background: "#d9d9d9" }}
                >
                  <DialogHeader className="justify-between pb-0">
                    <div className="flex items-center gap-3">
                      <div className="-mt-px flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {single.Pname}
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={() => handleOpen(single.Pname)}
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
                    <div className="grid gap-4">
                      <div>
                        <img
                          className=" h-[33rem] w-[50rem]  md:h-auto sm:h-auto rounded-lg object-cover object-center"
                          src={active}
                          alt=""
                        />
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        {single.Pgallery.map(({ imgelink }, index) => (
                          <div key={index}>
                            <img
                              onClick={() => setActive(imgelink)}
                              src={imgelink}
                              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                              alt="gallery-image"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogBody>
                </Dialog>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="project"
        className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
      >
        <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col">
          <div
            id="porttitle"
            className="text-[42px] text-center font-semibold mt-5"
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            Projects
          </div>
          <div
            id="desc"
            className="text-[18px] text-center max-w-[600px] md:text-[16px]"
            style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
          >
            I have worked on a wide range of projects.Here are some of my
            projects.
          </div>
          <div className="flex justify-center items-center gap-12">
            {Project.map((single) => (
              <div key={single.Pname}>
                <Card
                  className="w-80"
                  style={{
                    background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
                  }}
                >
                  <CardHeader floated={false} className="h-60 w-70">
                    <img
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="profile-picture"
                    />
                  </CardHeader>
                  <CardBody className="text-center pb-0">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2"
                      style={{
                        color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                      }}
                    >
                      {single.Pname}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex justify-center gap-7 pt-2 flex-wrap">
                    {single.Picon.map((ic, index) => (
                      <Tooltip key={index} content={ic.name}>
                        <img
                          src={ic.ico}
                          alt={ic.name}
                          className="w-4 h-4 cursor-pointer"
                        />
                      </Tooltip>
                    ))}
                  </CardFooter>
                  <CardFooter className="pt-0 flex justify-center gap-3 items-center flex-wrap ">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2 hover:bg-[#a6b8c1]"
                      style={{
                        color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
                      }}
                      onClick={() => handleOpen(single.Pname)}
                    >
                      Gallery
                      <PhotoIcon
                        className="h-5 w-5 transition-transform group-hover:hidden transition-all duration-2000"
                        color={`${DarkMode ? "#fff" : "#31333b"}`}
                      />
                    </Button>

                    <a href={single.Pgithub} className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 hover:bg-[#a6b8c1]"
                        style={{
                          color: `${
                            DarkMode ? "#F2F3F4" + 80 : "#111111" + 80
                          }`,
                        }}
                      >
                        Github
                        <FaGithubSquare
                          className="h-5 w-5"
                          color={`${DarkMode ? "#fff" : "#31333b"}`}
                        />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
                <Dialog
                  size="xl"
                  open={openCard === single.Pname}
                  handler={() => handleOpen(single.Pname)}
                  style={{ background: "#d9d9d9" }}
                >
                  <DialogHeader className="justify-between pb-0">
                    <div className="flex items-center gap-3">
                      <div className="-mt-px flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {single.Pname}
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={() => handleOpen(single.Pname)}
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
                    <div className="grid gap-4">
                      <div>
                        <img
                          className=" h-[33rem] w-[50rem]  md:h-auto sm:h-auto rounded-lg object-cover object-center"
                          src={active}
                          alt=""
                        />
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        {single.Pgallery.map(({ imgelink }, index) => (
                          <div key={index}>
                            <img
                              onClick={() => setActive(imgelink)}
                              src={imgelink}
                              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                              alt="gallery-image"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogBody>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
