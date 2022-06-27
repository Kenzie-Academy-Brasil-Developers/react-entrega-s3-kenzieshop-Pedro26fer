import { useSelector } from "react-redux"
import Product from "../Product"
import { Standard } from "./style"

const Products = () => {

    const listProducts = useSelector(({products}) => products)
    console.log(listProducts)

    return(
        <Standard>
            {listProducts.map((product) => (<li key={product.id}><Product  product={product}/></li>))}            
        </Standard>
    )
}

export default Products