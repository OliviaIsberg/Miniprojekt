import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import "./DrinkPage.css";
import { Drink } from "../Interfaces";

interface Props {
  drinks: Drink[];
}


const DrinkPage = (props: Props) => {
  const [drink, setDrink] = useState([] as Drink[]);
  const params = useParams();
  console.log(params);
  useEffect(() => {

    fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setDrink(data.drinks);
      })
    },[params.id])
    
    console.log(drink)
  return (
    <div className="bigCardsContainer">
      <div>
        <img src={drink[0]?.strDrinkThumb} alt="" />
      </div>
      <div className="bigCardInfo">
        <h1>{drink[0]?.strDrink}</h1>
        <p>
          {drink[0]?.strDrink}
        </p>
      </div>
    </div>
  )
}

export default DrinkPage;
