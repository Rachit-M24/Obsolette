import React from "react";
import "../styles/SearchCard.css";

const searchCard = ({ title, image, tags, category, id }) => {
  return (
    <>
      <div className="card-main m-0  " key={id}>
        <a href="" className="secondary_container ">
          <div className="card  ">
            <img className="foodImg" src={image} />
            <div className="textBox">
              <p className="text head">{title}</p>
              <span>{tags}</span>
              <p className="text price">{category}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default searchCard;
