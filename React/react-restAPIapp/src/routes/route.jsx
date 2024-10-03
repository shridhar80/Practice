import { Route, Routes } from "react-router-dom";
import ProductList from "../components/crud/ProductsList";
import ProductDetails from "../components/crud/ProductDetails";
import ProductDelete from "../components/crud/Delete";
import ProductUpdate from "../components/crud/Update";
import AddProduct from "../components/crud/AddProuduct";

const AppRoute = () =>(
    <Routes>
        
        <Route path="products" element = {<ProductList/>}></Route>
        <Route path="/products/details/:id" element={<ProductDetails/>}/>
        <Route path="/products/update/:id" element={<ProductUpdate/>}/>
        <Route path="/products/delete/:id" element={<ProductDelete/>}/>
        <Route path="/products/insert" element={<AddProduct/>}></Route>
              
    </Routes>
)

export default AppRoute;