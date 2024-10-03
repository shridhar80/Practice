

import ProductServiceAxios from "../services/ProductServiceAxios";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCTS';
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const getProducts = () => {
    return (dispatch) => {
        const products = ProductServiceAxios.getAllProducts();
        dispatch({type: GET_PRODUCTS, payload: products});
    }
}
export const getProductDetails = (id)=>{
    return(dispatch)=>{
        const product = ProductServiceAxios.getProductById(id);
        dispatch({type:GET_PRODUCT_DETAILS, payload:product})
    }
}
export const addProduct = (product) => {
    return(dispatch) => {
        ProductServiceAxios.addProduct(product);
        dispatch({type:ADD_PRODUCT, payload:product});
    }
}

/* export const updateProduct = (id, updatedProduct) => async (dispatch) => {
    try {
        const updatedProd = await ProductServiceAxios.updateProduct(id, updatedProduct);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: updatedProd,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Failed to update product',
        });
    }
}; */
export const updateProduct = (id,product) => {
    return(dispatch) => {
        ProductServiceAxios.updateProduct(id,product);
        dispatch({type: UPDATE_PRODUCT, payload:product});
    }
}
export const deleteProduct = (id)=>{
    return (dispatch)=>{
        ProductServiceAxios.deleteProduct(id);
        dispatch({type:DELETE_PRODUCT, payload:id});
    }
}