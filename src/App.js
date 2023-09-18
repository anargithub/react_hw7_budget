import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget/Budget";
import Remaining from "./components/Remaining/Remaining";
import ExpenseTotal from "./components/ExpenseTotal/ExpenseTotal";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
// import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    // <AppProvider>
      <div className="container">

        <h1 className="mt-3">My budget planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>

          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>

          <h3 className="mt-3">Add Expense</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>
        
      </div>
    // </AppProvider>
    
  );
};

export default App;
