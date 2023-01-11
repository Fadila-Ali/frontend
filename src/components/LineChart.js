import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
const API = process.env.REACT_APP_API_URL;

export default function LineChart() {
  console.log(API);
  //   const [transactions, setTransactions] = useState([]);

  const d3Chart = useRef();

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        console.log(res.data);
        let data = res.data;
        const permits = data.map((transaction) => transaction.amount);
        console.log(permits);
        const dates = [...new Set(data.map((each) => each.date.slice(0, 10)))];
        console.log(dates);
        let countDate = [];
        // dates.map((time) => {
        //   let date = time;
        //   let count = 0;
        //   permits.map((each) => {
        //     let timestamp = each.date.slice(0, 10);
        //     if (timestamp === date) {
        //       count += 1;
        //     }
        //   });
        //   const counts = { date: date, count: count };
        //   countDate.push(counts);
        // });
      })
      .catch((err) => console.log("catch, err"));
  }, []);
  return (
    <div className="lineChart">
      <svg ref={d3Chart}></svg>
    </div>
  );
}
