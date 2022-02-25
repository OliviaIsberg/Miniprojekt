import { Link } from 'react-router-dom'
import './SmallDrinkCard.css'
import { Drink } from "../../Interfaces";

interface Props {
  drink: Drink
}

const SmallDrinkCard = (props: Props) => {
  return (
    <div className="smallDrink-container">
      <img src={props.drink.strDrinkThumb} alt={props.drink.strDrink} />
      <h3>{props.drink.strDrink}</h3>
      <Link to ={`/drink/${props.drink.idDrink}`}><button>see recipe</button></Link>
    </div>
  )
}

export default SmallDrinkCard
