import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RestuarantList } from "./Constant";
const el = document.getElementById("root");

{
  /**
       * Header
          - Logo
          - NavItems (Right Side)
          - Cart
       * Body
       *  -SearchBar
       *  -RestuarantList
       *      - RestuarantCard (many cards)
       *          - Image
       *          - Name
       *          - Rating
       *          - Cusiness
       * Footer
       
           - Links
           - Copyright (c)

       *  Config-Driven UI
       */
}

const style = 

const AppLayout = () => {
  return (
    <>
      <Header  />
      <Body />
      <Footer />
    </>
  );
};

createRoot(el).render(<AppLayout />);
