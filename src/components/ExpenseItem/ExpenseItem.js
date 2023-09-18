import React from "react";
import {TiDelete} from 'react-icons/ti'
import { useBudget } from "../../store/useBudget";

export default function ExpenseItem (props) {

    const deleteExpense = useBudget((state)=>state.deleteExpense)
    const handleDeleteExpense = () => {
        deleteExpense(props.id)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="bg bg-primary bg-pill mr-3 text-white">
                {props.cost} KZT
                    
                </span>
                
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
    }


// import React, {useContext} from "react";
// import {TiDelete} from 'react-icons/ti'

// import { AppContext } from "../../context/AppContext";

// const ExpenseItem = (props) => {
// const {dispatch} = useContext(AppContext)
// const handleDeleteExpense = () => {
//     dispatch({
//         type: 'DELETE_EXPENSE',
//         payload: props.id,
//     })
// }

//     return (
//         <li className="list-group-item d-flex justify-content-between align-items-center">
//             {props.name}
//             <div>
//                 <span className="bg bg-primary bg-pill mr-3 text-white">
//                 ${props.cost}
                    
//                 </span>
                
//                 <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
//             </div>
//         </li>
//     )
// }
// export default ExpenseItem