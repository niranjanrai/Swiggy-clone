import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import CardExample from "./CardExample.jsx";
import { IMG_CDN_URL } from "../Constant";
import { BsFillStarFill } from "react-icons/bs";

const RestuarantMenu = () => {
  const { id } = useParams();
  const [restuarantInfo, setRestuarantInfo] = useState(null);
  const [menuCards, setMenuCards] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52630&submitAction=ENTER"
    );
    const json = await response.json();
    setRestuarantInfo(json?.data?.cards[0]?.card?.card?.info);
    setMenuCards(json);
    console.log(json);
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

  const { itemCards } =
    menuCards?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card;
  return (
    <>
      <div className="menu">
        <h1 className="name">{name}</h1>
        <h2 className="cuisines">{cuisines}</h2>

        <img src={IMG_CDN_URL + cloudinaryImageId} alt="name" />
        <p>{city}</p>
        <p> {areaName} </p>
        <p> {costForTwoMessage} </p>
        <p>
          {avgRating} <BsFillStarFill />
        </p>
      </div>
      <div> {itemCards.map((card) => console.log(card))} </div>
    </>
  );
};

export default RestuarantMenu;
