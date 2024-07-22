import React, { useEffect, useState } from "react";

const Category_food = ({ categories }) => {
  let [card, setCard] = useState([]);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=SeaFood`;
  const fetchCategoryFood = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.meals);
          console.log(categories);
        });
    } catch (err) {
      setCard((err = console.log("ERROR!")));
    }
  };
  useEffect(() => {
    fetchCategoryFood();
  }, []);
  return (
    <div>
      <div className="card-main m-0 ">
        {card.map((e) => {
          return (
            <a href="" className="secondary_container " key={e.idMeal}>
              <div className="card  ">
                <img className="foodImg" src={e.strMealThumb} />
                <div className="textBox">
                  <p className="text head">{e.strMeal}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Category_food;
