import { Link } from "react-router-dom";


const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/aboutUs">About Us</Link> |
        <Link to="/list">List</Link> |
        <Link to="/login">Log In</Link> |
        <Link to="/register">Register</Link> |
        <Link to="/customers">Customers</Link> |
        <Link to="/bi">BI</Link> 
    </nav>

)

export default Navbar;