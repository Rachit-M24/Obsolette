import React, { useEffect, useState } from "react";
import "../styles/Categories.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  useGSAP(() => {
    gsap.to("#animBox h1", {
      transform: "translateX(-140%)",
      scrollTrigger: {
        trigger: "#animBox",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 3,
        pin: true,
      },
    });
  });

  const [field, setField] = useState([]);
  const categoryListUrl =
    "https://www.themealdb.com/api/json/v1/1/categories.php";

  const fetchCategory = async () => {
    try {
      await fetch(categoryListUrl)
        .then((res) => res.json())
        .then((data) => {
          setField(data.categories);
          // console.log(data.categories);
        });
    } catch (err) {
      console.log((err = "ERROR IN CATEGORIES!"));
    }
  };

  const [isFixedVisible, setIsFixedVisible] = useState(false);
  useEffect(() => {
    fetchCategory();
  }, []);

  const handleMouseEnter = () => {
    setIsFixedVisible(true);
  };

  const handleMouseLeave = () => {
    setIsFixedVisible(false);
  };

  const fixedImage = () => {
    var elems = document.querySelectorAll(".names");
    const fixed = document.querySelector(".field-card");
    elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
      });
    });
  };
  const category_food = () => {
    const category = document.querySelectorAll(".foodName");
    for (let e = 0; e < myarr.length; e++) {
      if (myarr[e] === category) {
        category.forEach(function (food) {
          food.addEventListener("click", function (e) {
            var name = e.target.value;
            console.log(name);
          });
        });
      }
    }
    console.log(category);
  };

  return (
    <>
      <div id="hero" className=" ">
        <div className="part1">
          <div id="animBox" className=" h-[100%] w-[100%] overflow-x-hidden">
            <h1 className=" text-[37vw] font-extrabold flex items-center ">
              CATEGORIES
            </h1>
          </div>

          <div className="part2 bg-slate-600 h-[100%] w-[100%]  mb-10">
            {field.map((e) => {
              // console.log(e.strCategory);

              return (
                <div key={e.idCategory} className=" flex flex-col ">
                  <div className="category-card inline-block">
                    <div
                      className="field-card"
                      style={{
                        display: isFixedVisible ? "block" : "none",
                      }}
                    ></div>
                  </div>
                  <div
                    className="elem-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      onMouseEnter={fixedImage}
                      data-image={e.strCategoryThumb}
                      className="names w-[100%] border-black border-b-2 "
                    >
                      <h1
                        onClick={category_food}
                        data-categories={e.strCategory}
                        className="foodName  text-4xl font-bold p-2"
                      >
                        {e.strCategory}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
