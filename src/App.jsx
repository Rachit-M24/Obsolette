import React, { useEffect } from "react";
import "./App.css";
import Intro from "./components/intro";
import Random from "./components/randomrecipe";
import Catrgory from "./components/Categories";
import Nav from "../src/components/nav";
import SearchCard from "./components/searchCard";
import { Circ, Expo, Power3, gsap } from "gsap";

const App = () => {
  const reveal = () => {
    document.querySelectorAll(".reveal").forEach((e) => {
      let parent = document.createElement("span");
      let child = document.createElement("span");

      parent.classList.add("parent");
      child.classList.add("child");

      child.innerHTML = e.innerHTML;
      parent.appendChild(child);

      e.innerHTML = "";
      e.appendChild(parent);
    });
  };
  // useGSAP(() => {

  // });
  useEffect(() => {
    reveal();
    var tl = gsap.timeline();
    tl.from(".child span", {
      x: "100%",
      delay: 0.9,
      stagger: 0.2,
      duration: 1,
      ease: Power3.easeInOut,
    })
      .to(".parent .child", {
        y: "-100%",
        duration: 1,
        delay: 0.5,
        ease: Circ.easeInOut,
      })
      .to("#loader", {
        height: 0,
        delay: 0.2,
        ease: Expo.easeInOut,
      });
  }, []);

  return (
    <>
      <div id="loader" onChange={reveal}>
        <h1 className="reveal">
          <span>Your Simple</span> <span> and</span>
          <span>Old Recipe Web </span>
        </h1>
      </div>
      <div className="Main min-h-[100vh]  bg-gray-300">
        <Nav />
        <Intro />
        <Catrgory />
        <Random />
      </div>
    </>
  );
};

export default App;
