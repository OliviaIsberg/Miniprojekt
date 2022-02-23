import React from "react";
import { Routes } from "react-router-dom";
import './RandomDrink.css';

function GetRandomDrink() {
    return(
        // Display in header component.
        //Here should be <NavButton/> that fetches API, 
        //reroutes to BigDrinkCard with a randomized search
        <button className="randomButton">Randomize me!</button>
        )
}

export default GetRandomDrink;