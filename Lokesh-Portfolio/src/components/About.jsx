import React from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function About() {
  const { DarkMode } = useDarkMode();
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
          className="text-[18px] text-center  md:text-[16px]"
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
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
