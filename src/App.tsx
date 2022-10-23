import React from 'react'
import Navbar from './component/Navbar';
import Input from './component/Input'
import TodoList from './component/TodoList';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Input/>
      <TodoList/>
    </div>
  )
}

export default App


