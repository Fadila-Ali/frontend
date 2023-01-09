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
        <label htmlFor="itemName">Item Name: </label>
        <br />
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          placeholder="name"
          required
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="amount">Amount Charged: </label>
        <br />
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          placeholder="amount"
          required
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="date">Transaction Date: </label>
        <br />
        <input
          id="date"
          value={transaction.date}
          type="date"
          placeholder="MM/DD/YYYY"
          required
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="from">Merchant Name: </label>
        <br />
        <input
          id="from"
          value={transaction.from}
          type="text"
          placeholder="from"
          required
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="category">Transaction Category: </label>
        <br />
        <input
          id="category"
          value={transaction.category}
          type="text"
          placeholder="category"
          required
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" id="submit" />
        <Link to={`/transactions/`}>
          <button>Nevermind!</button>
        </Link>
      </form>
    </div>
  );
}
