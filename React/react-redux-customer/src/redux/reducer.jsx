
import { ADD_CUSTOMER, DELETE_CUSTOMER, GET_CUSTOMERS, UPDATE_CUSTOMER } from "./action";

const initialState = {
    customers: []
}


const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return { ...state, customers: action.payload };

        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }

        case UPDATE_CUSTOMER:
            return { ...state, customers: state.customers.map((customer)=>customer.id === action.payload.id ? action.payload:customer) };

        case DELETE_CUSTOMER:
            return { ...state, customers: state.customers.filter((customer)=> customer.id !== action.payload) };
    
        default: return state;
        }
}

export default CustomerReducer;