import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customerservice from "../../Services/customerservice";
 
const Customer=()=>{
    const { id } = useParams();
    const [customer, setcustomer] = useState('');
   
    console.log(customer);
    useEffect(() => {
        const existingcustomer =customerservice.getCustomerById( parseInt(id));
        if (existingcustomer) {
            setcustomer(existingcustomer);
        }
    }, [id]);
 
    return(
        <>
        <h3>Customer Details</h3>
         <p> Name: {customer.firstname} {customer.lastname}</p>
         <p>Email: {customer.email}</p>
         <p>Contact Nubmer:{customer.contactnumber}</p>
        
        </>
    )
};
 
export default Customer;