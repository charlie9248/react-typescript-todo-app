import React from 'react'
import './App.css'
import Addtransaction from './component/Addtransaction'
import Balance from './component/Balance'
import Header from './component/Header'
import IcomeExpense from './component/IcomeExpense'
import TransactionList from './component/TransactionList'
import { GlobalContext } from './Contexts/GlobalState'


const App = () => {
  return (
    <div className='app'>

      <Header/>
      <GlobalContext>
      <Balance/>
      <IcomeExpense/>
      <TransactionList/>
      <Addtransaction/>
      </GlobalContext>
    </div>
  )
}

export default App
