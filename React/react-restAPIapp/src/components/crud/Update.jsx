import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ProductServiceAxios from "../../services/ProductServiceAxios";


const ProductUpdate = () => {
    const nav = useNavigate();
    const {id} = useParams();
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


    const handleChange = (e) =>{
        const { name, value} = e.target;

        setProduct((prevProduct) =>(
            {...prevProduct, [name]: value}
        ))

        console.log(product);        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        ProductServiceAxios.updateProduct(id,product);
        nav("/products");

    }

    return(
        <>
        <h2>Update Product </h2>

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
                    <input type="number" name="price" value={product.unitPrice} onChange={handleChange} />
                </div>

                <div>
                    <lable>Quantity : </lable>
                    <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <button type="submit">Update</button>
                </div>

        </form>
        </>
    )
}

export default ProductUpdate;

/* import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, fetchProductById } from './redux/action';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProductComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.productState.product);

    const [updatedProduct, setUpdatedProduct] = useState({
        id: '',
        title: '',
        description: '',
        unitPrice: '',
        quantity: '',
    });

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (product) {
            setUpdatedProduct({
                id: product.id,
                title: product.title,
                description: product.description,
                unitPrice: product.unitPrice,
                quantity: product.quantity,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(id, updatedProduct));
        navigate('/products');
    };

    return (
        <>
            <h3>Update Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={updatedProduct.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={updatedProduct.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Unit Price:</label>
                    <input
                        type="number"
                        name="unitPrice"
                        value={updatedProduct.unitPrice}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={updatedProduct.quantity}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </>
    );
};

export default UpdateProductComponent;
 */