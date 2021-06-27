import React from 'react';
import "./NewExpense.css";
import Form from './Form';

function NewExpense(props) {

    
    return (
        <div className="new-expense">
            <Form  title={props.title}/>
        </div>
    )
}

export default NewExpense;
