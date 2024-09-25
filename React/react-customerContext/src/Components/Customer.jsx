import {React, useContext } from "react";
import CustomerContext from "../context/CustomerContext";


function Customer({id, name}){
    const {addCustomer} = useContext(CustomerContext);

    const handleAddToPrimeList = ()=>{
        addCustomer({id,name });
    };

    return(
        <>
        <h2>{name}</h2>

        <button onClick={handleAddToPrimeList}>Add To Prime List</button>
        </>
    )
}
export default Customer;