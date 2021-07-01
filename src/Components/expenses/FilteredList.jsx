import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./FilteredList.css";

function FilteredList(props) {
  if (props.expense.length === 0) {
    return <h2 className="expenses-list__fallback">No expense here</h2>;
  }

  return (
    <ul className="expense_list">
      {props.expense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default FilteredList;
