import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drink } from "../../Interfaces";
import './RandomDrink.css';

interface Props {
    drink?: Drink[]
}

const GetRandomDrink = (props: Props) => {
    let navigate = useNavigate();

    function RandomDrink () {
        fetch(`https://thecocktaildb.com/api/json/v1/1/random.php`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            navigate(`/drink/${data.drinks[0].idDrink}`);
        });
    }

    return (
        <button onClick={RandomDrink} className="randomButton">Randomize me!</button>
    )
}

export default GetRandomDrink;