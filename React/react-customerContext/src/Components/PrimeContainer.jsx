import React from 'react';
import { CustomerProvider } from "../context/CustomerContext";
import Customer from "./Customer";
import PrimeCustomers from "./PrimeCustomers";
import CustomerService from "../services/CustomerServices";


const customers = CustomerService.getAllCustomers();

function PrimeContainer(){
    return (
      <CustomerProvider>

        <div>
            <h2>Customers </h2>
            <table>
                <tr>
                    <td>{
                        <table>
                            <tr>{
                                 customers.map((c) => (
                                    <td> <Customer id={c.id} name={c.firstname}></Customer></td>
                                  ))  }
                             
                            </tr>
                        </table>
                        }
                    </td>
                    <td><PrimeCustomers/></td>
                </tr>
            </table>
        </div>
      </CustomerProvider>  
    )
}

export default PrimeContainer;