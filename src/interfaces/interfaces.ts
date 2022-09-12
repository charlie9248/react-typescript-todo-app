export interface IExpense {
  id: number;
  text: string;
  amount: number;
}


export const initilaState = {
  transactions :[
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ],
  name : "Tshepo"
   
}
export type State = typeof  initilaState;

export type Action = {type : "Add" , payload : IExpense } | {type : "Remove" , payload : number }