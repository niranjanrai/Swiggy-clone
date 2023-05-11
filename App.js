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

const heading = <h1> Hello world </h1>;
const main = (
  <div>
    <h1> Namaste React</h1>
    <ul>
      <li>Mango</li>
      <li>Apple</li>
      <li>Grapes</li>
    </ul>
  </div>
);

createRoot(el).render(main);
