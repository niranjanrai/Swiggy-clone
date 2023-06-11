import RestuarantCard from "./RestuarantCard";
import { Button } from "react-bootstrap";
import { RestuarantList } from "../Constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import CardExample from "./CardExample";
import { App } from "./CardExample";
import RestuarantMenu from "./RestuarantMenu";

function filterData(searchText, restuarants) {
  // filtered data
  return restuarants.filter((restuarant) =>
    restuarant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestuarant, setAllRestuarant] = useState([]);
  const [searchText, setSeachText] = useState("");
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  useEffect(() => {
    // API Call
    getRestuarants();
  }, []);

  // get Restuarant
  async function getRestuarants() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    setAllRestuarant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestuarants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // not render component (early return)

  if (!allRestuarant) return null;

  // show when no restuarant found in search
  // if (filteredRestuarants?.length === 0)
  //   return <h1> No Restuarant match your search</h1>;

  // conditional rendering
  return allRestuarant.length === 0 ? (
    <div className="shimmer-con">
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="seach-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSeachText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, allRestuarant);
            // update the state - restuarant
            setFilteredRestuarants(data);
          }}
        >
          Search
        </button>
        <RestuarantMenu />
      </div>
      <div className="body">
        {filteredRestuarants.map((restuarant) => {
          return (
            <RestuarantCard {...restuarant.data} key={restuarant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
