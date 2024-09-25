// App.js
import React from 'react';
import { CustomerProvider } from '../context/CustmerContext';
import Customer from './Customer';
import PrimeCustomer from './PrimeCustomers';
import CustomerService from '../services/CustomerService';
import { Link } from 'react-router-dom';

const customers=CustomerService.getAllCustomers();
console.log(customers);

function CustomerContainer() {
  return (

    <CustomerProvider>
      <div>
        <h2> Customers </h2>
        <table>
          <tr>
            <td>
            <Link to={`/customers/insert`} >Insert New Customer</Link>
               {
             /*  <table>
                <tr>
                  {
                    customers.map((cust) => (
                      <td><Customer id={cust.id} name={cust.firstname} email={cust.email} contact={cust.contact} /></td>))
                  }
                </tr>
              </table> */
              
              <ul>
                {
                    customers.map(customer=>(
                        <li key ={customer.id}>{customer.firstname} <Link to={`/customers/details/${customer.id}`} >Details</Link> |
                                                                     <Link to={`/customers/update/${customer.id}`} >Update</Link> |
                                                                     <Link to={`/customers/delete/${customer.id}`} >Delete</Link>
                        </li>
                    ))
                }
               
             </ul>
              }
            </td>
            <td> <PrimeCustomer /></td>
          </tr>
        </table>
      </div>
    </CustomerProvider>
  );
}

export default CustomerContainer;