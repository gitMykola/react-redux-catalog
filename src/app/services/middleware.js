import {
    isPromise,
    setActionError
} from '../libs/utils';

export const promiseMiddleware = store => next => action => {
    if(isPromise(action.payload)){
        action.payload
            .then(payload => {
                action.error = setActionError();
                action.payload = { ...payload };
                store.dispatch(action);
            })
            .catch(error => {
                action.error = setActionError(error.message);
                action.payload = {};
                store.dispatch(action);
            });
        return true;
    } else next(action);
};
