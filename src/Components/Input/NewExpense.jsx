import React, { useState } from "react";
import "./NewExpense.css";
import Form from "./Form";

function NewExpense(props) {
  const [isEditing, setEditing] = useState(false);

  const SubmitedDataHandler = (ExpenseData) => {
    const expenseData = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    props.data(expenseData);
  };

  const EditingChangeHandler = () => setEditing(true);
  const CancelEditingHandler = () => setEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={EditingChangeHandler}>
          Add Expenese
        </button>
      )}

      {isEditing && (
        <Form
          SubmitedData={SubmitedDataHandler}
          onCancel={CancelEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
