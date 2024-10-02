import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ProductServiceAxios from "../services/ProductServiceAxios";


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
        ProductServiceAxios.updateProduct(product);
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