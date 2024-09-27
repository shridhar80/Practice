
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';

const Customers = () => {
    const { customers } = useContext(CustomerContext);

    return (
        <div>
            <h2>Transflower Customers</h2>
            <Link to="/customers/new">Insert new Customer</Link>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.firstName} {customer.lastName} |
                        <Link to={`/customers/${customer.id}`}>details</Link> |
                        <Link to={`/customers/${customer.id}/edit`}>update</Link> |
                        <Link to={`/customers/${customer.id}/delete`}>delete</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Customers;
