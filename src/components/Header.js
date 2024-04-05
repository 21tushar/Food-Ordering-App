import { LOGO_URL } from "../utils/constants";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  function changeBtn() {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }

  return (
    <div className="header flex justify-between shadow-md shadow-gray-300">
      <div className="logo-container">
        <Link to="/"><img src={LOGO_URL} alt="" className="logo w-[70px] ml-4" /></Link>
      </div>
      <div className="nav-items">
        <ul className="flex font-semibold mr-5 *:m-[10px] *:p-[10px]">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="#">Cart</a>
          <Button onClick={changeBtn}>{btnName}</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
