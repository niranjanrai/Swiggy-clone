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

createRoot(el).render(<App />);
