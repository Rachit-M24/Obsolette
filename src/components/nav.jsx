import React from "react";
import "../styles/nav.css";

const nav = () => {
  return (
    <div>
      <div className="navbar fixed z-30 ">
        <div className="navElem">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>LogIn</li>
          </a>
          <a href="">
            <li>SignUp</li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default nav;
