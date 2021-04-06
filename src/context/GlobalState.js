import React , {createContext, useEffect, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    incomeTransactions: JSON.parse(localStorage.getItem('incomeTransactions')) ||[],
    expenseTransactions: JSON.parse(localStorage.getItem('expenseTransactions')) ||[],

}
 export const GlobalContext = createContext(initialState);
 export const  GlobalContextProvider = ({children}) => {
     useEffect(()=>{
         localStorage.setItem("incomeTransactions",JSON.stringify(state.incomeTransactions));
         localStorage.setItem("expenseTransactions",JSON.stringify(state.expenseTransactions));
     })
     const [state,dispatch]= useReducer(AppReducer,initialState);
     const addIncome = (incomeTransactions) =>{
         dispatch({
             type: 'ADD_INCOME',
             payload:incomeTransactions,
         })
     }
     const addExpense = (expenseTransactions) =>{
        dispatch({
            type: 'ADD_EXPENSE',
            payload:expenseTransactions,
        })
    }
    const deleteTransaction =(id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id,
        })
    }
     return(
         <GlobalContext.Provider value={{
             incomeTransactions: state.incomeTransactions,
             expenseTransactions: state.expenseTransactions,
             addIncome,
             addExpense,
             deleteTransaction,
         }}>
             {children}
         </GlobalContext.Provider>
     )
 }