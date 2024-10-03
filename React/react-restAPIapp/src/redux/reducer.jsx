
import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_DETAILS, GET_PRODUCTS, UPDATE_PRODUCT } from "./action"

const initialState = {products:[]}

const ProductReducer = (state= initialState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return{ ...state, products: action.payload};
        case GET_PRODUCT_DETAILS:
            return{...state, products: state.products.map((product)=>product.id === action.payload.id)}
        case ADD_PRODUCT: 
            return {...state, products: [...state, action.payload]};
        case UPDATE_PRODUCT:
            return {...state, products: state.products.map((product)=>product.id === action.payload.id ? action.payload:product)};
        case DELETE_PRODUCT:
            return{...state, products: state.products.filter((product)=>product.id !== action.payload)};
        default: return state; 
    }
}
export default ProductReducer;

