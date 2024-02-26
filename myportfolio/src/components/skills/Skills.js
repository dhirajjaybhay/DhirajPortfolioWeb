import React from "react";
import skills from "../../assets/skills.svg";
const Skills = () => {
  return (
    <div className="pt-20">
      <div className="flex">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-400 pr-1">#</span>
          <span className="home">Skills</span>
        </h1>
        <div className="pt-5 ml-2">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="200"
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
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5  pt-12">
          <img src={skills} alt="" className="" />
        </div>
        <div className="w-full md:w-3/5 flex justify-between pt-10 text-md">
          <div className="md:w-1/4 ">
            <div className="border">
              <p className=" p-3">HTML</p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="border">
              <p className="p-3">CSS</p>
            </div>
            <div className="border mt-10">
              <p className="p-3">Tailwind css</p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="border">
              <p className="p-3">JavaScript</p>
            </div>
            <div className="border mt-10">
              <p className="p-3">Bootstrap</p>
            </div>
            <div className="border mt-10">
              <p className="p-3">React.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
