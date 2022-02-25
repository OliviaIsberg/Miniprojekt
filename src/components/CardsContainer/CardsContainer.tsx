import { useEffect, useState } from "react";
import SmallDrinkCard from "../SmallDrinkCard/SmallDrinkCard";
import { Drink } from "../../Interfaces";
import "./CardsContainer.css";

interface Props {
  drinks: Drink[];
}

const CardsContainer = (props: Props) => {
  return (
    <div className="cards-wrapper">
      {props.drinks.length &&
        props.drinks.map((drink) => <SmallDrinkCard drink={drink} />)}
    </div>
  );
};

export default CardsContainer;
