/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductServiceAxios from "../services/ProductServiceAxios";


const ProductDetails = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState('');

    useEffect(() =>{
        const fetch = async () => {
            try{
                const prod = ProductServiceAxios.getProductById(parseInt(id));
                console.log(prod);
                setProduct(prod);
            }catch(error){
                setError('Failed to fetch products');
            }
        };
        fetch();
    },[id]);
    return(
        <>
        <h3>Product Details...</h3>

        <p>Id : {product.id}</p>
        <p>Title : {product.title}</p>
        <p>Description : {product.description}</p>
        <p>Price : $ {product.unitPrice}</p>
        <p>Quantity : {product.quantity}</p>
        </>
    )
}

export default ProductDetails; */


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductServiceAxios from "../../services/ProductServiceAxios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);

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

    return (
        <>
            <h3>Product Details...</h3>
            <p>Id: {product.id}</p>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.unitPrice}</p>
            <p>Quantity: {product.quantity}</p>
        </>
    );
}

export default ProductDetails;
