import { useEffect, useState } from "react"


const PersonFunction = ({a}) =>{
    console.log("counter component initialization..")
    const [age, setAge]=useState(a);

    const increment=()=>{
        setAge(age+1)
        console.log("increment from function..")
    }
    const decrement=()=>{
        setAge(age-1)
        console.log("decrement from function..")
    }

    useEffect(()=>{
        console.log("Use effect hook is called...")
    },[age])

    return(<>
            <button onClick={decrement}>-</button>
           <label> Age : {age}</label>
            <button onClick={increment}>+</button>
    </>)
}
export default PersonFunction;