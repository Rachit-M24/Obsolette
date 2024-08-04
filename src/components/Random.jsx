import React, { useEffect, useRef, useState } from "react";
import youtube from "../assets/youtube.png";
import book from "../assets/book.png";

const randomrecipe = () => {
  const faded = useRef();
  const [dish, setDish] = useState([]);

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const fetchdish = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDish(data.meals);
        });
    } catch (err) {
      setDish((err = console.log("ERROR!!!")));
    }
  };
  useEffect(() => {
    fetchdish();
  }, []);

  return (
    <>
      <div>
        {dish.map((e) => {
          return (
            <div
              className="h-[50%] w-screen p-5 bg-gray-100 flex   justify-center items-center"
              key={e.idMeal}
            >
              <div className="page1 flex justify-between items-center flex-wrap">
                <div className="dishImg h-[300px] w-[350px]  rounded-md">
                  <img
                    className=" w-[100%] h-[100%] mt-3 p-2 rounded-2xl"
                    src={e.strMealThumb}
                  />
                </div>
                <div className="dishInfoBox text-4xl h-[60%] w-full ">
                  <h1
                    className="text-centerunderline p-3 font-bold underline"
                  >
                    {e.strMeal}
                  </h1>
                  <h1 className="h-[58vh] w-fit  mt-4 p-2  text-2xl overflow-x-hidden overflow-y-scroll no-scrollbar">
                    <p className="underline font-bold">Instructions</p>
                    {e.strInstructions}
                  </h1>
                  <div className="flex justify-center gap-5 mt-">
                    <button
                      className="btn h-16 w-16  mt-4 p-2   flex justify-center items-center"
                    >
                      <a href={e.strYoutube} target="_blank">
                        <img className="rounded-md" src={youtube} />
                      </a>
                    </button>
                    <button
                      className="btn h-12  w-12 bg-green-800 mt-6 p-2 rounded-[50%]  flex justify-center"
                    >
                      <a href={e.strSource} target="_blank">
                        <img src={book} />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default randomrecipe;
