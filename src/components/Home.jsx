import React, { useEffect, useState } from "react";
import SearchCard from "./searchCard";

const Home = () => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const submitHandeler = (e) => {
    e.preventDefault();
    setQuery(input) === null ? setError(error) : setQuery(input); //if the query is null than the user will not get any recipe.
    setInput(""); // Reset input state
  };

  const searchedRecpipe = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.meals == null) {
        setError("No meals found");
        setCard([]);
      } else {
        setCard(data.meals);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    searchedRecpipe();
  }, [query, url]);

  return (
    <>
      <div className="main min-h-[80%] w-full bg-gray-200">
        <div className="h-[60%] flex flex-col justify-center items-center text-2xl bg-slate-30">
          <h1 className="font-bold  text-3xl p-4 text-black">
            Find the Recipe of your choice
          </h1>
          <form onSubmit={submitHandeler}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="search"
              value={input}
              className="search-bar h-[40px] w-[340px] rounded-[50px] px-4 bg-white border-2 border-black outline-none"
            />
          </form>
          {error && <p className="text-black text-2xl font-bold">{error}</p>}
        </div>
        <div className="card-section mt-6 flex-wrap gap-y-4 flex">
          {!query ? (
            <p className="text-black text-2xl font-bold">
              Try to search some reciepe
            </p>
          ) : (
            card.map((e, index) => {
              return (
                <SearchCard
                  key={index}
                  id={e.strMeal}
                  title={e.strMeal}
                  image={e.strMealThumb}
                  category={e.strCategory}
                  tags={e.strTags}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
