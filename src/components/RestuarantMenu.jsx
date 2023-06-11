import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const { id } = useParams();

  useEffect(() => {
    getRestuarantDetails();
  }, []);

  async function getRestuarantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52630&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  }

  return (
    <div>
      <h1> Restuarant id {id}</h1>
      <h1> Resturant name</h1>
    </div>
  );
};
export default RestuarantMenu;
