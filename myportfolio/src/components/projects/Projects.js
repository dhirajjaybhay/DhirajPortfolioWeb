import React, { useState } from "react";
import data from "../Data";
// import meri from '/Img/dhiraj.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20" id="projects">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex">
          <h1 className="text-4xl font-bold">
            <span className="text-purple-400 pr-1">#</span>
            <span className="home">Projects</span>
          </h1>
          <div className="pt-5 ml-2">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="4"
              viewBox="0 0 239 2"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239 1.5H0V0.5H239V1.5Z"
                fill="#C778DD"
              />
            </svg>
          </div>
        </div>
      </div>
    
      <div className="flex justify-center gap-6 pt-10">
        <button
          className={`border border-gray-50 py-2 px-4 rounded-md ${
            selectedCategory === "All" ? "bg-red-500" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`border border-gray-50 py-2 px-4 rounded-md ${
            selectedCategory === "Website" ? "bg-red-500" : ""
          }`}
          onClick={() => setSelectedCategory("Website")}
        >
          Website
        </button>
        <button
          className={`border border-gray-50 py-2 px-4 rounded-md ${
            selectedCategory === "App" ? "bg-red-500" : ""
          }`}
          onClick={() => setSelectedCategory("App")}
        >
          App
        </button>
      </div>
      <div className="flex justify-evenly flex-col md:flex-row gap-14 pt-10 md:pt-14 flex-wrap">
        {filteredData.map((item) => (
          <>
            <div key={item.id} className="border border-gray-50 w-full md:w-1/4">
              <div>
                <img src={item.img} alt="" className="h-80 w-full" />
              </div>
              <div className="border-t border-b border-gray-50 py-2 px-4">
                <p>{item.languages}</p>
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <div className="flex gap-4 pt-5">
                  <div className="">
                    <button className="border-2 border-purple-400 py-1 px-4">
                      <a href={item.liveLink} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className="border border-gray-50 py-1 px-4">
                      <a href={item.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
