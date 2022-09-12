import React  , {useState , useContext} from 'react'
import { Context } from '../Contexts/GlobalState';
import { IExpense } from '../interfaces/interfaces'

const Addtransaction = () => {
  const [amount , setAmount] = useState<string>('');
  const [text , setText] = useState<string>('')
  const {state ,dispatch}  = useContext(Context)

  const onSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense :IExpense  = {
      amount : parseInt(amount),
      id : 4,
      text : "test"
    }
    dispatch({type : "Add" , payload : newExpense})
  }
  return (
    <form onSubmit={onSubmit} className='form-input'>
        <input value={text}  onChange={e => setText(e.target.value)} type='text' placeholder='add expense'/>
        <input value={amount}  onChange={e => setAmount(e.target.value)} type='number' placeholder='add amount'/>
        <input type='submit' value="submit"/>
    </form>
  )
}

export default Addtransaction
