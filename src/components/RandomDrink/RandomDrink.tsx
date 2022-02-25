import React, { } from "react";
import './RandomDrink.css';

interface RandomDrink {
    id: number;
}

const GetRandomDrink = () => {
    function handle(event: React.MouseEvent<HTMLButtonElement>) {
        fetch(`https://thecocktaildb.com/api/json/v1/1/random.php`)
        .then((res) => {
            return res.json()
          })
          .then((data) => {
              window.location.pathname = `/drink/${data.drinks[0].idDrink}`
          })
    }
 
    return (
        // Display in header component.
        //Here should be <NavButton/> that fetches API, 
        //reroutes to BigDrinkCard with a randomized search
        <button onClick={handle} className="randomButton">Randomize me!</button>
    
    )
}

export default GetRandomDrink;