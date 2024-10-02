import { Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductsList";
import ProductDetails from "../components/ProductDetails";
import ProductDelete from "../components/Delete";
import ProductUpdate from "../components/Update";
import AddProduct from "../components/AddProuduct";

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