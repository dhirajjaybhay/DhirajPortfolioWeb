import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
const [ isOpen, setIsOpen] = useState(false);

  const scrollViewInit = (id) => {
    let targetElement = document.querySelector(`#${id}`);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };


  const toggleChange = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed w-full z-20 top-0 start-0" id="navbar">
      <nav className="">
        <div className="max-w-screen-xl flex relative items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                fill="white"
              />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dhiraj Jaybhay
            </span>
          </div>

          <div className="hidden w-full md:block md:w-auto cursor-pointer">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-600">
              <li>
                <div
                  onClick={() => {
                    scrollViewInit("home");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Home</span>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    scrollViewInit("skills");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Skills</span>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    scrollViewInit("projects");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Project</span>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    scrollViewInit("experience");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Experience</span>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    scrollViewInit("contact");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Contact</span>
                </div>
              </li>
            </ul>
          </div>
          { isOpen? (<div className="md:hidden absolute top-12 right-1 w-full md:w-auto cursor-pointer">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:bg-transparent  md:mt-0 md:border-0 bg-gray-600">
              <li  onClick={toggleChange}>
                <div
                  onClick={() => {
                    scrollViewInit("home");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Home</span>
                </div>
              </li>
              <li  onClick={toggleChange}>
                <div
                  onClick={() => {
                    scrollViewInit("skills");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Skills</span>
                </div>
              </li>
              <li  onClick={toggleChange}>
                <div
                  onClick={() => {
                    scrollViewInit("projects");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Project</span>
                </div>
              </li>
              <li  onClick={toggleChange}>
                <div
                  onClick={() => {
                    scrollViewInit("experience");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Experience</span>
                </div>
              </li>
              <li  onClick={toggleChange}> 
                <div
                
                  onClick={() => {
                    scrollViewInit("contact");
                  }}
                  className="block py-2 px-3 md:p-0 text-white md:text-white"
                >
                  <span className="text-purple-500 pr-1">#</span>
                  <span className="home">Contact</span>
                </div>
              </li>
            </ul>
          </div>): ""}


          <div className="md:hidden">
            <FaBars onClick={toggleChange} className="text-3xl text-gray-700" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
