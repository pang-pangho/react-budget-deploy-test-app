import React from "react";
import "./ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      {" "}
      {/* 변경: ll -> li */}
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit onClick={() => handleEdit(expense.id)} />
        </button>
        <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
