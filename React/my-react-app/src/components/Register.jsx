import {useState} from "react";
import AutheService from "../services/authService";
 
function Register(){
 
    
    const[id,setId] = useState('');
    const[fname,setFname] = useState('');
    const[lname,setLname] = useState('');
    const[contact,setContact] = useState('');
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
 
  
 
    const onChangeId=(event)=>{
        setId(event.target.value);
      }
      const onChangeFname=(event)=>{
        setFname(event.target.value);
      }
      const onChangeLname=(event)=>{
        setLname(event.target.value);
      }
      const onChangeContact=(event)=>{
        setContact(event.target.value);
      }
    const onChangeEmail = (event) => {
        setEmail(event.target.value); 
    }
 
    const onChangePassword=(event)=>{
        setPassword(event.target.value);
      }
     
 
      const onRegister = (event) =>{
 
        console.log("On Register method is getting invoked.....");
 
        try{
 
            var theUser = {'id':id,'firstname': fname,'lastname':lname,'contactnumber':contact,'email':email,'password':password};
            AutheService.register(theUser);
            console.log("NewUser : " + theUser.id +  "  " + theUser.firstname +  " " + theUser.lastname);
        }
 
        catch(error){
            console.log(error);
        }
      }
 
 
      return(
 
        <>
       
            <div>
                <lable>Enter Id : </lable>
                <input type="number" value={id} onChange={onChangeId}/>
            </div>
            <div>
                <lable>Enter First Name : </lable>
                <input type="text" value={fname} onChange={onChangeFname}/>
            </div>
            <div>
                 <lable>Enter Last Name : </lable>
                 <input type="text" value={lname} onChange={onChangeLname}/>    
            </div>
            <div>
                <lable>Enter email : </lable>
                <input type="email" value={email} onChange={onChangeEmail}/>
            </div>
            <div>
                <lable>Enter Password : </lable>
                <input type="password" value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <lable>Enter Contact : </lable>
                <input type="text" value={contact} onChange={onChangeContact}/>
            </div>
            <br/>
            <div>
                    <button onClick={onRegister}>Register</button>
            </div>
 
           
        </>
      )
}
 
export default Register;