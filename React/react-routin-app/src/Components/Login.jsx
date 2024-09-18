import { useState } from "react";
import AuthService from "../Services/authService";

function Login(){
    

        const [email, setEmail] = useState();
        const [password , setPassword] = useState();

        const onChangeEmail = (event) =>{
            setEmail(event.target.value);
        }
        const onChangePassword = (event) =>{
            setPassword(event.target.value);
        }

        const onLogin=(event)=>{
            try{
                let status = false;
                console.log(email, password);
                status = AuthService.validate(email, password);
                if(status){
                    console.log("login successfull....");
                }else{console.log("login failed....");}
            }
            catch(errr){
                console.log(errr);
            }
        }
    
    return(
        <>
        <div>
        
        <table>
        <tr>
        <td> Email :  </td>
        <td><input type="email" value={email} onChange={onChangeEmail}></input></td>
        </tr>

        <tr>
        <td> Password :  </td>
        <td><input type="password" value={password} onChange={onChangePassword}></input></td>
        </tr>

        <tr>
         <td><button onClick={onLogin}>LogIn</button></td>
        </tr>
        </table>
       
        </div>
        </>
    )
}

export default Login;