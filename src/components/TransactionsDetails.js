// DEPENDENCIES
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function TransactionsDetails() {
  const [transaction, setTransaction] = useState([]);

  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  };

  //! THIS IS BREAKING MY CODE
  console.log(transaction);
  //   const transactionDate = new Date(transaction["date"]);
  //   const formatted = new Intl.DateTimeFormat("en-US", {
  //     dateStyle: "long",
  //   }).format(transactionDate);

  return (
    <article className="details">
      <div className="detail">
        <h2>
          <span>Transaction Name: </span>
          {transaction.item_name}
        </h2>
        <h3>
          <span>From: </span>
          {transaction.from}
        </h3>
        <h3>
          <span>Amount: </span>${transaction.amount}
        </h3>
        <br />
        <p>
          <span>Transaction Date: </span>
          {transaction.date}
        </p>
        <p>
          <span>Transaction Category: </span>
          {transaction.category}
        </p>
      </div>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
