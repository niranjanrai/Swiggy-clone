import React from "react";
import { createRoot } from "react-dom/client";

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
       *      - RestuarantCard
       *          - Image
       *          - Name
       *          - Rating
       *          - Cusiness
       * Footer
           - Links
           - Copyright (c)
       *
       */
}

const Title = () => {
  return (
    <>
      <a href="/" className="logo">
        FV
      </a>
    </>
  );
};

const Header = () => {
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

const Body = () => {
  return (
    <>
      <h4>Body</h4>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <h4> Footer </h4>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

createRoot(el).render(<AppLayout />);
