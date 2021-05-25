import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setenteredtitle] = useState('');
    const [enteredAmount, setenteredamount] = useState('');
    const [enteredDate, setentereddate] = useState('');

    const changehandler = (event) => {
        setenteredtitle(event.target.value)
    };

    const amountchangehandler = (event) => {
        setenteredamount(event.target.value);
    };

    const datechangehandler = (event) => {
        setentereddate(event.target.value);
    };

    const submithandler = (event) => {
        event.preventDefault();

        const expensedata = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expensedata);

        setenteredtitle('');
        setenteredamount('');
        setentereddate('');
    };
    return (
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">

                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={changehandler} />

                    <label>Amount</label>
                    <input type="number"
                        value={enteredAmount}
                        onChange={amountchangehandler} />

                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-30"
                        value={enteredDate}
                        onChange={datechangehandler} />

                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
};

export default ExpenseForm;