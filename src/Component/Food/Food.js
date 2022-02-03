import React from "react";
import { Link } from "react-router-dom";

const Food = (props) => {
  const { idMeal, strInstructions, strMealThumb, strMeal, strCategory } =
    props.item;
  const url = `/food/${idMeal}`;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <span className="badge rounded-pill bg-primary p-2">
            {strCategory}
          </span>
          <p className="card-text">{strInstructions.slice(0, 150)}..........</p>
        </div>

        <div className="my-2 px-3">
          <Link className="btn btn-primary btn-sm" to={url}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
