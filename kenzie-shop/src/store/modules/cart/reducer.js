import { ADD_PRODUCT, REMOVE_PRODUCT } from "../cart/actionsTypes"

const cartReducer = (state = JSON.parse(localStorage.getItem("cart")) || [], action) => {
    switch(action.type){
        case ADD_PRODUCT:

            const { product } = action
            return [...state, product]

            
        case REMOVE_PRODUCT:
            
            const { list } = action
            
            
            return list
            
            default:
                return state
    }
}

export default cartReducer