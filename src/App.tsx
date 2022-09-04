import React , {useState} from 'react';
import AddTodo from './component/AddTodo';
import Alert from './component/Alert';
import TodoList from './component/TodoList';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {IExpense} from './models/todo'

const App = () => {

  const [charge ,  setCharge] =  useState<string>("");
  const [expense , setExpense] =  useState<string>("");
  const [edit , setEdit] = useState<boolean>(false)
  const [id , setId] = useState<string>('')

  const  [expenses ,  setExpenses] = useState<IExpense[]>([
    {
   charge : 500,
   expense:"car installment",
   id : uuidv4()
  }
  ])

  const  handleOnsubmit =  (newExpense : IExpense) =>  {

    if(edit){
      let tempExpenses : IExpense[]  = expenses.map(exp => {
        return exp.id === id ? {...exp , charge : parseInt(charge) ,  expense :expense} : exp
      })
      setExpenses(tempExpenses)
      setEdit(false)
    }else{
      setExpenses([...expenses , newExpense])
    }
    setCharge("")
    setExpense("");
  }

  const handleDelete = (id:string) => {
    const ex = expenses.filter((expen :IExpense) => expen.id !== id);
    setExpenses(ex)
  }

  const handleEdit = (id:string) => {
    const ex = expenses.find((expen :IExpense) => expen.id === id);
    setEdit(true);
    setCharge(`${ex?.charge}`)
    setExpense(`${ex?.expense}`);
    setId(`${ex?.id}`)
  }


  return (
    <div>
      <h3 className='heading'>Budget Calculator</h3>
      <Alert/>
      <div className='main'>
      <AddTodo 
      charge={charge}
      expense={expense}
      setCharge={setCharge}
      setExpense={setExpense}
      handleOnsubmit={handleOnsubmit}
      edit={edit}
      />
      <TodoList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  )
}

export default App
