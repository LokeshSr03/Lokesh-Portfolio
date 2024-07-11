import React, { useRef, useState } from "react";
import { useDarkMode } from "../global store/DarkModeContext";
import { Button } from "@material-tailwind/react";
import { IoIosSend } from "react-icons/io";
import { Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact() {
  const [open, setOpen] = useState(false);

  const { DarkMode } = useDarkMode();

  const form = useRef();

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
          setOpen(true);
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
          id="porttitle"
          className="text-[42px] text-center font-semibold mt-5"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Contact
        </div>
        <div
          id="desc"
          className="text-[18px] text-center max-w-[600px] md:text-[16px] md:max-w-[420px]"
          style={{ color: `${DarkMode ? "#d9d9d9" : "#31333b"}` }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </div>

        <form
          className="w-[80%] max-w-[600px] flex flex-col p-8 rounded-2xl mt-7 gap-3"
          style={{
            background: `${DarkMode ? "#171721" : "#FFFFFF"}`,
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
          ref={form}
          onSubmit={sendEmail}
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
            name="user_name"
            className="flex-1 bg-transparent outline-none text-[18px] rounded-xl py-3 px-4"
            style={{
              border: `1px solid ${DarkMode ? "#b1b2b3" : "#48494a"}`,
              color: `${DarkMode ? "#F2F3F4" : "#111111"}`,
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
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
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
}

export default Contact;
