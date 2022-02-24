import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import "./SearchBar.css";
import { Drink } from "../Interfaces";

function SearchForDrinks() {
  const [drinks, setDrinks] = useState([] as Drink[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setDrinks([]);
    } else {
      fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => {
          return res.json();
        })

        .then((drinks: Drink[]) => {
          return setDrinks(drinks);
        });
    }
  }, [search]);

  const handleChange: React.ChangeEventHandler = (e) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <h3>Search for a drink by its name:</h3>
      <SearchBar placeHolder="Search..." handleChange={handleChange} />
    </div>
  );
}

export default SearchForDrinks;
