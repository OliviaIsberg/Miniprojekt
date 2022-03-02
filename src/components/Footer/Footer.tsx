import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <footer>
        <h2 className="footerHeading">
          Made with <span>❤</span> by us
        </h2>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
