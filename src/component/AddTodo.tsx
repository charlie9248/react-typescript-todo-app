import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {IExpense} from '../models/todo'

interface AddTodoProps {
  charge:string,
  expense:string,
  setCharge :React.Dispatch<React.SetStateAction<string>>,
  setExpense : React.Dispatch<React.SetStateAction<string>>,
  handleOnsubmit : (newExpense : IExpense) => void,
  edit:boolean
}

interface myType {
  newExpense : IExpense
}
const AddTodo = ({charge ,expense ,edit , handleOnsubmit ,setCharge ,setExpense} : AddTodoProps) => {

  const handleExpenseChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setExpense(e.target.value);
  }

  const handleChargeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setCharge(e.target.value);
  }

  const handleSubmit = (e :React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    const newExpense = {
      id : uuidv4(),
      expense: expense,
      charge : parseInt(charge)
    }
    handleOnsubmit(newExpense);
    setCharge('')
    setExpense('')
  }

  return (
    <form onSubmit={handleSubmit} className='form-input'>
      <div>
      <input value={expense} onChange={handleExpenseChange} placeholder='expense : 4000' className='form-input-text' type="text"/>
      <input value={charge} onChange={handleChargeChange} placeholder='charge : eg 5000' className='form-input-text-1' type="text"/>
      </div>
    
      <div>
      <button className='btn-submit'>{edit ? 'edit' : 'submit'}</button>
      </div>
      
    </form>
  )
}

export default AddTodo
