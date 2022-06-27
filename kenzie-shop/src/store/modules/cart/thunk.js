import { addCart, removeCart } from "./actions"



export const addProductThunk = (product) => (dispatch) => {
    const oldProducts = JSON.parse(localStorage.getItem("cart")) || []

    oldProducts.push(product)

    localStorage.setItem("cart", JSON.stringify(oldProducts))

    dispatch(addCart(product))
}

export const removeCartThunk = (id) => (dispatch, getStore) => {

    const { cart } = getStore()

    const list =  cart.filter((prod) => prod.id !== id)

    localStorage.setItem("cart", JSON.stringify(list))

    dispatch(removeCart(list))
}

