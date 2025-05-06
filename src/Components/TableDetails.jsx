import React from "react";

const TableDetails = ({
  convertedEmi,
  amount,
  selectedCurrency,
  intrest,
  month,
}) => {
  const rows = [];
  let balance = amount;

  for (let i = 1; i <= month; i++) {
    console.log(i);

    const intrestPerMonth = (intrest / 100 / 12) * balance;
    const principal = convertedEmi - intrestPerMonth;
    balance = balance - convertedEmi + intrestPerMonth;

    rows.push({
      month: i,
      principal: principal,
      intrest: intrestPerMonth,
      balance: balance,
    });
  }

  return (
    <div className="py-10 w-auto">
      <table border="1" align="center" width={1200} className="dark:bg-gray-900 h-20">
        <thead className="table-auto">
          <tr className="border-b border-gray-300">
            <td className="px-5">Month</td>
            <td>Principal</td>
            <td>Intrest</td>
            <td>Remaining Balance </td>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-auto h-100 ">
        <table width={1200}>
          <tbody className="">
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-gray-300 h-15">
                <td className="px-10">{row.month}</td>
                <td>
                  {row.principal.toFixed(2)} {selectedCurrency}
                </td>
                <td>
                  {row.intrest.toFixed(2)} {selectedCurrency}
                </td>
                <td>
                  {row.balance.toFixed(2)} {selectedCurrency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDetails;
