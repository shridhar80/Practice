import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import customerService from "../services/CustomerService";

const CustomerUpdate = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [Customer, setCustomer] = useState(
        {
            id: '', email: '', firstname: '', lastname: '', contactnumber: ''
        }
    );
    useEffect(() => {
        const existingcustomer = customerService.getCustomerById(parseInt(id));
        if (existingcustomer) {
            setCustomer(existingcustomer);
        }
    }, [id]);
    

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCustomer((prevCustomer) => (
            { ...prevCustomer, [name]: value }

        ))
        console.log(Customer);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submit button clicked...");
        
        customerService.update(Customer);
        console.log(customerService.getAllCustomers());
        nav("/customers")
    }


    return (
        <>
            <h2>Update Customer...</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <lable>Enter Id : </lable>
                    <input type="number" name="id" value={Customer.id} onChange={handleChange} />
                </div>
                <div>
                    <lable>Enter First Name : </lable>
                    <input type="text" name="firstname" value={Customer.firstname} onChange={handleChange} />
                </div>
                <div>
                    <lable>Enter Last Name : </lable>
                    <input type="text" name="lastname" value={Customer.lastname} onChange={handleChange} />
                </div>
                <div>
                    <lable>Enter email : </lable>
                    <input type="email" name="email" value={Customer.email} onChange={handleChange} />
                </div>

                <div>
                    <lable>Enter Contact : </lable>
                    <input type="text" name="contactnumber" value={Customer.contactnumber} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <button type="submit">Update</button>
                </div>
            </form>

        </>
    )
}



export default CustomerUpdate;