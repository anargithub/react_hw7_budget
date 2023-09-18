import React, {useContext} from "react";
import { useBudget } from "../../store/useBudget";

export default function ExpenseTotal () {
    const expenses = useBudget((state)=>state.expenses)

    const totalExpenses = expenses.reduce((total, item)=> {
        return (total += item.cost)
    }, 0)

    return (
        <div className="alert alert-primary">
            <span>Spent so far: {totalExpenses} KZT</span>
        </div>
    )
}



// import React, {useContext} from "react";
// import { AppContext } from "../../context/AppContext";

// const ExpenseTotal = () => {
// const {expenses} = useContext(AppContext)

// const totalExpenses = expenses.reduce((total, item)=> {
//     return (total += item.cost)
// }, 0)

//     return (
//         <div className="alert alert-primary">
//             <span>Spent so far: ${totalExpenses}$</span>
//         </div>
//     )
// }

// export default ExpenseTotal