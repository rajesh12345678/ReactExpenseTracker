import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
    
      let expensesContent = <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
    
      if (props.ExpenseFilteredItemsList.length > 0) {
        expensesContent = props.ExpenseFilteredItemsList.map((filteredexpense) => (
          <ExpenseItem
            key={filteredexpense.id}
            title={filteredexpense.title}
            amount={filteredexpense.amount}
            date={filteredexpense.date}
          />
        ));
      }
    return(
        <ul className='expenses-list'>
            {expensesContent}
        </ul>
    );
};

export default ExpensesList;
