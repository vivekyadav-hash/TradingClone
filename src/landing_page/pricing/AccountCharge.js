import { useState } from "react";

export default function ChargesTable() {
  const [activeTab, setActiveTab] = useState("Equity");

  const tabs = ["Equity", "Currency", "Commodity"];

  const tableHeaders = {
    Equity: ["Equity Delivery", "Equity Intraday", "F&O - Futures", "F&O - Options"],
    Currency: ["Currency Futures", "Currency Options"],
    Commodity: ["Commodity Futures", "Commodity Options"],
  };

  const chargesData = {
    Equity: [
      {
        title: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        title: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.02% on the sell side",
          "• 0.125% of the intrinsic value on exercised options\n• 0.1% on sell side (on premium)",
        ],
      },
      {
        title: "Transaction charges",
        values: [
          "NSE: 0.00297% \nBSE: 0.00375%",
          "NSE: 0.00297% \nBSE: 0.00375%",
          "NSE: 0.00173% \nBSE: 0",
          "NSE: 0.03503% (on premium) \nBSE: 0.0325% (on premium)",
        ],
      },
      {
        title: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
    ],

   
    Currency: [
      {
        title: "Brokerage",
        values: [
          "0.03% or Rs. 20/executed order whichever is lower", 
          "Flat Rs. 20 per executed order", 
        ],
      },
      {
        title: "STT/CTT",
        values: ["-", "-"],
      },
      {
        title: "Transaction charges",
        values: [
          "NSE: 0.00221%", 
          "NSE: 0.053% (on premium)", 
        ],
      },
      {
        title: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
    ],


    Commodity: [
      {
        title: "Brokerage",
        values: [
          "0.03% or Rs. 20/executed order whichever is lower", 
          "Flat Rs. 20 per executed order", 
        ],
      },
      {
        title: "STT/CTT",
        values: [
          "0.01% on sell side (non-agri)", 
          "0.05% on sell side (on premium)", 
        ],
      },
      {
        title: "Transaction charges",
        values: [
          "Agri: 0.0021% | Non-Agri: 0.0036%", 
          "0.05% (on premium)", 
        ],
      },
      {
        title: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
    ],
  };

  return (
    <div className="container">
      <div style={{ marginBottom: 24 }}>
        {tabs.map((t) => (
          <a
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-5 cursor-pointer ${
              activeTab === t
                ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                : "text-gray-500"
            }`}
            style={{ textDecoration: "none", fontSize: 24, padding: "6px 15px" }}
          >
            {t}
          </a>
        ))}
        <hr />
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm">
          <thead>
            <tr>
           
              <th className="border px-4 py-2" />
              {tableHeaders[activeTab].map((header, idx) => (
                <th key={idx} className="border px-4 py-2 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {chargesData[activeTab]?.map((row, idx) => (
              <tr key={idx} className="even:bg-gray-50">
               
                <th scope="row" className="border px-4 py-2 text-left font-medium align-top">
                  {row.title}
                </th>

                
                {row.values.map((val, i) => (
                  <td key={i} className="border px-4 py-2 align-top text-center whitespace-pre-line">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
