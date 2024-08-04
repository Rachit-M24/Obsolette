import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../styles/Categories.css";
gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  const [field, setField] = useState([]);
  const [isFixedVisible, setIsFixedVisible] = useState(false);

  useGSAP(() => {
    gsap.to(".part1 #animBox h1", {
      x: "-140%",
      scrollTrigger: {
        trigger: ".part1 #animBox h1",
        scroller: "body",
        start: "top top",
        end: "top -140%",
        scrub: 3,
        pin: true,
      },
    });
  });

  const categoryListUrl =
    "https://www.themealdb.com/api/json/v1/1/categories.php";

  const fetchCategory = async () => {
    try {
      await fetch(categoryListUrl)
        .then((res) => res.json())
        .then((data) => {
          setField(data.categories);
        });
    } catch (err) {
      console.log((err = "ERROR IN CATEGORIES!"));
    }
  };

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
    for (let e = 0; e < category.length; e++) {
      category[e].addEventListener("click", function (e) {
        var name = e.target.innerText;
        console.log(name);
      });
    }
    console.log(category);
  };

  return (
  <div id="hero" className="h-auto w-auto ">
      <div className="part1  bg-green-700 text-white">
        <div id="animBox" className=" tracking-tighter w-full overflow-x-hidden">
          <h1 className="text-[37vw] font-extrabold flex items-center ">
            CATEGORIES
          </h1>
        </div><br />
        <div className="part2 text-black bg-white min-h-screen w-full mb-10">
          {field.map((e) => (
            <div key={e.idCategory} className="flex flex-col">
              <div className="category-card inline-block">
                <div
                  className="field-card bg-cover bg-center h-64 w-64"
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
                  className="names w-full border-black border-b-2 p-4 cursor-pointer"
                >
                  <h1
                    onClick={category_food}
                    data-categories={e.strCategory}
                    className="foodName text-4xl font-bold"
                  >
                    {e.strCategory}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
