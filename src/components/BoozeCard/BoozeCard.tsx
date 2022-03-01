import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoozeCard.css";

interface Props {
  booze: string;
  title: string;
}

const BoozeCard = (props: Props) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${props.title}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setImageUrl(data.drinks[0].strDrinkThumb);
      });
  }, [props.title]);

  return (
    <Link to={`/alcohol/${props.booze}`}>
      <div
        className="booze-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h2 className="card-title">{props.title}</h2>
      </div>
    </Link>
  );
};

export default BoozeCard;
