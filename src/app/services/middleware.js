import {
    isPromise,
    setActionError
} from '../libs/utils';

export const promiseMiddleware = store => next => action => {
    if(isPromise(action.payload)){
        action.payload
            .then(response => response.json())
            .then(response => {
                action.error = setActionError();
                action.payload = { ...response };
                store.dispatch(action);
            })
            .catch(error => {
                action.error = setActionError(error.message);
                store.dispatch(action);
            });
        return true;
    } else next(action);
};
