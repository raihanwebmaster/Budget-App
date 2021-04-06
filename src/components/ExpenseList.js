import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransactions from "./ExpenseTransactions";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  console.log(expenseTransactions);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transactions-list">
      {expenseTransactions.map( expenseTransaction => (
          <ExpenseTransactions
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
