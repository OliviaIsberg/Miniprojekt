import { useEffect, useState } from 'react'
import SmallDrinkCard from '../SmallDrinkCard/SmallDrinkCard'
import { Drink } from '../../Interfaces'
import './CardsContainer.css'

interface Props {
  alcohol: string
  // imgurl: number
}

const CardsContainer = (props: Props) => {
  const [drinks, setDrinks] = useState([] as Drink[])

  useEffect(() => {
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${props.alcohol}`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setDrinks(data.drinks)
      })
  }, [props.alcohol])

  return (
    <div className="cards-wrapper">
      {drinks &&
        drinks.map((drink) => (
          <SmallDrinkCard
            key={drink.idDrink}
            imageUrl={drink.strDrinkThumb}
            title={drink.strDrink}
          />
        ))}
    </div>
  )
}

export default CardsContainer
