import React , {useContext , createContext , useReducer , useState} from 'react'
import { Todo } from '../interfaces/interfaces';

import {initilaState , reducer , State , Action} from '../reducers/TodoReducer'


interface TodoContextProps  {
    state: State , 
    dispatch : React.Dispatch<Action>,
}

const TodoContext =  createContext<TodoContextProps>({state : initilaState , dispatch : ()=>{}})

export const useTodoContext = () => useContext(TodoContext);

export const TodoContextProvider = ({children} : {children : React.ReactNode}) => {

    const [state , dispatch] = useReducer(reducer , initilaState)

    return <TodoContext.Provider value={{state , dispatch  }}>
    {children}
    </TodoContext.Provider>

}


