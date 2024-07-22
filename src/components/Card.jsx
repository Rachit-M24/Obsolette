import React, { useState, useEffect } from "react";
import "../styles/Card.css";

// { img, name, Category, tag }
const Card = () => {
  let [card, setCard] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=s";
  const fetchRecipe = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCard(data.meals);
        });
    } catch (err) {
      setCard((err = console.log("ERROR!")));
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);
  return (
    <>
      <div className="card-main m-0 ">
        {card.map((e) => {
          return (
            <a href="" className="secondary_container " key={e.strMeal}>
              <div className="card  ">
                <img className="foodImg" src={e.strMealThumb} />
                <div className="textBox">
                  <p className="text head">{e.strMeal}</p>
                  <span>{e.strTags}</span>
                  <p className="text price">{e.strCategory}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Card;
