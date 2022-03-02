import "./AboutPage.css";
import tomas from "./tomas.png";
import olivia from "./olivia.png";
import sabina from "./sabina.png";

function AboutPage() {
  return (
    <>
      <div className="textContainer">
        <div>
          <h2>About Let's Drink </h2>
          <p>
            This application is built by three front-end webdeveloper students
            at Medieinstitutet Sweden. The goal was to build the application in
            TSX (React Typescript) where all data was fetched from an API,
            explore more about how data is drawn out, and use React routing.
          </p>
          <h3>Features:</h3>
          <ul>
            <li>
              Filter drinks by type of booze (either by clicking the cards on
              the first page, or by going to
              http://localhost:3000//alcohol/examplealcohol)
            </li>
            <li>
              Search for drinks by the name. A search bar on the first page that
              automatically goes through the full API by the drink-names.
            </li>
            <li>
              Random drink - button. A button places in the header that fetches
              one randomized drink.
            </li>
          </ul>
          <p>
            The API used is by "thecocktaildb" :{" "}
            <a className="cocktailApi" href="https://thecocktaildb.com/">
              https://thecocktaildb.com/
            </a>
          </p>

          <h3>Coders:</h3>

          <ul className="devList">
            <li>
              <img src={tomas} alt="tomas"></img>
              <p>Tomas Fridekrans</p>
            </li>
            <li>
              <img src={olivia} alt="olivia"></img>
              <p>Olivia Isberg</p>
            </li>
            <li>
              <img src={sabina} alt="sabina"></img>
              <p>Sabina Andersson</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
