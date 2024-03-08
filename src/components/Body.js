import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Button } from "@nextui-org/react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getSearchText(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();
    console.log(res);
    // Optional Chaining
    setlistOfRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex gap-1 mt-4">
        <input
          type="text"
          className="bg-[#f4f4f4] rounded-xl ml-[2.78rem] pl-2"
          onChange={getSearchText}
          value={searchText}
        />

        <Button
          className="rounded-xl"
          onClick={() => {
            const filteredRestaurants = listofRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setlistOfRestaurants(filteredRestaurants);
          }}
        >
          Search
        </Button>

        <Button
          className="rounded-xl iPhone4and4S:ml-6 iPhone6+and7+and8+:ml-12 iPad1and2andMiniandAir:ml-9 FullHDand2K:ml-56 p-[10px] ml-5"
          onClick={() => {
            const filterRestaurants = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setlistOfRestaurants(filterRestaurants);
          }}
        >
          Top Rated Restaurants
        </Button>
      </div>
      <div className="res-container mt-6 gap-2 grid grid-cols-4 iPhone4and4S:grid iPhone4and4S:grid-cols-1 iPhone4and4S:ml-5 iPad1and2andMiniandAir:grid iPad1and2andMiniandAir:grid-cols-2 GalaxyTab2:grid GalaxyTab2:grid-cols-3  GalaxyTab2:ml-10 iPhone6+and7+and8+:ml-12 iPad1and2andMiniandAir:ml-[2.3rem] iPadPro10.5:mr-[4.5rem] FullHDand2K:ml-56">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
