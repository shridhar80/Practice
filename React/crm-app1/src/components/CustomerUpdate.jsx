
import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';

const CustomerUpdate = () => {
    const { id } = useParams();
    const { customers, updateCustomer } = useContext(CustomerContext);
    const customerToEdit = customers.find(c => c.id === parseInt(id));
    const [customer, setCustomer] = useState(customerToEdit || {});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCustomer(customer);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name: </label>
            <input name="firstName" value={customer.firstName} onChange={handleChange} />
            <label>Last Name: </label>
            <input name="lastName" value={customer.lastName} onChange={handleChange} />
            <label>Email: </label>
            <input name="email" value={customer.email} onChange={handleChange} />
            <label>Contact Number: </label>
            <input name="contactNumber" value={customer.contactNumber} onChange={handleChange} />
            <button type="submit">Update</button>
        </form>
    );
};

export default CustomerUpdate;
