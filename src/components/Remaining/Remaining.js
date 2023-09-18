import React from "react";

import { useBudget } from "../../store/useBudget";

export default function Remaining () {
    const budget = useBudget((state)=>state.budget)
    const expenses = useBudget((state)=>state.expenses)

    const totalExpenses = expenses.reduce((total, item)=>{return total = total +item.cost}, 0)

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {budget - totalExpenses} KZT</span>
        </div>
    )
}



// import React, { useContext } from "react";
// import { AppContext } from "../../context/AppContext";

// const Remaining = () => {
//     const { expenses, budget} = useContext(AppContext)

//     const totalExpenses = expenses.reduce((total, item)=>{return total = total +item.cost}, 0)

//     const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
//     return (
//         <div className={`alert ${alertType}`}>
//             <span>Remaining: {budget - totalExpenses}$</span>
//         </div>
//     )
// }
// export default Remaining