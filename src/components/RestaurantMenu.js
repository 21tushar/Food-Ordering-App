import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Header from "./Header";
import Shimmer from "./Shimmer";
import Logo from "./Logo";
import { CDN_URL } from "../utils/constants";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const res = await data.json();
    setResInfo(res?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <>
      <Header />
      <div className="flex bg-[#171717] justify-center items-center gap-3">
        <img
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="res-image"
          className="w-[250px] h-[170px]"
        />

        <div className="text-white text-center h-[12rem] pt-10">
          <h1 className="text-[2.3em] font-bold font-poppins">{name}</h1>
          <h3 className="text-[16px] font-bold text-[#f15700]">
            {cuisines.join(", ")}
          </h3>

          <div className="flex gap-[0.2rem] justify-center items-center pt-2">
            <Logo />
            <h4 className="text-[16px] font-bold">
              {`${avgRating} • ${costForTwoMessage}`}
            </h4>
          </div>
        </div>
      </div>

      <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "easeInOut",
                duration: 0.5,
              },
              opacity: {
                easings: "easeInOut",
                duration: 0.5,
              },
            },
          },
        },
      }}
    >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Recommended"
          subtitle="Click to expand"
          className="font-[800] w-[40rem] m-auto"
        >
          <div>
            <div className="text-center mt-3">
              <hr className="w-[40rem] m-auto h-[0.8px] bg-[#e2e2e7]" />
            </div>
            <div className="flex list-none justify-center items-center text-[#02060cbf] font-[600] gap-4">
              <div>
                {itemCards?.map((item) => {
                  return <li key={item.card.info.id}>{item.card.info.name}</li>;
                })}
              </div>
              <div>
                {itemCards?.map((item) => {
                  return (
                    <li key={item.card.info.id}>{`₹${item.card.info.price / 100
                      }`}</li>
                  );
                })}
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
      {/* <div>
            {itemCards.map((item) => {
              return <img src={`${CDN_URL}/${item.card.info.imageId}`} width={100} height={144} />
            })}
          </div> */}
    </>
  );
};

export default RestaurantMenu;
