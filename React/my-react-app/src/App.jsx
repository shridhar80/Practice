import { useState } from 'react'
import List from './components/List';
import Login from './components/Login';


function App() {
  const [count, setCount] = useState(0)

  let title= "Transflower";

  let student = {
    firstName:'shridhar', lastName:'patil', email:'shridhar@gmail.com',
    constact:'9284573221'
  }

  return (
    <>
      
      <h1>Wel Come</h1>
      <p>{title}</p>
      <p>Hello <b>{student.firstName+" "+student.lastName}</b></p>
      <p>Email : {student.email}</p>
      <p>Contact Number : {student.constact}</p>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <List/>
      <Login/>
    </>
  )
}

export default App
