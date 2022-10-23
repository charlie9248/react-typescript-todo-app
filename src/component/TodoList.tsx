import React, { useEffect } from 'react'
import { useTodoContext } from '../context/TodoContext'
import { Todo } from '../interfaces/interfaces'
import TodoItem from './TodoItem'



const TodoList = () => {

  const {state , dispatch} = useTodoContext();

  const fetchData = async() =>{
    let response  = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    let data =  await response.json();
    console.log(data)
    data.slice(0, 5).forEach((element : Todo) =>  dispatch({type : "ADD" , payload : element}))
  } 

  const todos:Todo[]  = [
    {
      id : 1 ,
      userId : 1,
      title : 'One',
      completed : false
    },
    {
      id : 2 ,
      userId : 2,
      title : 'two',
      completed : false
    },
    {
      id : 3 ,
      userId : 3,
      title : 'three',
      completed : false
    }
  ]

  return (
    <div className='todo-container'>
        {state.todos.map(item => <TodoItem key={item.id} item={item}/>)}
    </div>
  )
}

export default TodoList
