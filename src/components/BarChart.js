import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  //!THIS IS HARD CODED, THE DATA FROM THE BACKEND IS COMING OUT US UNDEFINED
  //TODO: I run out of time, I will submit the assignment and continue working on it
  //TODO: I want to and different chart to provide users with more options
  const initialData = [
    {
      item_name: "Netflex",
      amount: 20,
      date: "2022-12-15",
      from: "Netflex",
      category: "Bills",
    },
    {
      item_name: "Savings",
      amount: 1000,
      date: "2022-12-20",
      from: "Assets",
      category: "Earnings",
    },
    {
      item_name: "payroll",
      amount: 3000,
      date: "2022-12-31",
      from: "Uber",
      category: "Earnings",
    },
    {
      item_name: "car",
      amount: 250,
      date: "2023-01-02",
      from: "Car Guru",
      category: "Bills",
    },
    {
      item_name: "gym",
      amount: 25,
      date: "2023-01-05",
      from: "Blink",
      category: "Bills",
    },
  ];

  let transDate = [initialData.map((el) => el.date)];
  let transAmount = [initialData.map((el) => el.amount)];

  const data = {
    labels: [
      "2022-Dec-15",
      "2022-Dec-20",
      "2022-Dec-31",
      "2023-Jan-02",
      "2023-Jan-05",
    ],
    datasets: [
      {
        label: "Account Transactions",
        data: [-20, 1000, 3000, -250, -25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            biginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="char">
      <h1 className="title">Bar Chart</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
