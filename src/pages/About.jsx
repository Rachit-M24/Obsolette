import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-center p-8 ">
        <div className="bg-white  shadow-lg rounded-lg max-w-4xl w-full ">
          <h1 className="text-4xl font-bold text-gray-800 text-center m-2">
            About Us
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to Delicious Recipes! Our mission is to bring you the best
            recipes from around the world, made with love and passion. Whether
            you're a seasoned chef or a home cook, you'll find something new and
            exciting to try.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-700 m-2">
                Our Story
              </h2>
              <p className="text-gray-600">
                Founded in 2021, Delicious Recipes started as a small blog
                sharing family recipes. Today, we have grown into a community of
                food lovers who share and enjoy the best culinary creations from
                around the globe. Our goal is to inspire and make cooking fun
                and accessible for everyone.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-700 m-2">
                Our Team
              </h2>
              <p className="text-gray-600">
                Our team is made up of professional chefs, food photographers,
                and passionate home cooks. We work together to create content
                that is both delicious and visually appealing, ensuring that
                every recipe you find here is tried, tested, and loved.
              </p>
            </div>
          </div>
          <div className=" text-center p-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              Join Our Community
            </h2>
            <p className="text-gray-600 m-2">
              We love to hear from our readers! Share your cooking experiences,
              ask questions, and connect with us on social media. Let's create a
              community where everyone can enjoy and share their love for food.
            </p>
            <a
              href="/contact"
              className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
