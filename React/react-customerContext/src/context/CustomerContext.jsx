import {React, createContext, useState } from "react";

const CustomerContext = createContext();

export function CustomerProvider({cust}){
    const [primeCustomer, setPrimeCustomer]=useState([]);

    const addCustomer = (c)=>{
        setPrimeCustomer((prevCustomer) => [...prevCustomer, c]);
    };

    const removeCustomer= (customerId) =>{
        setPrimeCustomer((prevCustomer) => prevCustomer.filter((c)=>c.id !== customerId));
    };

    const getTotalPrimeCustomers =()=>{
        return primeCustomer.reduce((total, c) => total+c, 0);
    };

    return(
        <CustomerContext.Provider value={{primeCustomer, addCustomer, removeCustomer,getTotalPrimeCustomers}}>
            {cust}
        </CustomerContext.Provider>
    )

}

export default CustomerContext;