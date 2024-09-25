import { Route, Routes } from "react-router-dom";
import CustomerContainer from "./components/CustomerContainer";
import Customer from "./components/Customer";
import CustomerUpdate from "./components/CustomerUpdate";
import CustomerDelete from "./components/CustomerDelete";
import CustomerInsert from "./components/CustomerInsert";



const AppRoute = () =>(
    <Routes>
        <Route path="/" element={<CustomerContainer/>}></Route>
        <Route path="customers/details/:id" element={<Customer/>}></Route>
        <Route path="customers/update/:id" element={ <CustomerUpdate/>}/>
        <Route path="customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="customers/insert" element={<CustomerInsert/>}/>

    </Routes>
    )
export default AppRoute;