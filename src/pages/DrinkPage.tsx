import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DrinkPage.css'
import { Drink } from '../Interfaces'

function getIngredients(drink: Drink | undefined) {
  if (drink === undefined) {
    return null
  }

  const info = [
    { ingredient: drink.strIngredient1, measure: drink.strMeasure1 },
    { ingredient: drink.strIngredient2, measure: drink.strMeasure2 },
    { ingredient: drink.strIngredient3, measure: drink.strMeasure3 },
    { ingredient: drink.strIngredient4, measure: drink.strMeasure4 },
    { ingredient: drink.strIngredient5, measure: drink.strMeasure5 },
    { ingredient: drink.strIngredient6, measure: drink.strMeasure6 },
    { ingredient: drink.strIngredient7, measure: drink.strMeasure7 },
    { ingredient: drink.strIngredient8, measure: drink.strMeasure8 },
    { ingredient: drink.strIngredient9, measure: drink.strMeasure9 },
    { ingredient: drink.strIngredient10, measure: drink.strMeasure10 },
    { ingredient: drink.strIngredient11, measure: drink.strMeasure11 },
    { ingredient: drink.strIngredient12, measure: drink.strMeasure12 },
    { ingredient: drink.strIngredient13, measure: drink.strMeasure13 },
    { ingredient: drink.strIngredient14, measure: drink.strMeasure14 },
    { ingredient: drink.strIngredient15, measure: drink.strMeasure15 },
  ]

  let ingredients = []
  for (let i = 0; i < info.length; i++) {
    if (info[i].ingredient === null) {
      break
    }

    ingredients.push(
      <li key={`ingredient-${i + 1}`}>
        {info[i].ingredient} <span>{info[i].measure}</span>
      </li>
    )
  }

  return ingredients
}

const DrinkPage = () => {
  const [drink, setDrink] = useState<Drink | undefined>(undefined)
  const params = useParams()
  console.log(params)
  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setDrink(data.drinks[0])
      })
  }, [params.id])

  const ingredients = getIngredients(drink)
  console.table(drink)
  return (
    <div className="bigCardsContainer">
      <div>
        <img src={drink?.strDrinkThumb} alt="" />
      </div>
      <div className="bigCardInfo">
        <h1>
          {drink?.strDrink}
          <span>{drink?.strAlcoholic}</span>
        </h1>
        <p className="dim-info">Serve: {drink?.strGlass}</p>
        <p className="dim-info">Category: {drink?.strCategory}</p>
        <ul>{ingredients}</ul>
        <h3>Instructions</h3>
        <p>{drink?.strInstructions}</p>
      </div>
    </div>
  )
}

export default DrinkPage
