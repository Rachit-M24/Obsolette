import React from "react";
import "../styles/SearchCard.css";

const searchCard = ({ title, image, tags, category, id }) => {
  return (
    <>
      <div className="card-main " key={id}>
        <a href="" className="secondary_container ">
          <div className="card">
            <img className="foodImg" src={image} />
            <div className="textBox">
              <p className="texthead">{title}</p>
              <span>{tags}</span>
              <p className="textprice">{category}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default searchCard;
