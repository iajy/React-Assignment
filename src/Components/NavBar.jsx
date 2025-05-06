import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="hidden fixed bg-blue-500 text-white md:flex justify-between items-center p-4 z-10 w-full">
          <div>
            <span className="text-2xl font-medium">Loan Calculator</span>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <button
              onClick={goToHome}
              className="bg-blue-400 px-5 py-1 rounded"
            >
              HOME
            </button>
            <span>EXCHANGE RATE(LIVE)</span>
            <span>ABOUT</span>
            <span>ERROR PAGE</span>
            <div>dark mode</div>
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
    </>
  );
};

export default NavBar;
