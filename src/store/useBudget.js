import { create } from "zustand";

export const useBudget= create((set)=>({
    expenses:[
        { id: 12, name: "shoping", cost: 50 },
        { id: 13, name: "holiday", cost: 100 },
        { id: 14, name: "car shoping", cost: 200 },
    ],
    budget: [2000],

    editExpenses:(value)=>set((state)=>{
      return {budget:[value]}
    }),

    addExpense:(name, cost)=>
        set((state)=>{
            const newExpenses= { id: new Date().valueOf(), name, cost }
            return {expenses:[...state.expenses, newExpenses] };
    }),

    deleteExpense:(id)=>set((state)=>{
        const newExpenses= state.expenses.filter((expense)=>expense.id!==id)
        return{expenses: newExpenses}
    })

}))


