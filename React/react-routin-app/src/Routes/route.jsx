import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Aboutus from "../Components/Aboutus";
import List from "../Components/List";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Bi from "../Components/Bi";
import BarChart from "../Components/BarChart";
import LineChart from "../Components/LineChart";
import PieChart from "../Components/PieChart";

import Customer from "../Components/Crud/Customer";
import Customers from "../Components/Crud/Customers";
import CustomerUpdate from "../Components/Crud/CustomerUpdate";
import CustomerDelete from "../Components/Crud/CustomerDelete";
import CustomerInsert from "../Components/Crud/CustomerInsert";


const AppRoute = () =>(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutUs" element={<Aboutus/>}/>
        <Route path="/list" element={<List/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
    
        <Route path="/bi" element={<Bi/>}>
                    <Route path="bar" element={<BarChart/>}></Route>
                    <Route path="line" element={<LineChart/>}></Route>
                    <Route path="pie" element={<PieChart/>}></Route>
      
        </Route>

        <Route path="customers" element={<Customers/>}/>
        <Route path="customers/details/:id" element={<Customer/>}/>
        <Route path="customers/update/:id" element={ <CustomerUpdate/>}/>
        <Route path="customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="customers/insert" element={<CustomerInsert/>}/>
    </Routes>
)

export default AppRoute;