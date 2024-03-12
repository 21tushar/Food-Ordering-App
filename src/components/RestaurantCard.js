import Logo from "./Logo"
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="res-card w-[250px] p-[5px] ml-[2.2rem] hover:border hover:border-gray-400 hover:scale-95 hover:cursor-pointer hover:transition hover:shadow-xl">
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
        className="w-[100%] h-44 rounded-xl object-cover"
      />
      <h3 className="text-[1.17em] font-bold mt-3">{name}</h3>
      <h4 className="text-[15px] font-[500] mt-3">{cuisines.join(", ")}</h4>
      <h4 className="text-[15px] font-[500] mt-3 flex gap-[0.2rem]">
        <Logo />
        {`${avgRating} • ${deliveryTime} mins • ${costForTwo}`}
      </h4>
      {/* <h4 className="text-[1em] font-[500] mt-3">{costForTwo}</h4> */}
    </div>
  );
};

export default RestaurantCard;
