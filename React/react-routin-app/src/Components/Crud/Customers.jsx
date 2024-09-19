import { Link } from "react-router-dom";
import CustomerService from "../../Services/customerservice";
 
 
const Customers=()=>{
 
    const customers= CustomerService.getAllCustomers();
 
    return(
        <>
        <h3>Top ten Customers</h3>
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