import { UserActionTypes } from './actionTypes';
import { sendData, setActionError } from '../../libs/utils';

export const login = (email, password) => {
    return {
        type: UserActionTypes.LOGIN,
        payload: sendData(
            {
                email: email,
                password: password
            },
            process.env.REACT_APP_API_URL + 'users/login'
        ),
        error: setActionError()
    };
};
