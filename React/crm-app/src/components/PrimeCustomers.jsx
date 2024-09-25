import React, { useContext } from 'react';
import CustmerContext from '../context/CustmerContext';

//state less component

function PrimeCustomers() {
  const { primeCustomer, removeItem, getTotalPrimeCustomer } = useContext(CustmerContext);
  return (
    <div>
      <h2>Pime Customers</h2>
      <hr/>
    
      {primeCustomer.length === 0 ? (<p>empty</p>) : (
        <ul>
          {primeCustomer.map((item) => (
                      <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                      </li>
          ))}
        </ul>
      )}
      <hr/>
      <h3>Total Prime Customers : {getTotalPrimeCustomer}</h3>
    </div>
  );
}

export default PrimeCustomers;