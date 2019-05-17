import { CatalogActionTypes } from './actionTypes';

const initalState = {
    products: [],
    error: {
        status: false,
        message: ''
    }
};
function catalog(state = initalState, action){
    const actions = {
        [ CatalogActionTypes.GET_PRODUCTS ]: (payload) => {return {...state, ...payload}},
        [ CatalogActionTypes.UPDATE_PRODUCT ]: (payload) => {return {...state, ...payload}},
        [ CatalogActionTypes.ADD_PRODUCT ]: (payload) => {return {...state, ...payload}},
        [ CatalogActionTypes.DELETE_PRODUCT ]: (payload) => {return {...state, ...payload}}
    };
    return !actions[action.type] ? state: actions[action.type](action.payload);
}
export default catalog;
