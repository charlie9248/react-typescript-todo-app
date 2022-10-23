import { Todo } from "../interfaces/interfaces";


export const initilaState = {
    todos : [] as Todo[],
    todo : {} as Todo,
    edit : false
}




export type State = typeof initilaState

export type Action =
 {type : "ADD" , payload : Todo } | 
{type : "REMOVE" , payload : number } | 
{type : "EDIT" , payload : number } |
{type : "TOGGLE" , payload : number } |
 {type : "SUBMIT" , payload : Todo } |
 {type : "FILTER" , payload : string } |
 {type : "UPDATE_TODOS" , payload : Todo[] } |
 {type : "COMPLETED" , payload : Todo[] } 




export const reducer = (state : State , action : Action) => {
    switch(action.type){
        case "ADD" :
            return  {...state , todos :[...state.todos , action.payload]}
        case "UPDATE_TODOS" :
            return  {...state , todos : action.payload}
        case "TOGGLE" :
            return  {...state , todos : state.todos.map(item => item.id === action.payload ? {...item , completed : !item.completed} : item )}
        case "REMOVE" :
            return {...state , todos :state.todos.filter(item => item?.id !== action.payload)}
        case "EDIT" :
            return {...state , edit : true, todo :state.todos.find(item => item.id  === action.payload) as Todo}
        case "SUBMIT" :
            console.log(action.payload)
            return {...state  , todos : [...state.todos , action.payload]}
        case "FILTER" :
            return {...state  , todos : state.todos.filter((item:Todo) => item.title.toLowerCase().includes(action.payload.toLowerCase()))}
        case "COMPLETED" :
            return {...state  , todos :  action.payload }

        default :
        return state
    }
}