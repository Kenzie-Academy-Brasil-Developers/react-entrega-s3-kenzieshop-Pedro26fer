import { ADD_PRODUCT, REMOVE_PRODUCT } from "../cart/actionsTypes"

const cartReducer = (state = [], action) => {
    switch(action.type){
        case ADD_PRODUCT:

            const { product } = action
            return [...state, product]

            
        case REMOVE_PRODUCT:
            
            const { id } = action
            const newList = state.filter((prod) => prod.id !== id)
            
            return newList
            
            default:
                return state
    }
}

export default cartReducer