import { Link, Outlet } from "react-router-dom"


const Bi=()=>{
return(
    <div>
            <h2>Dashboard</h2>

            <nav>
                <Link to="bar">Bar chart</Link> |
                <Link to="line">Line chart</Link> |
                <Link to="pie">Pie chart</Link> |
            </nav>

            <Outlet/>
    </div>
)

}
export default Bi;