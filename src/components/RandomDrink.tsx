
import React, { } from "react";
import './RandomDrink.css';


const GetRandomDrink = () => {
    function handle(event: React.MouseEvent<HTMLButtonElement>) {
        fetch(`https://thecocktaildb.com/api/json/v1/1/random.php`)
        .then((res) => {
            return res.json()
          })
          .then((data) => {
              console.log(data);
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