import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { Button } from "@nextui-org/react"

const Body = () => {

  const [listofRestaurants, setlistOfRestaurants] = useState(resList)

  return (
    <div className="body">
      <div className="p-[10px] ml-[35px] mb-3">
        <Button className="rounded-3xl iPhone4and4S:ml-6 iPhone6+and7+and8+:ml-12 iPad1and2andMiniandAir:ml-9 FullHDand2K:ml-56 font-semibold" onClick={
          () => {
            const filterRestaurants = listofRestaurants.filter((res) => res.info.avgRating > 4.5)
            setlistOfRestaurants(filterRestaurants)
          }
        }>Top Rated Restaurants</Button>
      </div>
      <div className="res-container gap-2 grid grid-cols-4 iPhone4and4S:grid iPhone4and4S:grid-cols-1 iPhone4and4S:ml-5 iPad1and2andMiniandAir:grid iPad1and2andMiniandAir:grid-cols-2 GalaxyTab2:grid GalaxyTab2:grid-cols-3  GalaxyTab2:ml-10 iPhone6+and7+and8+:ml-12 iPad1and2andMiniandAir:ml-[2.3rem] iPadPro10.5:mr-[4.5rem] FullHDand2K:ml-56">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
