import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmiTable from "./EmiTable";

const MainForm = ({darkMode}) => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [year, setYear] = useState(5);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/emiTable", {
      state: {
        amount,
        rate,
        year,
      },
    });
  };

  return (
    <>
    <div className={`${darkMode && "dark"}`}>
      <div className="container py-20 px-40 h-full dark:text-white dark:bg-gray-950">
        <span className="text-4xl font-medium ">Loan Calculator DashBoard</span>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-x-10 gap-y-5 w-2xl">
            <div className="relative">
              <input
                id="Amount"
                value={amount}
                type="text"
                className=" peer border rounded p-4 outline-blue-500 placeholder-transparent"
                placeholder="Loan Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
              <label
                htmlFor="Amount"
                className="absolute left-0 -top-7 m-4 px-1 text-sm bg-white dark:bg-gray-950 text-blue-500 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:top-0 
                peer-placeholder-shown:text-gray-400 
                peer-focus:-top-7 
                peer-focus:text-sm
                peer-focus:text-blue-500
                transition-all"
              >
                Loan Amount
              </label>
            </div>

            <div className="relative">
              <input
                id="Intrest"
                value={rate}
                type="text"
                className="peer border rounded p-4 outline-blue-500 placeholder-transparent"
                placeholder="Intrest Rate(%)"
                onChange={(e) => setRate(e.target.value)}
              />
              <label
                htmlFor="Intrest"
                className="absolute left-0 -top-7 m-4 px-1 text-sm bg-white dark:bg-gray-950 text-blue-500 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:top-0 
                peer-placeholder-shown:text-gray-400 
                peer-focus:-top-7 
                peer-focus:text-sm
                peer-focus:text-blue-500
                transition-all"
              >
                Intrest Rate(%)
              </label>
            </div>
            <div className="relative">
              <input
                id="Term"
                value={year}
                type="text"
                className="peer border rounded p-4  outline-blue-500 placeholder-transparent"
                placeholder="Term(Years)"
                onChange={(e) => setYear(e.target.value)}
              />
              <label
                htmlFor="Term"
                className="absolute left-0 -top-7 m-4 px-1 text-sm bg-white dark:bg-gray-950 text-blue-500 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:top-0 
                peer-placeholder-shown:text-gray-400 
                peer-focus:-top-7 
                peer-focus:text-sm
                peer-focus:text-blue-500
                transition-all"
              >
                Term (Years)
              </label>
            </div>
            <button
              className="bg-blue-500 p-2  w-1/2 text-white rounded dark:bg-blue-300 "
              type="submit"
            >
              CALCULATE
            </button>
          </div>
        </form>
        <Routes>
          <Route path="/emiTable" element={<EmiTable />} />
        </Routes>

      </div>
      </div>
    </>
  );
};

export default MainForm;
