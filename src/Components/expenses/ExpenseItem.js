import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  console.log(title);

  return (
    <Card className="expense-item">
      <ExpDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <button onClick={clickHandler}>Chage title</button>
      </div>
      <div className="expense-item__price">
        <h2>${props.amount}</h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
