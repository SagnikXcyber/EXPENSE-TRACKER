import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const OSEDhandler = (enteredExpenseData) => {
        const expensedata = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expensedata);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={OSEDhandler} />
        </div>
    )
};

export default NewExpense;