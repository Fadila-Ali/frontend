// DEPENDENCIES
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// COMPONENTS
import Transaction from "./Transaction";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  console.log(API);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        console.log(res.data);
        setTransactions(res.data);
      })
      .catch((err) => console.log("catch, err"));
  }, []);

  const getTotal = (num) => {
    let amount = 0;
    for (let x of num) {
      amount += Number(x.amount);
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
        <h2>Bank Account Total: {addColor()}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
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
