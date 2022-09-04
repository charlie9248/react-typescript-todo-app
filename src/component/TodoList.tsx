import React from 'react';
import TodoItem from './TodoItem';
import {IExpense} from '../models/todo';


interface todoListType {
  expenses : IExpense[],
  handleDelete : (id : string) => void
  handleEdit : (id : string) => void 
}


const TodoList : React.FC<todoListType>  = ({expenses,handleEdit,handleDelete}) => {
  return (
    <div>
       {expenses.map(expense =>  
       <TodoItem 
       expense={expense}
       handleEdit={handleEdit}
       handleDelete={handleDelete}
      key={expense.id}/> )}
    </div>
  )
}

export default TodoList
