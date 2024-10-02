import customerService from "../Services/customerservice";

export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const ADD_CUSTOMER ='ADD_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const DELETE_CUSTOMER= 'DELETE_CUSTOMER';

export const getCustomers = ()=>{
    return (dispatch) =>{
        const customers = customerService.getAllCustomers();
        dispatch({type: GET_CUSTOMERS, payload: customers});
    }
}

export const addCustomer = (customer) =>{
    return(dispatch) =>{
        customerService.addCustomer(customer);
        dispatch({type: ADD_CUSTOMER, payload: customer});
    }
}


export const updateCustomer = (customer) =>{
    return (dispatch) => {
        customerService.updateCustomer(customer);
        dispatch({type: UPDATE_CUSTOMER, payload: customer});

    }
}

export const deleteCustomer =(id)=>{
    return(dispatch)=>{
        customerService.deleteCustomer(id);
        dispatch({type:DELETE_CUSTOMER, payload:id});
    }
}