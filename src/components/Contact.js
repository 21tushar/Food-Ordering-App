import React from "react";
import Header from "./Header";
import { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

const Contact = () => {
  const [message, setMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 mt-24 iPhone4and4S:grid iPhone4and4S:grid-cols-1 iPhone4and4S:mt-11">
        <div className="ml-32">
          <img
            src="https://foodfire-chapter09.netlify.app/Contact-Us.13c5d28a.png"
            alt=""
            width={350}
            className="iPhone4and4S:-ml-16"
          />
        </div>
        <div className="-ml-40 iPhone4and4S:justify-center iPhone4and4S:items-center iPhone4and4S:text-center iPhone4and4S:ml-4 iPhone4and4S:mt-7 iPhone4and4S:*:mr-5">
        <h1 className="text-[2.3em] iPhone4and4S:text-[3em] font-bold font-poppins text-center mt-3">Contact us</h1>
          <form
            className="flex-col items-center justify-center flex iPhone4and4S:*:w-60"
            onSubmit={handleSubmit}
          >
            <Input
              isRequired
              type="text"
              className="pl-2 w-[38rem] mt-2"
              placeholder="Enter your name"
              size="sm"
              radius="sm"
              classNames={{
                input: ["text-black/90", "placeholder:text-zinc-500 text-sm"],
                inputWrapper: [
                  "bg-transparent",
                  "border-small",
                  "border-orange-400",
                ],
              }}
            />
            <Input
              isInvalid
              type="email"
              className="pl-2 w-[38rem] mt-5"
              placeholder="Enter your email"
              size="sm"
              radius="sm"
              classNames={{
                input: ["text-black/90", "placeholder:text-zinc-500 text-sm"],
                inputWrapper: [
                  "bg-transparent",
                  "border-small",
                  "border-orange-400",
                ],
              }}
            />
            <Textarea
              isRequired
              placeholder="Type your message here"
              className="h-[5rem] w-[38rem] mt-5 ml-3"
              size="sm"
              radius="sm"
              classNames={{
                input: ["text-black/90", "placeholder:text-zinc-500 text-sm"],
                inputWrapper: [
                  "bg-transparent",
                  "border-small",
                  "border-orange-400",
                ],
              }}
            />
            <Button
              className="mt-5 bg-[#c26100] text-white font-poppins text-lg"
              radius="sm"
              type="submit"
            >
              Submit
            </Button>
            {message && (
              <h1 className="mt-2 text-[22px] font-poppins font-semibold">
                Thanks for contacting with us, We will reply ASAP.
              </h1>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
