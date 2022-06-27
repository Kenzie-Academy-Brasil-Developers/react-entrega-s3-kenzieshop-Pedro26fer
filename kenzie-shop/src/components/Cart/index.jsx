import { useSelector } from "react-redux"
import CardCart from "../CardCart"
import {HiOutlineShoppingCart } from 'react-icons/hi'

import { CartDiv, NoItem, ProductsCart } from "./style"

const Cart = () => {

    const listCart = useSelector(({cart}) => cart)

    return(
        <CartDiv>
            <ProductsCart>
                {listCart.length > 0? 
                listCart.map((itemCart) => (<li key={itemCart.id}><CardCart product={itemCart}/></li>))
                : 
                (<NoItem>
                    <h4>Carrinho vazio </h4>
                    <h4> <HiOutlineShoppingCart/> </h4>
                </NoItem>)}
            </ProductsCart>
        </CartDiv>
    )
}

export default Cart