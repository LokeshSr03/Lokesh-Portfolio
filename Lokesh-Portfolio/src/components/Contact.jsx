import React, { useRef, useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import {
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { IoIosSend } from "react-icons/io";

function Contact() {
  const form = useRef();
  const { DarkMode } = useDarkMode();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          Contact
        </div>
        <div
          id="desc"
          className="text-[18px] text-center max-w-[600px] md:text-[16px] md:max-w-[500px]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </div>

        <form
          className="w-[95%] max-w-[600px] flex flex-col p-8 rounded-2xl mt-7 gap-3
        "
          style={{
            background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
          ref={form}
          onSubmit={handleSubmit}
        >
          <div
            id="contitle"
            className="text-[24px] mb-[6px] font-semibold "
            style={{ color: `${DarkMode ? "#F2F3F4" : "#111111"}` }}
          >
            Email Me 🚀
          </div>
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4"
            style={{
              border: `1px solid ${DarkMode ? "#b1b2b3" : "#48494a"}`,
              color: `${DarkMode ? "#F2F3F4" : "#111111"}`,
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4"
            style={{
              border: `1px solid ${DarkMode ? "#b1b2b3" : "#48494a"}`,
              color: `${DarkMode ? "#F2F3F4" : "#111111"}`,
            }}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4"
            style={{
              border: `1px solid ${DarkMode ? "#b1b2b3" : "#48494a"}`,
              color: `${DarkMode ? "#F2F3F4" : "#111111"}`,
            }}
          />

          <Button
            variant="gradient"
            className="flex items-center gap-1 mt-4 bg-custom-gradient justify-center "
            color="blue-gray"
            type="submit"
            value="Send"
          >
            <IoIosSend className="text-xl" />
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
