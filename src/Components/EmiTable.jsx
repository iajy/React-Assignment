import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableDetails from "./TableDetails";
import axios from "axios";

const EmiTable = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [rates, setRates] = useState({});

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [convertedEmi, setConvertedEmi] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const { amount, rate, year } = state || {};
  const p = Number(amount);
  const r = Number(rate) / 100 / 12;
  const n = Number(year) * 12;

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/05b7f17f319c0980dd84b05f/latest/USD"
      )
      .then((response) => {
        const data = response.data.conversion_rates;
        setRates(data);
      })
      .catch((error) => {
        console.error("Error fetching currency rates", error);
      });
  }, []);

  const handleCurrency = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);

    const conversionRate = rates[currency];
    const converted = conversionRate ? (emi * conversionRate).toFixed(2) : null;

    setConvertedAmount(conversionRate ? (p * conversionRate).toFixed(2) : null);

    setConvertedEmi(converted);
  };
  const ConvertedEmiElement = ({ convertedEmi, selectedCurrency }) => {
    return (
      <span>
        Converted EMI: {convertedEmi} {selectedCurrency}
      </span>
    );
  };

  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container space-y-3">
        <span className="text-2xl">Monthly EMI: ${emi.toFixed(2)}</span>
        <br />
        <br />
        <div className="flex justify-between">
          <div className="relative space-x-2">
            <select
              name=""
              id="selection"
              className="peer p-3 border rounded border-gray-500 outline-blue-500"
              value={selectedCurrency}
              onChange={handleCurrency}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
            </select>
            <label
              htmlFor="selection"
              className="absolute left-2 -top-3 text-sm mx-1 bg-white dark:bg-gray-950
             peer-focus:text-blue-500
             peer-focus:border-blue-500"
            >
              Currency
            </label>
            {convertedEmi && (
              <ConvertedEmiElement
                convertedEmi={convertedEmi}
                selectedCurrency={selectedCurrency}
              />
            )}
          </div>
          <div>
            <button
              onClick={goBackToHome}
              className="border rounded border-pink-500 p-4"
            >
              RESET TABLE
            </button>
          </div>
        </div>
        <div>
          <span className="text-2xl">
            Amortization Schedule({selectedCurrency})
          </span>
        </div>
      </div>
      <TableDetails
        convertedEmi={convertedEmi ? convertedEmi : emi.toFixed(2)}
        amount={convertedEmi ? convertedAmount : p}
        selectedCurrency={selectedCurrency}
        intrest={rate}
        month={n}
      />
    </>
  );
};

export default EmiTable;
