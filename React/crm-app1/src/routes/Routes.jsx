// src/routes/Routes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customers from '../components/Customers';
import CustomerDetails from '../components/CustomerDetails';
import AddCustomer from '../components/AddCustomer';
import CustomerUpdate from '../components/CustomerUpdate';
import CustomerDelete from '../components/CustomerDelete';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Customers/>} />
                <Route path="/customers/new" element={<AddCustomer/>} />
                <Route path="/customers/:id" element={<CustomerDetails />} />
                <Route path="/customers/:id/edit" element={<CustomerUpdate />} />
                <Route path="/customers/:id/delete" element={<CustomerDelete />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
