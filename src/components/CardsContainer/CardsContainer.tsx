import { useEffect, useState } from 'react'
import SmallDrinkCard from '../SmallDrinkCard/SmallDrinkCard'
import { Drink } from '../../Interfaces'
import './CardsContainer.css'

// interface props{
//   title: string
//   imgurl: number
// }

const CardsContainer = () =>
  // props: Props
  {
    const [drinks, setDrinks] = useState([] as Drink[])

    useEffect(() => {
      fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=gin`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          return setDrinks(data.drinks)
        })
    }, [])

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
