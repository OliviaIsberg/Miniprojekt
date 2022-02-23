import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import "./SearchBar.css";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: any;
  strTags: string;
  strVideo?: any;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: any;
  strInstructionsDE: string;
  strInstructionsFR?: any;
  strInstructionsIT: string;
  "strInstructionsZH-HANS"?: any;
  "strInstructionsZH-HANT"?: any;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8?: any;
  strIngredient9?: any;
  strIngredient10?: any;
  strIngredient11?: any;
  strIngredient12?: any;
  strIngredient13?: any;
  strIngredient14?: any;
  strIngredient15?: any;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8?: any;
  strMeasure9?: any;
  strMeasure10?: any;
  strMeasure11?: any;
  strMeasure12?: any;
  strMeasure13?: any;
  strMeasure14?: any;
  strMeasure15?: any;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

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
