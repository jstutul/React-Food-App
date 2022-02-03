import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleFood = (props) => {
  let { id } = useParams();

  const [foodItem, setFoodItem] = useState([]);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoodItem(data.meals[0]));
  }, [url]);

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = foodItem;
  return (
    <div className="container">
      <h1>Food Details Page</h1>
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <img src={strMealThumb} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8">
          <h3>Food Name : {strMeal}</h3>
          <h4>Type :{strCategory}</h4>
          <div className="my-2 p-2">
            <p>{strInstructions}</p>
          </div>
          <div>
            <h5>Ingredient</h5>
            <ul>
              <li>{strIngredient1}</li>
              <li>{strIngredient2}</li>
              <li>{strIngredient3}</li>
              <li>{strIngredient4}</li>
              <li>{strIngredient5}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
