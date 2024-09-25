import React, { createContext, useState } from 'react';

//Step 1 : Create context at application level
// Create a context for the shopping cart

const CustomerContext = createContext();

//Step 2: Define Provider
//Store
// Create a provider component
export function CustomerProvider({ children }) {
  //Step 3: Define global State

  const [primeCustomer, setPrimeCustomer] = useState([]);
  //Step 4:Define Reducers

  // Add item to cart
  const addItem = (item) => {
    setPrimeCustomer((prevCust) => [...prevCust, item]);
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    setPrimeCustomer((prevCust) => prevCust.filter((item) => item.id !== itemId));
  };

  // Get total price
  const getTotalPrimeCustomer = () => {
    return primeCustomer.reduce((total, item) => total + item, 0);
  };

  //Middleware
  return (
    <CustomerContext.Provider value={{ primeCustomer, addItem, removeItem, getTotalPrimeCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;
