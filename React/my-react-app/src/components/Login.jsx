function Login(){
    const onLongin=(event)=>{
        event.preventdefault();
        console.log("on validate method .....");
    }
    return(
        <>
        <div>
        <form onSubmit={onLongin}>
        <table>
        <tr>
        <td> Email :  </td>
        <td><input type="email"></input></td>
        </tr>

        <tr>
        <td> Password :  </td>
        <td><input type="password" ></input></td>
        </tr>

        <tr>
         <td><button type="submit"></button></td>
        </tr>
        </table>
        </form>
        </div>
        </>
    )
}

export default Login;