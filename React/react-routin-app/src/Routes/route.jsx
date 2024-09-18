import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Aboutus from "../Components/Aboutus";
import List from "../Components/List";
import Login from "../Components/Login";
import Register from "../Components/Register";


const AppRoute = () =>(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutUs" element={<Aboutus/>}/>
        <Route path="/list" element={<List/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
    </Routes>
)

export default AppRoute;