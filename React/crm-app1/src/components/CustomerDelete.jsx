// src/components/CustomerDelete.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CustomerContext } from '../context/CustomerContext';

const CustomerDelete = () => {
    const { id } = useParams();
    const { customers, deleteCustomer } = useContext(CustomerContext);
    const customer = customers.find(c => c.id === parseInt(id));
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        deleteCustomer(id);
        navigate('/');
    };

    if (!customer) return <div>Customer not found</div>;

    return (
        <div>
            <h3>Are you sure you want to delete?</h3>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactNumber}</p>
            <button onClick={handleDelete}>Yes</button>
        </div>
    );
};

export default CustomerDelete;
