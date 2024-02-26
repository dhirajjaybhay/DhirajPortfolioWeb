import React from "react";
import dhirajImg from "../../assets/dhiraj.png";

const Home = () => {
  return (
    <div className="pt-16 md:pt-20 xl:pt-32 max-w-screen-xl">
      <div className="flex flex-col md:flex-row pt-20">
        <div className="w-full md:w-2/4 sm:pr-20 md:pr-0">
          <p className="text-5xl font-bold pt-4">
            Dhiraj is a{" "}
            <span className="text-purple-400">Front-end Web Developer</span>
          </p>
          <p className="pt-10 text-xl">
            Development is my passion, my purpose. I thrive on learning and
            pushing boundaries in IT. Excellence is my goal.
          </p>
          <div className="pt-8 md:pt-10 xl:pt-16">
            <button className="py-4 px-4 border-2 border-purple-400 text-xl">
              Contact Me !!
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/4">
          <img src={dhirajImg} alt="" className="w-full h-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
