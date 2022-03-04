import { Link } from "react-router-dom";
import "./SmallDrinkCard.css";
import { Drink } from "../../Interfaces";

interface Props {
  drink: Drink;
}

const SmallDrinkCard = (props: Props) => {
  return (
    <div
      className="smallDrink-container"
      style={{ backgroundImage: `url(${props.drink.strDrinkThumb})` }}
    >
      <div>
        <h3>{props.drink.strDrink}</h3>
        <Link to={`/drink/${props.drink.idDrink}`}>
          <button>see recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default SmallDrinkCard;
