import React from "react";
import { useLocation } from "react-router-dom";

const EmiTable = () => {
    const {state} = useLocation();

    const {amount,rate,year} = state || {};
    const p = Number(amount);
    const r = Number(rate)/100/12;
    const n = Number(year)*12;

    const emi = (p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

  return (
   
    <>
      <div className="container space-y-3">
        <div>
          <span className="text-2xl">Monthly EMI: ${emi.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
        <div>
          <select name="" id="" className="p-3 border rounded border-gray-500 outline-blue-500">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">INR</option>
            <option value="">GBP</option>
            <option value="">JPY</option>
            <option value="">AUD</option>
            <option value="">CAD</option>
          </select>
          <span>Converted EMI:</span>
          </div>
          <div>
            <button>RESET TABLE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiTable;
