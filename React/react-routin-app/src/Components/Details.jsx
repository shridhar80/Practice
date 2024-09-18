
const Details = (props)=>{
    return(
        <div>
            <img src={props.product.imageUrl} width="100" height="100"/>
            <p>{props.product.title}</p>
            <p>{props.product.unitprice}</p>
            <p>Stock Availabel : {props.product.quantity}</p>
            <p>Likes : {props.product.likes}</p>
        </div>
    )
}

export default Details;