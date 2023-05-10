import React from "react";
import { createRoot } from "react-dom/client";

const el = document.getElementById("root");

const App = () => {
  const name = "Niranjan Rai";
  console.log(name);
  return (
    <>
      <h2>Hello world</h2>
    </>
  );
};

const heading = React.createElement(
  "h1",
  {
    key: "title",
  },
  "heading"
);
const heading2 = React.createElement(
  "h2",
  {
    key: "title2",
  },
  "heading2"
);
const container = React.createElement("div", {}, [heading, heading2]);
createRoot(el).render(container);
