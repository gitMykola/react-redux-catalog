import { GET_PRODUCTS } from './actionTypes';

const initialState = {
    products: []
};
export default function (state = initialState, action) {
    const actions = {};
    actions[GET_PRODUCTS] = action => {
        return {
            ...state,
            products: action.payload
        };
    };
return !actions[action.type] ? state
    : {
        ...state,
        products: action.payload
    };
}