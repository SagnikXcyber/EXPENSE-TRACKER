import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const DUMMyexpenses = [{
  title: 'car insurance',
  amount: 450,
  date: new Date(2021, 3, 8),
},
{
  title: 'health insurance',
  amount: 550,
  date: new Date(2021, 4, 8),
},
{
  title: 'life insurance',
  amount: 750,
  date: new Date(2021, 5, 8),
},
{
  title: 'dog insurance',
  amount: 650,
  date: new Date(2021, 6, 8),
}
];

const App = () => {
  const [expenses, SetExpenses] = useState(DUMMyexpenses);
  const AddExpenseHandler = (expense) => {
    SetExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };


  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
