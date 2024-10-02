import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import customerservice from "../../Services/customerservice";

 
const CustomerDelete=()=>{
    const { id } = useParams();
    const [customer, setcustomer] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const existingcustomer =customerservice.getCustomerById( parseInt(id));
        if (existingcustomer) {
            setcustomer(existingcustomer);
        }
    }, [id]);
 
    const handleYes=()=>{
      let theExistingCustomerId= parseInt(id);
      customerservice.remove(theExistingCustomerId);
      navigate("/customers");
    }
 
    const handleNotSure=()=>{  
        navigate("/customers");
    }
 
    return(
        <>
        <h3>Customer Details</h3>
         <p> Name: {customer.firstName} {customer.lastname}</p>
         <p>Email: {customer.email}</p>
         <p>Contact Nubmer:{customer.contactnumber}</p>
         <h3>Do you want to delete  the Customer ?</h3>
         <button onClick={handleYes}> yes</button>
         <button onClick={handleNotSure}> Not Sure</button>
        </>
    )
};
 
export default CustomerDelete;