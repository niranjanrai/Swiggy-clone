import React from "react";
import { createRoot } from "react-dom/client";

const el = document.getElementById("root");

const Title = () => {
  return (
    <>
      <h1>Food Villa</h1>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <header>
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const AppLayout = () => {
  return (
    <>
      {/**
       * Header
          - Logo
          - NavItems (Right Side)
          - Cart
       * Body
       *  -SearchBar
       *  -RestuarantList
       *      - RestuarantCard
       *          - Image
       *          - Name
       *          - Rating
       *          - Cusiness
       * Footer
           - Links
           - Copyright (c)
       *
       */}

      <HeaderComponent />
    </>
  );
};

createRoot(el).render(<AppLayout />);
