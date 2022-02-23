import { useEffect, useState } from 'react'
import './BoozeCard.css'

interface Props {
  title: string
}

const BoozeCard = (props: Props) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${props.title}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setImageUrl(data.drinks[0].strDrinkThumb)
      })
  }, [])

  return (
    <div className="container" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h2 className="card-title">{props.title}</h2>
    </div>
  )
}

export default BoozeCard
