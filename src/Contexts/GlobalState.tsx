import React , {createContext , useReducer} from 'react';
import {IExpense , Action ,State ,initilaState } from '../interfaces/interfaces';
import {AppReducer} from '../reducers/AppReducers';


interface globalProps {
    children : React.ReactNode,
}


export const Context = createContext<{state : State, dispatch : React.Dispatch<Action> }>({state : initilaState , dispatch : ()=>{}})

export const GlobalContext = ({children} : globalProps) => {
    const [state , dispatch] = useReducer(AppReducer , initilaState)

    return <Context.Provider value={{state , dispatch}}>
        {children}
    </Context.Provider>
}