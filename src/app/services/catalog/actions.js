import { CatalogActionTypes } from './actionTypes';
import { setActionError } from '../../libs/utils';

export const getProducts = () => {
    return {
        type: CatalogActionTypes.GET_PRODUCTS,
        payload: fetch(process.env.REACT_APP_API_URL + 'products')
            .then(response => response.json()),
        error: setActionError()
    };
};
export const addProduct = () => {
    return {
        type: CatalogActionTypes.ADD_PRODUCT,
        payload: [],
        error: setActionError()
    };
};
export function updateProduct(){
    return {
        type: CatalogActionTypes.UPDATE_PRODUCT,
        payload: {
            products: [{
                id:0,
                title:'some title'
            }],
            error: setActionError()
        }
    };
}
export function deleteProduct(){
    return {
        type: CatalogActionTypes.DELETE_PRODUCT,
        payload: {
            products: [{
                id:0,
                title:'some title'
            }],
            error: setActionError()
        }
    };
}
