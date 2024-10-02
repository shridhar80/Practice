/* import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ProductServiceAxios from "../services/ProductServiceAxios";


const ProductDelete = () => {
    const {id} = useParams();
    const[product, setProduct] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetch = async () => {
            try {
                const prod = await ProductServiceAxios.getProductById(parseInt(id));
                console.log(prod);
                setProduct(prod);
            } catch (error) {
                setError('Failed to fetch product');
            }
        };
        fetch();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    const handleYes = () =>{
        let productId = parseInt(id);
        ProductServiceAxios.deleteProduct(productId);
        navigate("/products");
    }

    const handleNo = () =>{
         navigate("/products");
    }

    return(
        
        <>
        <h3>Product Details...</h3>

            <p>Id : {product.id}</p>
            <p>Title : {product.title}</p>
            <p>Description : {product.description}</p>
            <p>Price : $ {product.unitPrice}</p>
            <p>Quantity : {product.quantity}</p>

            <button onClick={handleYes}> Yes</button>
            <button onClick={handleNo}>No</button>
        </>
    )
}
export default ProductDelete; */


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductServiceAxios from "../services/ProductServiceAxios";

const ProductDelete = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            try {
                const prod = await ProductServiceAxios.getProductById(parseInt(id));
                console.log(prod);
                setProduct(prod);
            } catch (error) {
                setError('Failed to fetch product');
            }
        };
        fetch();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    const handleYes = async () => {
        try {
            await ProductServiceAxios.deleteProduct(parseInt(id));
            navigate("/products");
        } catch (error) {
            setError('Failed to delete product');
        }
    };

    const handleNo = () => {
        navigate("/products");
    };

    return (
        <>
            <h3>Product Details...</h3>
            <p>Id: {product.id}</p>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.unitPrice}</p>
            <p>Quantity: {product.quantity}</p>

            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
        </>
    );
};

export default ProductDelete;
