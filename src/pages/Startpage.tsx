import { CSSProperties, useState } from "react";
import BoozeCard from "../components/BoozeCard/BoozeCard";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import SearchForDrinks from "../components/Search/SearchForDrinks";
import { Drink } from "../Interfaces";

function StartPage() {
  const [drinks, setDrinks] = useState([] as Drink[]);

  return (
    <>
      <SearchForDrinks
        changeCallBack={(searchedDrinks: Drink[]) => setDrinks(searchedDrinks)}
      />

      {!!drinks.length && <CardsContainer drinks={drinks} />}

      {!drinks.length && (
        <div style={rootStyle}>
          <ErrorBoundary>
          <BoozeCard booze ="gin" title = "Gin"/>
          <BoozeCard booze ="vodka" title = "Vodka"/>
          <BoozeCard booze ="bourbon" title = "Bourbon"/>
          </ErrorBoundary>
        </div>
      )}
    </>
  );
}

const rootStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2rem",
  padding: "2rem",
};

export default StartPage;
