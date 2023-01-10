// DEPENDENCIES
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function NewTransaction() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => navigate("/transactions"))
      .catch((c) => console.error("catch", c));
  };

  return (
    <div className="newAndEdit">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name: </label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          placeholder="name"
          required
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          placeholder="amount"
          required
          onChange={handleTextChange}
        />
        <label htmlFor="date">Transaction Date: </label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          placeholder="MM/DD/YYYY"
          required
          onChange={handleTextChange}
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          placeholder="from"
          required
          onChange={handleTextChange}
        />
        <label htmlFor="category">Transaction Category: </label>
        <select
          id="category"
          onChange={handleTextChange}
          value={transaction.category}
          className="select"
          required
        >
          <option value=""></option>
          <option value="Earnings">Income or Earnings</option>
          <option value="Bills">Expenses or Bills</option>
        </select>
        <input type="submit" id="submit" />
        <Link to={`/transactions/`}>
          <button>Nevermind!</button>
        </Link>
      </form>
    </div>
  );
}
