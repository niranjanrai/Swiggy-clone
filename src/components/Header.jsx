import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "./user_context";
const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <>
      <a href="/" className="logo">
        FoodVilla
      </a>
    </>
  );
};

const Header = () => {
  const mak = useUserContext();
  console.log(mak);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header>
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact </li>
          </Link>
          <Link to="cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <Button
          className="btn"
          variant="danger"
          size="lg"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </Button>
      ) : (
        <Button
          className="btn"
          variant="success"
          size="lg"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </Button>
      )}
    </header>
  );
};

export default Header;
