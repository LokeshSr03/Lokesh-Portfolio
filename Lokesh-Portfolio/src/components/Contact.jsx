import React, { useRef, useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import { Button } from "@material-tailwind/react";
import { IoIosSend } from "react-icons/io";
import { Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact() {
  const { DarkMode } = useDarkMode();

  const form = useRef();

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ex5bc69", "template_3xphd0h", form.current, {
        publicKey: "dmzQ10kPEVY-bv8Eq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center relative z-[1] mt-12 md:mt-0 sm:mt-0"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)",
        background:
          "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
      }}
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 md:flex-col mb-16">
        <div
          id="contitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Contact
        </div>
        <div
          id="condesc"
          className="text-[18px] text-center  mdm:text-[16px] sm:text-[14px] md:max-w-[90%] sm:max-w-[90%]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </div>

        <form
          className="w-3/4 max-w-[600px] flex flex-col p-8 rounded-2xl  gap-3 sm:mt-0"
          style={{
            background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <div
            id="contitle"
            className="text-[24px] mb-[6px] font-semibold sm:text-[18px] "
            style={{ color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}` }}
          >
            Email Me 🚀
          </div>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4 sm:text-[12px] "
            style={{
              border: `1px solid ${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
              color: `${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4 sm:text-[12px]"
            style={{
              border: `1px solid ${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
              color: `${DarkMode ? "#F2F3F4" : "#111111"}`,
            }}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4 sm:text-[12px]"
            style={{
              border: `1px solid ${DarkMode ? "#F2F3F4" + 80 : "#111111" + 80}`,
              color: `${DarkMode ? "#F2F3F4" : "#111111"}`,
            }}
          />

          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
            variant="gradient"
            className="flex items-center gap-1 mt-4 bg-custom-gradient justify-center "
            color="blue-gray"
            type="submit"
            value="Send"
          >
            <IoIosSend className="text-xl sm:text-[12px]" />
            Send
          </Button>
        </form>
        <Snackbar
          className="z-10 mt-24  sm"
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
          message="Email sent successfully!"
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
}

export default Contact;
