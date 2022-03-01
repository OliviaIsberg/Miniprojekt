import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import "./SearchBar.css";
import { Drink } from "../../Interfaces";

interface Props {
  changeCallBack(drinks: Drink[]): void;
}

interface SearchResponse {
  drinks: Drink[] | null;
}

function SearchForDrinks(props: Props) {
  const [drinks, setDrinks] = useState([] as Drink[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setDrinks([]);
      props.changeCallBack([]);
    } else {
      fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => {
          return res.json();
        })

        .then((response: SearchResponse) => {
          if (response.drinks === null) {
            props.changeCallBack([]);
            return setDrinks([]);
          } else {
            props.changeCallBack(response.drinks);
            return setDrinks(response.drinks);
          }
        });
    }
  }, [props, search]);

  const handleChange: React.ChangeEventHandler = (e) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  return (
    <div className="searchBarContainer">
      <h3>Find your favorite</h3>
      <SearchBar placeHolder="Search..." handleChange={handleChange} />
      {!drinks.length && search && (
        <p>
          There's no drinks mathing this name...
          <br />
          Please try another name.
        </p>
      )}
    </div>
  );
}

export default SearchForDrinks;
