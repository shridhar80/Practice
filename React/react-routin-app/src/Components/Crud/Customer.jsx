import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customerservice from "../../Services/customerservice";
 
const Customer=()=>{
    const { id } = useParams();
    const [customer, setcustomer] = useState({ id: 1, email: 'ravi.tambade@transflower.in',  firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" });
   
    console.log({customer});
    useEffect(() => {
        const existingcustomer =customerservice.getAllCustomers( parseInt(id));
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
         <p>Location: {customer.location}</p>
        </>
    )
};
 
export default Customer;