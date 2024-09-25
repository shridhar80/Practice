import React, { useContext, useEffect, useState } from 'react';
import CustmerContext from '../context/CustmerContext';
import customerService from '../services/CustomerService';

function Customer({ id, name, email, contact }) {
  const { addItem } = useContext(CustmerContext);
  const [customer, setCustomer]= useState('');
  useEffect(()=>{
    const existingcustomer = customerService.getCustomerById(parseInt(id));
    if(existingcustomer){
      setCustomer(existingcustomer);
    }
  },[id])

  const handleAddToPrimeCustomer = () => {
    addItem({ id, name, email, contact });
  };

  return (
    <div>
       <p>{id}</p>
       <p>{name}</p>
       <p>{email}</p>
       <p>{contact}</p>
       <button onClick={handleAddToPrimeCustomer}>Add to Prime</button>
    </div>
  );
}

export default Customer;