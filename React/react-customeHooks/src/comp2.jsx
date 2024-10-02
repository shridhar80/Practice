import UseCounter from "./comp1"


const RatingCountr=()=>{
    const{count, increment, decrement, reset} = UseCounter(0);
    return(
        <>
        <h1>Rating : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default RatingCountr;