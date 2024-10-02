 /* import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ProductServiceAxios from "../services/ProductServiceAxios";



const AddProduct = () =>{
    const nav = useNavigate();
    const [product, setProduct] = useState({
     id: '',
        title: '',
        description: '',
        unitPrice: '',
        quantity: ''});
    const handleChange = (e) => {
        const {name, value} = e.target;

        setProduct((prevProduct) =>(
            {...prevProduct, [name]:value}
        ))
        console.log(product)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        ProductServiceAxios.addProduct(product);
        nav("/products");
    }

    return(
        <>
        <h3>Insert new Product..</h3>
        <form onSubmit={handleSubmit}>

        <div>
                    <lable>Enter Id : </lable>
                    <input type="number" name="id" value={product.id} onChange={handleChange} />
                </div>
                <div>
                    <lable>Enter Title: </lable>
                    <input type="text" name="title" value={product.title} onChange={handleChange} />
                </div>
                <div>
                    <lable>Description : </lable>
                    <input type="text" name="description" value={product.description} onChange={handleChange} />
                </div>
                <div>
                    <lable>Unit Price : </lable>
                    <input type="number" name="unitPrice" value={product.unitPrice} onChange={handleChange} />
                </div>

                <div>
                    <lable>Quantity : </lable>
                    <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <button type="submit">Add</button>
                </div>

        </form>
        
        </>
    )
}

export default AddProduct;  */


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductServiceAxios from "../services/ProductServiceAxios";

const AddProduct = () => {
    const nav = useNavigate();
    const [product, setProduct] = useState({
        id: '',
        title: '',
        description: '',
        unitPrice: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct, 
            [name]: value 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ProductServiceAxios.addProduct(product);
            nav("/products");
        } catch (error) {
            console.error("Failed to add product:", error);
        }
    };

    return (
        <>
            <h3>Insert New Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter Id:</label>
                    <input type="number" name="id" value={product.id} onChange={handleChange} required />
                </div>
                <div>
                    <label>Enter Title:</label>
                    <input type="text" name="title" value={product.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={product.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Unit Price:</label>
                    <input type="number" name="unitPrice" value={product.unitPrice} onChange={handleChange} required />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
                </div>
                <br />
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    );
};

export default AddProduct; 
