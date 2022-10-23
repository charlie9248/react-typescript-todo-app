import React from 'react'
import { useTodoContext } from '../context/TodoContext';
import {Todo} from '../interfaces/interfaces'
import { Action } from '../reducers/TodoReducer'


interface itemProps {
    item : Todo;

}

const TodoItem = ({item}: itemProps) => {

  const {dispatch , state} = useTodoContext();

  const handleDelete = (id : number ) => {
    console.log(id)
    dispatch({type : "REMOVE" , payload : id})
  }

  const handleEdit = (id : number) => {
    console.log(id)
    dispatch({type : "EDIT" , payload : id})
  }

  const handleChange = (id : number) : void  => {
    console.log(id)
    dispatch({type : "TOGGLE" , payload : id})
  }


  const applyStyle = () => {
    return {
      textDecoration  : item.completed ? 'line-through' : 'none'
    }
  }
  return (
    <div style={applyStyle()} className='todo-item'>
      <input className='checkbox-input' type="checkbox" onClick={() => handleChange(item.id)}/>
      {item.title}
      <div className='btn-group'>
        <button onClick={()=> handleEdit(item.id)} className='btn'>Edit</button>
        <button onClick={()=> handleDelete(item.id)} className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
