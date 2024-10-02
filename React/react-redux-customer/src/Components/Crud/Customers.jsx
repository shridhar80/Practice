import { Link } from "react-router-dom";
import CustomerService from "../../Services/customerservice";
 
 
const Customers=()=>{
 
    const customers= CustomerService.getAllCustomers();
    console.log(customers)
 
    return(
        <>
        <Link to={`/customers/insert`} >Insert New Customer</Link>
        <h3>Customers</h3>
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
        </>
    )
};
 
export default Customers;