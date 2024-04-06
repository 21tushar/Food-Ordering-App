import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getSearchText(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();

    // Optional Chaining
    setlistOfRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="gap-1 mt-8">
        <div className="flex justify-center items-center">
          <Input
            isClearable
            onClear={() => setSearchText("")}
            type="text"
            className="ml-[2.78rem] pl-2 w-[30rem]"
            onChange={getSearchText}
            value={searchText}
            placeholder="Search a restaurant you want"
            size="sm"
            radius="none"
            classNames={{
              input: ["text-black/90", "placeholder:text-zinc-500 text-large"],
              inputWrapper: ["bg-transparent", "border-small"],
            }}
          />

          <Button
            className="h-12 w-24 -ml-2 bg-[#c26100] hover:bg-[#016034] text-white font-medium"
            radius="none"
            onClick={() => {
              const filteredRestaurants = listofRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </Button>
        </div>

        <Button
          className="rounded-xl iPhone4and4S:ml-6 iPhone6+and7+and8+:ml-12 iPad1and2andMiniandAir:ml-9 FullHDand2K:ml-56 p-[10px] ml-5 hidden"
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
      <div className="res-container mt-10 gap-6 grid grid-cols-4 iPhone4and4S:grid iPhone4and4S:grid-cols-1 iPhone4and4S:ml-5 iPad1and2andMiniandAir:grid iPad1and2andMiniandAir:grid-cols-2 GalaxyTab2:grid GalaxyTab2:grid-cols-3  GalaxyTab2:ml-10 iPhone6+and7+and8+:ml-12 iPad1and2andMiniandAir:ml-[2.3rem] iPadPro10.5:mr-[4.5rem] FullHDand2K:ml-56">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
