import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 mt-28">
        <div className="ml-[5.2rem] font-poppins">
          <h1 className="text-7xl leading-tight">
            We deliver <br /> delicious & <br />{" "}
            <span className="text-[#d97919]">healthy food</span>
          </h1>
          <p className="pt-5 text-[17px] text-gray-800 italic">
            Order online or book a table. We are always <br /> ready to fulfill
            your demand.
          </p>
        </div>
        <img
          src="https://foodfire-chapter09.netlify.app/burger-image.ec55d069.png"
          alt=""
          className="ml-24"
        />
      </div>
    </>
  );
};

export default About;
