import React from "react";
import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  const transactionDate = new Date(transaction.date);
  const formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(transactionDate);

  return (
    <tr>
      <td>{formatted}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>
      <td>
        ${transaction.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>
    </tr>
  );
}
