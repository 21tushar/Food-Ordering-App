import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const res = await data.json();
    setResInfo(res?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
