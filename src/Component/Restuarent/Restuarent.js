import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Restuarent = () => {
  const [searchText, setSearchText] = useState("");
  const [food, setFood] = useState([]);

  const searchHandle = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    console.log(searchTextValue);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, [searchText]);
  return (
    <div className="container">
      <h1 className="text-center text-warning my-4">JS Food App</h1>
      <div className="mb-3">
        <input
          type="email"
          onChange={searchHandle}
          className="form-control"
          placeholder="Seach Food"
        />
      </div>
      <h3 className="text-success my-2">
        Total Food Item : {food ? food.length : 0}
      </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {food.map((item) => (
          <Food item={item} key={item.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Restuarent;
