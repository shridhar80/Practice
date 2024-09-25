import {React, useContext } from "react";
import CustomerContext from "../context/CustomerContext";


function PrimeCustomers(){
    const{primeCustomers, removeCustomer,getTotalPrimeCustomers} =useContext(CustomerContext) ;
    return(
        <>
        <h2>Prime Customers</h2>

            {primeCustomers.length === 0 ? (<p> Empty</p>) : (

                <ul>
                    {primeCustomers.map((c) =>(
                        <li key={c.id}>
                            {c.name}
                            <button onClick={() => removeCustomer(c.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}

            <h3>Total Prime Customers : ${getTotalPrimeCustomers()}</h3>
        </>
    )
}

export default PrimeCustomers;