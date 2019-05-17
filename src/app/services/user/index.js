import { UserActionTypes } from './actionTypes';

const initalState = {
    auth: false,
    id: null,
    name: null,
    email: null,
    token: null,
    error: {
        status: false,
        message: ''
    }
};
function user(state = initalState, action){
    const actions = {
        [ UserActionTypes.LOGIN ]: (payload) => {return {...state, ...payload}},
        [ UserActionTypes.LOGOUT ]: (payload) => {return {...state, ...payload}},
        [ UserActionTypes.REGISTER ]: (payload) => {return {...state, ...payload}}
    };
    return !actions[action.type] ? state: actions[action.type](action.payload);
}
export default user;
