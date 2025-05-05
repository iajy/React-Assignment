import React from "react";

function MainForm() {
  return (
    <>
      <div className="py-20 px-40 w-250">
        <div>
          <span className="text-4xl font-medium">
            Loan Calculator DashBoard
          </span>
          <br />
          <br />
          <div className="grid grid-cols-3 gap-x-10 gap-y-5">
            <div className="relative">
              <input
                id="Amount"
                type="text"
                className=" peer border rounded p-4 outline-blue-500 placeholder-transparent"
                placeholder="Loan Amount"
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
                id="intrest"
                type="text"
                className="peer border rounded p-4 outline-blue-500 placeholder-transparent"
                placeholder="Intrest Rate(%)"
              />
              <label
                htmlFor="intrest"
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
                id="term"
                type="text"
                className="peer border rounded p-4  outline-blue-500 placeholder-transparent"
                placeholder="Term(Years)"
              />
              <label
                htmlFor="term"
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
            <button className="bg-blue-500 p-2  w-1/2 text-white rounded ">
              CALCULATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainForm;
