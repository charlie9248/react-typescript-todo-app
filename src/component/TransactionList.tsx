import React ,{useContext} from 'react'
import {Context} from '../Contexts/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

  const {state} =  useContext(Context);

  console.log(state);

  return (
    <div>
        <span>History</span>
        <hr/>
        {state.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
    </div>
  )
}

export default TransactionList
