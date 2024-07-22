import React, { useEffect, useState } from "react";
import SearchCard from "./searchCard";
import BG from "../assets/Foodbg.jpg";

const intro = () => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("Dal fry");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const submitHandeler = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  const searchedRecpipe = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setCard(data.meals));
    } catch (error) {
      console.log((error = "ERROR!"));
    }
  };
  useEffect(() => {
    searchedRecpipe();
  }, [query]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          background: `url(${BG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="main   w-[100%] h-[100vh] overflow-y-scroll"
      >
        <div className="h-[50%] flex flex-col justify-center items-center text-2xl  bg-slate-30 ">
          <h1 className=" font-bold text-3xl ">
            Find the Recipe of your choice
          </h1>
          <form onSubmit={submitHandeler}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="search"
              value={input}
              className="search-bar h-[40px] w-[40vw] rounded-[50px] pl-4 pr-4 "
            />
          </form>
        </div>
        <div className="card-section flex flex-wrap mb-10 ">
          {card.map((e) => {
            return (
              <SearchCard
                id={e.strMeal}
                title={e.strMeal}
                image={e.strMealThumb}
                category={e.strCategory}
                tags={e.strTags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default intro;
