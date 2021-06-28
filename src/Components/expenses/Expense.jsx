import React, { useState } from "react";
import Expenses from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Expenses
        title={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      />
      <Expenses
        title={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      />
      <Expenses
        title={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      />
      <Expenses
        title={props.item[3].title}
        date={props.item[3].date}
        amount={props.item[3].amount}
      />
    </Card>
  );
}

export default Expense;
