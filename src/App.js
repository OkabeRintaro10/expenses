import React, { useState } from "react";
import "./App.css";
import Expense from "./Components/expenses/Expense";
import NewExpense from "./Components/Input/NewExpense";
const expense = [
  {
    id: "",
    title: "",
    amount: null,
    date: new Date(null, null, null),
  },
  { id: "", title: "", amount: null, date: new Date(null, null, null) },
  {
    id: "",
    title: "",
    amount: null,
    date: new Date(null, null, null),
  },
  {
    id: "",
    title: "",
    amount: null,
    date: new Date(null, null, null),
  },
];

function App() {
  const [expenses, setExpense] = useState(expense);

  const onExpenseDataHandler = (NewExpense) => {
    setExpense((prevExpense) => {
      return [NewExpense, ...prevExpense];
    });
  };
  return (
    <div className="App">
      <NewExpense data={onExpenseDataHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
