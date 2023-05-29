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

export default Header;
