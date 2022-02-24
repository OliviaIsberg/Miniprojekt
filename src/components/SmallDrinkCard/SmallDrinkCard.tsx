import './SmallDrinkCard.css'

interface Props {
  imageUrl: string
  title: string
}

const SmallDrinkCard = (props: Props) => {
  return (
    <div className="container">
      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>
      <button>see recipe</button>
    </div>
  )
}

export default SmallDrinkCard
