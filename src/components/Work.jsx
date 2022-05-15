import React from "react";
import ww3game from "../assets/ww3game.jpg";
import bst from "../assets/bst.png";
import sorting from "../assets/sorting.png";
import graphPlotter from "../assets/graphPlotter.jpg";
import routine from "../assets/routine.jpg";
import eqnRecognizer from "../assets/eqnRecognizer.jpg";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my Semester work</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card container */}

          <div
            style={{ backgroundImage: `url(${ww3game})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-while tracking-wider">
                WW3 Game C++ application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suyog-Dhakal/world-war-3-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${bst})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-while tracking-wider">
                bst visualizer C++ application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suyog-Dhakal/BST-visualizer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${sorting})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-while tracking-wider">
                sorting visualizer C++ application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suyog-Dhakal/Sorting-Visualizer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${graphPlotter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-while tracking-wider">
                3D Graph Plotter JavaScript application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suyog-Dhakal/3D-GraphPlotter">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${routine})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-while tracking-wider">
                Routine Management Reactjs application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suyog-Dhakal/BERoutineManagement-FrontEnd">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${eqnRecognizer})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-while tracking-wider">
                Eqn Recognizer using CNN
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/necimye/EqnRecognizer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
