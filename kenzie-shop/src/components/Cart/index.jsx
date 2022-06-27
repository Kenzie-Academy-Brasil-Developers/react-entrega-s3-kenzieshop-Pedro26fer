import Product from "../Product"
import { useSelector } from "react-redux"

import { CartDiv, ProductsCart } from "./style"

const Cart = () => {

    const listCart = useSelector(({cart}) => cart)

    return(
        <CartDiv>
            <h2>Carrinho</h2>

            <ProductsCart>
                {listCart.length > 0? 
                listCart.map((itemCart) => (<li key={itemCart.id}><Product isItOnCart={true} product={itemCart}/></li>))
                : 
                (<h4>Carrinho vazio</h4>)}
            </ProductsCart>
        </CartDiv>
    )
}

export default Cart