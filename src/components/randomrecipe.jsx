import React, { useEffect, useRef, useState } from "react";
import book from "../assets/book.png";
import youtube from "../assets/youTube.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const randomrecipe = () => {
  const faded = useRef();
  const [dish, setDish] = useState([]);

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const fetchdish = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.meals);
          setDish(data.meals);
        });
    } catch (err) {
      setDish((err = console.log("ERROR!!!")));
    }
  };
  useEffect(() => {
    fetchdish();
  }, []);
  useGSAP(() => {
    const el = faded.current;
    gsap.from(el, {
      x: 200,
      opacity: 0,
      delay: 2,
      duration: 1,
      scrollTrigger: {
        trigger: el,
      },
    });
  });
  return (
    <>
      <div>
        {dish.map((e) => {
          return (
            <div className="h-[100vh] w-[100%]" key={e.idMeal}>
              <h1 className="text-4xl bg-slate-400">Random Recipe</h1>
              <div className="page1 flex justify-between items-center ">
                <div className="dishImg h-[400px] w-[450px]  rounded-md">
                  <img
                    className=" w-[100%] h-[100%] mt-3 p-2 rounded-2xl"
                    src={e.strMealThumb}
                  />
                </div>
                <div className="dishInfoBox text-4xl h-[60%] w-full ">
                  <h1
                    ref={faded}
                    className="text-centerunderline font-bold underline"
                  >
                    {e.strMeal}
                  </h1>
                  <h1 className="h-[58vh]  mt-6 p-2  text-2xl overflow-x-hidden overflow-y-scroll no-scrollbar">
                    <p className="underline">Instructions</p>
                    {e.strInstructions}
                  </h1>
                  <div className="flex justify-center gap-10">
                    <button
                      // ref={faded}
                      className="btn h-12 w-12 bg-red-800 mt-8 p-2 rounded-[50%]  flex justify-center"
                    >
                      <a href={e.strYoutube} target="_blank">
                        <img src={youtube} />
                      </a>
                    </button>
                    <button
                      // ref={faded}
                      className="btn h-12 w-12 bg-green-800 mt-8 p-2 rounded-[50%]  flex justify-center"
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
