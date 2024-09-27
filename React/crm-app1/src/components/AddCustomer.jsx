
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';

const AddCustomer = () => {
    const { addCustomer } = useContext(CustomerContext);
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer(customer);
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
            <button type="submit">Insert</button>
        </form>
    );
};

export default AddCustomer;
