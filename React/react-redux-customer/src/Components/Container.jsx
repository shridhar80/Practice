import { BrowserRouter } from "react-router-dom"
import Navbar from "./NavBar"
import AppRoute from "../Routes/route"


const Container = () =>{
    return(
        <div>
                <BrowserRouter>
                <Navbar/>
                <hr/>
                <AppRoute/>
                </BrowserRouter>
        </div>
    )
}
    
export default Container;