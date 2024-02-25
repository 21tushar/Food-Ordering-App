import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header flex justify-between border border-black">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt=""
          className="logo w-[70px] ml-4"
        />
      </div>
      <div className="nav-items">
        <ul className="flex font-semibold mr-5 *:m-[10px] *:p-[10px]">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Cart</a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
