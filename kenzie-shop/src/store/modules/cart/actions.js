import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsTypes";

export const addCart = (product) => ({type: ADD_PRODUCT, product})

export const removeCart = (id) => ({type:REMOVE_PRODUCT, id})