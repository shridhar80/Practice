import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import AppRoute from "../routes/route";


const Container =()=>{
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <hr />
        <AppRoute/>
        </BrowserRouter>
        </>
    )
}
export default Container;