// src/contexts/CustomerContext.js
import { createContext, useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers(CustomerService.getAllCustomers());
    }, []);

    const addCustomer = (customer) => {
        CustomerService.addCustomer(customer);
        setCustomers(CustomerService.getAllCustomers());
    };

    const updateCustomer = (customer) => {
        CustomerService.updateCustomer(customer);
        setCustomers(CustomerService.getAllCustomers());
    };

    const deleteCustomer = (id) => {
        CustomerService.deleteCustomer(id);
        setCustomers(CustomerService.getAllCustomers());
        console.log("delelte from context..");
    };

    return (
        <CustomerContext.Provider value={{ customers, addCustomer, updateCustomer, deleteCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
};
