import React from "react";
import NewTransaction from "../components/NewTransaction";

export default function New() {
  return (
    <div className="transaction">
      <h2>Add a new Transaction</h2>
      <NewTransaction />
    </div>
  );
}
