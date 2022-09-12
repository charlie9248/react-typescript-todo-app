import React from 'react'
import {IExpense} from '../interfaces/interfaces'

interface TransactionType {
    transaction : IExpense
}

const Transaction = ({transaction} :TransactionType) => {
  return (
    <li className='list'><span>{transaction.text}</span>  <span>R{transaction.amount}</span></li>
  )
}

export default Transaction
