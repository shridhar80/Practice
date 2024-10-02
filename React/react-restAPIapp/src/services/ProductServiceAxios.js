import axios from "axios";


const baseURL = 'http://localhost:5124/products';

const ProductServiceAxios ={
    getAllProducts : async () =>{
        try {
            const response = await axios.get(baseURL);
            return response.data;

        }catch(error){
            console.error("error fetching products : ", error);
            throw error;
        }
    },

    getProductById : async (id) => {
        try{
            const response = await axios.get(`${baseURL}/${id}`);
            //console.log (response.data);
            return response.data;

        }catch(error){
            console.error(`Error fetching product with id ${id}`,error);
            throw error;
        }
    },

    addProduct: async(product) =>{
        try{
            const response = await axios.post(baseURL, product);
            return response.data;
        }catch(error){
            console.error(`Error creating product : `, error);
            throw error;
        }
    },

    updateProduct : async (id,product) => {
        try{
            const response = await axios.put(`${baseURL}/${id}`,product);
            return response.data;
        }
        catch(error){
            console.error(`Error updating product with id ${id}`,error);
            throw error;
        }
    },

    deleteProduct : async (id) => {
        try{
            await axios.delete(`${baseURL}/${id}`);
        }
        catch(error){
            console.error(`Error deleting product with id : ${id}`, error);
            throw error;
        }
    }
}

export default ProductServiceAxios;