import React from "react";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  // const ExpenseItemsList = props.expenses.map((expense) => (
  //   <ExpenseItem
  //     id={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />
  // ));

  

  const filterDateChangeHandler = (enteredDate) => {
    setfilteredYear(enteredDate);
  };

  const ExpenseFilteredItemsList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterDateChange={filterDateChangeHandler}
        />
        <ExpensesChart expenses={ExpenseFilteredItemsList}/>
        <ExpensesList selectedYear={filteredYear} ExpenseFilteredItemsList={ExpenseFilteredItemsList}/>

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
