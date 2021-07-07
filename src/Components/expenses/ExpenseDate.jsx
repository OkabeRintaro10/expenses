import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.Date.toLocaleString("en-us", { day: "2-digit" }),
    month = props.Date.toLocaleString("en-us", { month: "long" }),
    year = props.Date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month} </div>
      <div className="expense-date__day"> {day} </div>
      <div className="expense-date__year "> {year}</div>
    </div>
  );
}

export default ExpenseDate;
