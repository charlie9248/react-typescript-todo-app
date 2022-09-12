import React , {useContext} from "react";
import {Context} from '../Contexts/GlobalState'
import { IExpense } from "../interfaces/interfaces";

function Balance() {

  const {state} =  useContext(Context);
  const amounts : string  = state.transactions.map(a => a.amount).reduce((total, current)=> total += current).toFixed(2)
  return (
    <div>
      <p>Your Balance</p>
      <p>R{amounts}</p>
    </div>
  );
}
export default Balance;
