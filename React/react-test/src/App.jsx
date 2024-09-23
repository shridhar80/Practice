import { useEffect, useState } from 'react';
import EventEmitter from 'eventemitter3';
const emitter = new EventEmitter();
function Publisher(){
 
  const[text, setText]= useState('');
  const handleChange=(e)=>{
    setText(e.target.value);
   // emitter.emit('update',text);
  };
  const handleClick=(e)=>{
    emitter.emit('update',text);
  };


  return(<>
   <h3>Publisher</h3>

   <input type="text" value={text} onChange={handleChange}/>
   <button onClick={handleClick}>Publish Data</button>
  </>)
}

function Subscriber(){
  const [data, setData]=useState('');
  

  useEffect(()=>{

    const handleUpdate = (newData)=>{
      setData(newData);
    };
    emitter.on('update', handleUpdate)
    return ()=>{
      emitter.off('update', handleUpdate);
    }
  },[]);
  return(
    <>
     <h3>Subscriber</h3>
     <p>
      Data Received : {data}
     </p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>component communication</h1>

      <table>
        <tr>
          <td><Publisher/></td>
          <td><Subscriber/></td>
        </tr>

        <tr>
          <td><Subscriber/></td>
          <td><Subscriber/></td>
        </tr>
      </table>
      
    </>
  )
}

export default App
