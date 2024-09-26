// src/components/CustomerDetails.jsx
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CustomerContext } from '../context/CustomerContext';

const CustomerDetails = () => {
    const { id } = useParams();
    const { customers } = useContext(CustomerContext);
    console.log(id, customers);
    const customer = customers.find(c => c.id === parseInt(id));
    console.log(id);

    if (!customer) return <div>Customer not found</div>;

    return (
        <div>
            <h3>Customer Details</h3>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactNumber}</p>
        </div>
    );
};

export default CustomerDetails;
