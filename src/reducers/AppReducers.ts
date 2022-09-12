import {Action ,State } from '../interfaces/interfaces';

export const  AppReducer = (state : State , action : Action) => {

    switch(action.type){
        case "Add":
            return {...state ,transactions : [...state.transactions , action.payload]}
        case "Remove":
            return {...state ,transactions : [...state.transactions.filter(item => item.amount !== action.payload)]}
        default:
        return state
    }
}