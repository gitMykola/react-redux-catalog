import { ProductService } from '../products.service';

import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT
} from './actionTypes';

export const getProducts = (
    filterCriterias,
    sortBy
) => {
    return {
        type: GET_PRODUCTS,
        payload: ProductService.getProducts()
    };
}