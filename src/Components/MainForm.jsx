import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmiTable from "./EmiTable";

const MainForm = () => {
  const [amount, setAmount] = useState();
  const [rate, setRate] = useState();
  const [year, setYear] = useState();

  const navigate = useNavigate();
  //   const Calculate = (e) => {
  //     setAmount(e.target.value);
  // setIntrest(e.target.value);

  // setTerm(e.target.value);
  //   };
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
      <div className="py-20 px-40 w-250">
        <span className="text-4xl font-medium">Loan Calculator DashBoard</span>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-x-10 gap-y-5">
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
                className="absolute left-0 -top-7 m-4 px-1 text-sm bg-white text-blue-500 
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
                className="absolute left-0 -top-7 m-4 px-1 text-sm bg-white text-blue-500 
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
                className="absolute left-0 -top-7 m-4 px-1 text-sm bg-white text-blue-500 
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
              className="bg-blue-500 p-2  w-1/2 text-white rounded "
              type="submit"
            >
              CALCULATE
            </button>
          </div>
        </form>
        <br />
        <Routes>
          {/* <Route path="/" element={<MainForm />} /> */}
          <Route path="/emiTable" element={<EmiTable />} />
        </Routes>
      </div>
    </>
  );
};

export default MainForm;
