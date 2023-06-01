import RestuarantCard from "./RestuarantCard";
import { RestuarantList } from "../Constant";
import { useState, useEffect } from "react";

function filterData(searchText, restuarants) {
  // filtered data
  return restuarants.filter((restuarant) =>
    restuarant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSeachText] = useState("");
  const [restuarants, setRestuarants] = useState(RestuarantList);

  useEffect(() => {
    // API Call
    getRestuarants();
  }, []);

  async function getRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
  }

  return (
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
            const data = filterData(searchText, restuarants);
            // update the state - restuarant
            setRestuarants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restuarants.map((restuarant) => {
          return (
            <RestuarantCard {...restuarant.data} key={restuarant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
