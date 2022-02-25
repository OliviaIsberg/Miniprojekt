import "./Header.css";
import GetRandomDrink from "../RandomDrink/RandomDrink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <header>
        <Link to="/">
          <h1 className="headerHeading">LET'S DRINK</h1>
        </Link>
      </header>
      <GetRandomDrink />
    </div>
  );
}

export default Header;
