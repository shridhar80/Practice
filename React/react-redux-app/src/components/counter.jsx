import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../redux/actions";



function Counter() {
  
const count= useSelector((state)=> state.count);
const dispatch = useDispatch();
  return (
    <>
    <h1>Counter : {count}</h1>

    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    <button onClick={()=>dispatch(increment())}>Increment</button>
     
    </>
  )
}

export default Counter;
