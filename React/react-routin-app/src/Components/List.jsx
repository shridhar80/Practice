import ProductsService from "../Services/productService";
import Details from "./Details";

function List(){
    const flowers = ProductsService.getAll();
    return(
        <>
          <div>
            <table>
                <tr>
                    {flowers.map((flower) =>(
                        <td><Details product={flower}/></td>
                    ))}
                </tr>
            </table>
          </div>
        </>
    )
}
export default List;