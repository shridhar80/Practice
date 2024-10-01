import { Route, Routes } from "react-router-dom";

import Customer from "../Components/Crud/Customer";
import Customers from "../Components/Crud/Customers";
import CustomerUpdate from "../Components/Crud/CustomerUpdate";
import CustomerDelete from "../Components/Crud/CustomerDelete";
import CustomerInsert from "../Components/Crud/CustomerInsert";


const AppRoute = () =>(
    <Routes>
        <Route path="customers" element={<Customers/>}></Route>
        <Route path="customers/details/:id" element={<Customer/>}/>
        <Route path="customers/update/:id" element={ <CustomerUpdate/>}/>
        <Route path="customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="customers/insert" element={<CustomerInsert/>}/>
    </Routes>
)

export default AppRoute;