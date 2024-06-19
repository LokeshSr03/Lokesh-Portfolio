import React from "react";
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
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { PhotoIcon } from "@heroicons/react/24/solid";

function Portfolio() {
  const { DarkMode } = useDarkMode();
  const screenwidth = window.innerWidth;
  const breakpoint = 960;
  if (screenwidth < breakpoint) {
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
            Portfolio
          </div>
          <Carousel className="rounded-xl" navigation={false} autoplay loop>
            <div className="flex justify-center items-center gap-7">
              <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                  <img
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="profile-picture"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Natalie Paisley
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    CEO / Co-Founder
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center items-center gap-7">
              <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                  <img
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="profile-picture"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Natalie Paisley
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    CEO / Co-Founder
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center items-center gap-7">
              <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                  <img
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="profile-picture"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Natalie Paisley
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    CEO / Co-Founder
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
            </div>
          </Carousel>
        </div>
      </div>
    );
  } else {
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
            Big Portfolio
          </div>
          <div className="flex justify-center items-center gap-7">
            <Card className="w-96">
              <CardHeader floated={false} className="h-80">
                <img
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center pb-0">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Natalie Paisley
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Javascript">
                  <FontAwesomeIcon
                    icon={faJs}
                    style={{ color: "#d76e42" }}
                    className="cursor-pointer"
                  />
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
              <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    Gallery
                    <PhotoIcon
                      className="hidden h-5 w-5 transition-transform group-hover:block transition-all duration-2000"
                      color={`${DarkMode ? "red" : "#blue "}`}
                    />
                  </Button>
                </a>
                <a href="#" className="inline-block">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
