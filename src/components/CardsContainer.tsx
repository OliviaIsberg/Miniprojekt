import { CSSProperties, useEffect, useState } from "react";
import SmallDrinkCard from "./SmallDrinkCard/SmallDrinkCard";
import { Drink } from "../Interfaces";
import { Props } from "../Interfaces";

const CardsContainer = (props: Props) => {
  const [drinks, setDrinks] = useState([] as Drink[]);

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=gin`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setDrinks(data.drinks);
      });
  }, []);

  return (
    <div style={rootStyle}>
      {drinks &&
        drinks.map((drink) => (
          <SmallDrinkCard
            key={drink.idDrink}
            imageUrl={drink.strDrinkThumb}
            title={drink.strDrink}
          />
        ))}
    </div>
  );
};

export default CardsContainer;

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
};
