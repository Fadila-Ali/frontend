import React from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import "./NavBar.css";
import imgBudget from "../assets/imgBudget.jpeg";

export default function NavBar({ theme, Total }) {
  return (
    <div className="nav">
      <div className="title">
        <h1>
          <img src={imgBudget} alt="Logo"></img>
          <Link to={"/transactions"}>Pinch Pennies</Link>
        </h1>
      </div>
      <div className="navButtons">
        <Theme />
        <button>
          <Link to="/transactions/new">Add Transaction</Link>
        </button>
      </div>
    </div>
  );
}
