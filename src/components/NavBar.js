import React from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import "./NavBar.css";
import logo from "../assets/logo.jpeg";
import { FaHome, FaTable, FaChartLine } from "react-icons/fa";
import { MdAddToQueue } from "react-icons/md";
import { IoInvertMode } from "react-icons/io";
export default function NavBar({ theme, Total }) {
  return (
    <div className="nav">
      <div className="title">
        <h1>
          <img src={logo} alt="Logo" className="flip"></img>
          <Link to={"/transactions"}>Pinch Pennies</Link>
        </h1>
      </div>
      <div className="navButtons">
        <button>
          <Link to="/">
            <FaHome />
            <span style={{ marginLeft: "5px" }}>Home</span>
          </Link>
        </button>
        <button>
          <Link to="/transactions">
            <FaTable />
            <span style={{ marginLeft: "5px" }}>Table</span>
          </Link>
        </button>
        <button>
          <Link to="/chart">
            <FaChartLine />
            <span style={{ marginLeft: "5px" }}>Chart</span>
          </Link>
        </button>
        <button>
          <Link to="/transactions/new">
            <MdAddToQueue />
            <span style={{ marginLeft: "5px" }}>Add</span>
          </Link>
        </button>
        <Theme />
      </div>
    </div>
  );
}
