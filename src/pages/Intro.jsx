import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Obsolette
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Discover and share everyday cooking inspiration on our recipe website.
      </p>
      <Link
        to="/home"
        className="bg-green-700  text-white py-2 px-4 rounded-full hover:bg-green-800 transition duration-300"
      >
        Explore Obsolette
      </Link>
    </div>
  );
};

export default Intro;
