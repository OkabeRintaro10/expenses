import React from "react";
import "./NewExpense.css";
import Form from "./Form";

function NewExpense(props) {
  const SubmitedDataHandler = (ExpenseData) => {
    const expenseData = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    props.data(expenseData);
  };

  return (
    <div className="new-expense">
      <Form SubmitedData={SubmitedDataHandler} />
    </div>
  );
}

export default NewExpense;
