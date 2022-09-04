import React from 'react'
import {IExpense} from '../models/todo';
import { MdDelete , MdEdit } from 'react-icons/md';

interface todoItemProps {
  expense : IExpense,
  handleDelete : (id : string) => void
  handleEdit : (id : string) => void 
}

const TodoItem = ({expense , handleDelete , handleEdit } : todoItemProps) => {

  return (
    <div className='item'>
      <span>{expense.expense}</span>
      <span>{expense.charge}</span>
      <span>
        <MdDelete 
        className='btn btnDelete'
        onClick={()=> handleDelete(expense.id)}
        />
        <MdEdit 
        className='btn btnEdit'
        onClick={()=> handleEdit(expense.id)}
        /></span>
    </div>
  )
}

export default TodoItem
