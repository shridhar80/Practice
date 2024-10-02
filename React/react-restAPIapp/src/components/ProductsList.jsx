import { useEffect, useState } from "react"
import ProductServiceAxios from "../services/ProductServiceAxios";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () => {
            try{
                const data = await ProductServiceAxios.getAllProducts();
                console.log(data);
                setProducts(data);
            }catch(error){
                setError('Failed to fetch products');
            }
        }; 
        fetchProducts();        
    },[]);

    if(error) return <P>{error}</P>


    return(
        <>
        <h1>Products ...</h1>

        <Link to={`/products/insert`}>Insert New Product</Link>
        <ol>
            {
                products.map(product => (
                    <li key={product.id}>{product.title}<Link to={`/products/details/${product.id}`}>Details</Link> |
                                                        <Link to={`/products/update/${product.id}`}>Update </Link> |
                                                        <Link to={`/products/delete/${product.id}`}>Delete</Link>  
                    
                    </li>
                ))
            }
        </ol>
        </>
    )
}

export default ProductList;