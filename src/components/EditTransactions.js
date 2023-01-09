import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.REACT_APP_API_URL;

export default function EditTransactions() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.warn("catch", err));
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
          id="from"
          value={transaction.category}
          type="text"
          placeholder="category"
          required
          onChange={handleTextChange}
        />
        <br />
        <br />
        <input type="submit" id="submit" />
        <Link to={`/transactions/${index}`}>
          <button>Nevermind!</button>
        </Link>
      </form>
    </div>
  );
}
