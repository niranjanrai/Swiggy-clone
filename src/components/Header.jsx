import { Button } from "react-bootstrap";
import { useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
