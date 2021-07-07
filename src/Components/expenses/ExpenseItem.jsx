import React from "react";
import "./ExpenseItem.css";
import ExpDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpDate Date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">
          <h2>${props.amount}</h2>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
