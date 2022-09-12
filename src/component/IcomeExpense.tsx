import React ,{useContext}from "react";
import {Context} from '../Contexts/GlobalState'

const IcomeExpense = () => {

  const {state} = useContext(Context)
  const expenses : string  = state.transactions.map(a => a.amount)
  .filter(item => item < 0 )
  .reduce((total, current)=> total += current).toFixed(2)

  const Income : string  = state.transactions.map(a => a.amount)
  .filter(item => item > 0 )
  .reduce((total, current)=> total += current).toFixed(2)


  return (
    <div className="income-expense">
      <div className="box-one">
        <span>INCOME</span>
        <div>{Income}</div>
      </div>
      <div className="box-two">
        <span>EXPENSE</span>
        <div>{expenses}</div>
      </div>
    </div>
  );
};

export default IcomeExpense;
