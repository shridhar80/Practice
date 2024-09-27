import { Component } from "react";


class PersonClass extends Component{
   
    constructor(props){

        console.log("constructor..")
        super(props)
        this.state={age:0}
    }
    componentDidMount(){
        console.log("component did mount...")
    }

    increment=()=>{
        this.setState((prevState)=>({age: prevState.age+1}))
    }

    decriment=()=>{
        this.setState((prevState)=>({age: prevState.age-1}))
    }

    shouldComponentUpdate(){
        console.log("should component update..")
        return true; 
    }
    render(){
        return(
            <>
            <button onClick={this.decriment}>-</button>
            <label>Age : {this.state.age}</label>
            <button onClick={this.increment}>+</button>
            
            </>
        )
    }
    componentWillUnmount(){
        console.log("component Will Unmoun..")
    }
}

export default PersonClass;