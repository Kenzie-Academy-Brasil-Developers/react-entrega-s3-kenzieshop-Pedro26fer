import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsTypes";

export const addCart = (product) => ({type: ADD_PRODUCT, product})

export const removeCart = (list) => ({type:REMOVE_PRODUCT, list})