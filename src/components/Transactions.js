// DEPENDENCIES
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";

// COMPONENTS
import Transaction from "./Transaction";
import BarChart from "./BarChart";
const API = process.env.REACT_APP_API_URL;

export default function Transactions({ chartData }) {
  console.log(API);

  const [transactions, setTransactions] = useState([]);
  //! THIS IS NOT WORKING YET
  // const [chartData, setChartData] = useState({
  //   labels: transactions.map((data) => {
  //     console.log(data.date);
  //     return data.date;
  //   }),
  //   datasets: [
  //     {
  //       label: "Transactions",
  //       data: transactions.map((data) => {
  //         console.log(data.amount);
  //         return data.amount;
  //       }),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log("catch, err"));
  }, []);

  const getTotal = (num) => {
    let amount = 0;
    for (let x of num) {
      x.category === "Bills"
        ? (amount -= Number(x.amount))
        : (amount += Number(x.amount));
    }
    return amount.toFixed(2);
  };

  const Total = getTotal(transactions);

  function addColor() {
    if (Total > 1000) {
      return (
        <span style={{ color: "yellowgreen" }}>
          ${Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      );
    } else if (Total > 0 && Total < 1000) {
      return (
        <span style={{ color: "#fff" }}>
          ${Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      );
    } else if (Total < 0) {
      return (
        <span style={{ color: "red" }}>
          ${Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      );
    }
  }

  return (
    <div className="transactions">
      <section>
        <h3>Bank Account Total: {addColor()}</h3>
        <table className="table">
          <caption>Current Bank Account Total: {addColor()}</caption>
          <thead>
            <tr>
              <th>
                Date
                {
                  //TODO: ALLOW USERS TO SORT TABLE BY DATE AND AMOUNT
                  /* <Select
                  options={[
                    { value: "ascending", label: "ascending" },
                    { value: "descending", label: "descending" },
                  ]}
                  menuPortalTarget={document.body}
                /> */
                }
              </th>
              <th>Name</th>

              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
