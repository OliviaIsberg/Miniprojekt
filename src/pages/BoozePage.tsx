import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import { Drink } from "../Interfaces";


function BoozePage() {
  let { booze } = useParams();
  const [drinks, setDrinks] = useState([] as Drink[]);

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${booze}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setDrinks(data.drinks);
      });
  }, []);

  return (
    <>
      <div className="BoozeContainer">
        <h2>Drinks that contains {booze}</h2>
        <CardsContainer drinks={drinks} />
      </div>
    </>
  );
}

export default BoozePage;
