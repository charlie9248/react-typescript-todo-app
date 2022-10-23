import React , {useState , useEffect} from 'react';
import {useTodoContext} from '../context/TodoContext'
import { Todo } from '../interfaces/interfaces';
import { CheckBox, CloudDone } from '@material-ui/icons';

const Input = () => {

  const [task , setTask] = useState('');
  const {dispatch , state} = useTodoContext();
  const [search , setSearch] = useState(false)
  const [count , setCount] = useState(0)
  const [tempTodo , setTempTodo] = useState<Todo>({} as Todo);



  const {todo} = state

  useEffect(() => {
    setTempTodo(todo);
    setTask(todo.title)
  }, [todo])

  const onHandleChange = () => {
    setSearch(prevstate => !prevstate)
    console.log(search)
  }

  const handleCompleted = () => {
    let tempState =  state.todos.filter(item => item.completed === true)
    dispatch({type : "COMPLETED" , payload : tempState})
  }

  const handleInput = (e : React.FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;
    if(search === true){
      dispatch({type : "FILTER" , payload : value})
    }
      setTask(value)
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if(Object.keys(tempTodo).length){
      let  tempState = state.todos.map(item => item.id === tempTodo.id ? {...item , title : task} : item)
      dispatch({type : "UPDATE_TODOS" , payload : tempState})
      setTask("");
      setTempTodo({} as Todo);
    }else{
       setCount(prev => prev +  1)
      const newTask : Todo =  {
        id : count,
        title : task,
        completed : false,
        userId : count
      }
      dispatch({type : "ADD" , payload : newTask})
      setTask("")
    }
  }
  return (
    <>

    <div className='search'>
    <div>
    <input type="checkbox"  onChange={onHandleChange}/>
    <label>search</label>
    </div>

    <div>
    <input type="checkbox"  onChange={handleCompleted}/>
    <label>filter by completed</label>
    </div>


    </div>

    <form onSubmit={handleSubmit} className='input-container'>
      <input value={task} onChange={handleInput}  type='text' placeholder='add todo' />
      <input type='submit' value='Submit'/ >
    </form>
    </>

  )
}

export default Input
