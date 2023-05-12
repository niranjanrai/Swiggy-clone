import React from "react";
import { createRoot } from "react-dom/client";

const el = document.getElementById("root");

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
          alt="logo"
        />
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

      <Header />
      <Body />
      <Footer />
    </>
  );
};

createRoot(el).render(<AppLayout />);
