import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './actionTypes';

export function getProducts(){
    return {
        type: GET_PRODUCTS,
        payload: { products: [{
            id:0,
            title:'some title'
        }]}
    };
}
export function addProduct(){
    return {
        type: ADD_PRODUCT,
        payload: { products: []}
    };
}
export function updateProduct(){
    return {
        type: UPDATE_PRODUCT,
        payload: { products: []}
    };
}
export function deleteProduct(){
    return {
        type: DELETE_PRODUCT,
        payload: { products: []}
    };
}