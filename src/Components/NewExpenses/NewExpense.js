import React from 'react';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
    const [startEditing, setStartEditing] = useState(false);
    const expenseAddedHandler = (enteredExpense) => {
        const Expense = {
            ...enteredExpense,
            id: Math.random().toString()
        };
        props.onNewExpense(Expense);
        setStartEditing(false);
    };

    const startEditingHandler= () => {
        setStartEditing(true);
    };

    const stopEditingHandler = () => {
        setStartEditing(false);
    };
    
    return (
        <div className="new-expense">
            {!startEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {startEditing && <ExpenseForm stopEditing={stopEditingHandler} onExpenseAdded={expenseAddedHandler} />}
        </div>
    );
};

export default NewExpense;