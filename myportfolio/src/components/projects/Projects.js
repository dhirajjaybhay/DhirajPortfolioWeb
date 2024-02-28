import React from "react";
import netflix from "../../assets/Netflix Clone.png";
import tictoetac from "../../assets/ticToeTac.png";
import addContactList from "../../assets/addContactList.png";
import anuband from "../../assets/anuband.png";
import quize from "../../assets/quize.png";
import todoList from "../../assets/todoList.png";

const Projects = () => {
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

      <div className="flex flex-col md:flex-row gap-10 pt-10 md:pt-20">
        <div className="border border-gray-50 w-full md:w-1/3">
          <div>
            <img src={netflix} alt="" className="h-80 w-full" />
          </div>
          <div className="border-t border-b border-gray-50 py-2 px-4">
            <p>HTML CSS JavaScript</p>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Netflix Clone</h1>
            <div className="flex gap-4 pt-5">
              <div className="">
                <button className="border-2 border-purple-400 py-1 px-4">
                  <a
                    href="https://calm-rabanadas-c2e5db.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
              <div>
                <button className="border border-gray-50 py-1 px-4">
                  <a
                    href="https://github.com/dhirajjaybhay/Netflix-clone.github.io"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-50 w-full md:w-1/3">
          <div>
            <img src={tictoetac} alt="" className="h-80 w-full" />
          </div>
          <div className="border-t border-b border-gray-50 py-2 px-4">
            <p>React</p>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Tic Toe Tac</h1>
            <div className="flex gap-4 pt-5">
              <div className="">
                <button className="border-2 border-purple-400 py-1 px-4">
                  <a
                    href="https://playful-lebkuchen-c0f891.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
              <div>
                <button className="border border-gray-50 py-1 px-4">
                  <a
                    href="https://github.com/dhirajjaybhay/TicTacToe.github.io"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-50 w-full md:w-1/3">
          <div>
            <img src={anuband} alt="" className="h-80 w-full" />
          </div>
          <div className="border-t border-b border-gray-50 py-2 px-4">
            <p>Angular</p>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Anubandh</h1>
            <div className="flex gap-4 pt-5">
              <div className="">
                <button className="border-2 border-purple-400 py-1 px-4">
                  <a
                    href="http://anubandh.ezii.live/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
            
            </div>
          </div>
        </div>
      
      </div>
      <div className="flex flex-col md:flex-row gap-10 pt-10 md:pt-20">
      <div className="border border-gray-50 w-full md:w-1/3">
          <div>
            <img src={addContactList} alt="" className="h-80 w-full" />
          </div>
          <div className="border-t border-b border-gray-50 py-2 px-4">
            <p>HTML CSS JavaScript</p>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Add Contact List</h1>
            <div className="flex gap-4 pt-5">
              <div className="">
                <button className="border-2 border-purple-400 py-1 px-4">
                  <a
                    href="https://calm-rabanadas-c2e5db.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
              <div>
                <button className="border border-gray-50 py-1 px-4">
                  <a
                    href="https://github.com/dhirajjaybhay/Netflix-clone.github.io"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-50 w-full md:w-1/3">
          <div>
            <img src={quize} alt="" className="h-80 w-full" />
          </div>
          <div className="border-t border-b border-gray-50 py-2 px-4">
            <p>HTML CSS JavaScript</p>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Quize App</h1>
            <div className="flex gap-4 pt-5">
              <div className="">
                <button className="border-2 border-purple-400 py-1 px-4">
                  <a
                    href="https://cozy-alpaca-d9f819.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
              <div>
                <button className="border border-gray-50 py-1 px-4">
                  <a
                    href="https://github.com/dhirajjaybhay/quiz-app.io"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-50 w-full md:w-1/3">
          <div>
            <img src={todoList} alt="" className="h-80 w-full" />
          </div>
          <div className="border-t border-b border-gray-50 py-2 px-4">
            <p>HTML CSS JavaScript</p>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold">Todo List</h1>
            <div className="flex gap-4 pt-5">
              <div className="">
                <button className="border-2 border-purple-400 py-1 px-4">
                  <a
                    href="https://steady-crumble-a71856.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </button>
              </div>
              <div>
                <button className="border border-gray-50 py-1 px-4">
                  <a
                    href="https://github.com/dhirajjaybhay/todo-List.io"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
