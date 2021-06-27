import React, { useState } from 'react';
import "./Form.css";

function Form() {
    const [title, setTitle] = useState('');
    const[amount, setAmount] = useState('');
    const[date, setDate] = useState('');

    const textHandler = (event) => {
        setTitle(event.target.value);
    };
    const numHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateHandler = (event) => {
        setDate(event.target.value);
    };
    return (
    <form>
        <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label htmlFor="">Title</label>
                    <input type="text"  onChange={textHandler}/>
                </div>
                <div className="new-expense_control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={numHandler}/>
                </div>
                <div className="new-expense_control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2021-01-01" max="2025-12-31"  onChange={dateHandler}/>
                </div>
        </div>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}

export default Form;
