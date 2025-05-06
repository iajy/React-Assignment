import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import MainForm from "./MainForm";

const NavBar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    setIsToggled(!isToggled);
    
  };

  const [darkMode,setDarkMode] =useState(false);
  
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="hidden fixed bg-blue-500 dark:bg-gray-900 text-white md:flex justify-between items-center p-4 z-10 w-full">
          <div>
            <span className="text-2xl font-medium">Loan Calculator</span>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <button
              onClick={goToHome}
              className="bg-blue-400 dark:bg-gray-700 px-5 py-1 rounded"
            >
              HOME
            </button>
            <button>EXCHANGE RATE(LIVE)</button>
            <button>ABOUT</button>
            <button>ERROR PAGE</button>
            <button
              onClick={handleToggle}
              className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ${
                isToggled ? "bg-blue-500" : ""
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                  isToggled ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div className="continer ">
          <div className="fixed flex justify-between items-center md:hidden bg-blue-500 text-white h-30 p-4 w-full">
            <div></div>
            <div>
              <span className="text-4xl font-medium">Loan Calculator</span>
            </div>
            <div className="text-4xl">darkmode</div>
          </div>
        </div>
      </div>
      <MainForm darkMode={darkMode}/>
    </>
  );
};

export default NavBar;
