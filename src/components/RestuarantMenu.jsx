import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import CardExample from "./CardExample.jsx";
import { IMG_CDN_URL } from "../Constant";
import { BsFillStarFill } from "react-icons/bs";
import { MENU_API_URL } from "../Constant";

const RestuarantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [restuarantInfo, setRestuarantInfo] = useState(null);
  const [menuCards, setMenuCards] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API_URL + resId);
    const json = await response.json();
    setRestuarantInfo(json?.data?.cards[0]?.card?.card?.info);
    setMenuCards(json);
  };

  if (restuarantInfo === null) {
    return <CardExample />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    city,
    costForTwoMessage,
    avgRating,
  } = restuarantInfo;

  // dish info
  const { itemCards } =
    menuCards?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card;

  return (
    <>
      <div className="menu">
        <h1 className="name">{"name"}</h1>
        <h2 className="cuisines">{"cuisines"}</h2>

        <img src={IMG_CDN_URL + cloudinaryImageId} alt="name" />
        <p>{city}</p>
        <p> {areaName} </p>
        <p> {costForTwoMessage} </p>
        <p>
          {avgRating} <BsFillStarFill />
        </p>
      </div>
      <div>
        <ul>
          {itemCards.map((card) => (
            <li key={card.card.info.id}>
              {console.log(card)}
              {card.card.info.name}
              <img
                src={IMG_CDN_URL + card.card.info.imageId}
                alt={card.card.info.name}
              />
              <p>
                <strong>
                  Price:{" "}
                  {Math.floor(
                    card?.card?.info?.price || card.card.info.defaultPrice / 100
                  )}
                </strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestuarantMenu;
