import {
    GET_PRODUCTS,
    UPDATE_PRODUCT,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from './actionTypes';
const initalState = {
    products: []
};
function catalog(state = initalState, action){
    const actions = {
        GET_PRODUCTS: (payload) => {return {...state, ...{products: payload}}},
        UPDATE_PRODUCT: (payload) => {return {...state, ...{products: payload}}},
        ADD_PRODUCT: (payload) => {return {...state, ...{products: payload}}},
        DELETE_PRODUCT: (payload) => {return {...state, ...{products: payload}}}
    };
    console.dir(actions);
    return !actions[action.type] ? state: actions[action.type(action.payload)];
};
export default catalog;