import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { promiseMiddleware } from './middleware';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default initialState => {
    initialState =
        JSON.parse(window.localStorage.getItem('state'))
        || initialState;
    const middleware = () => (process.env.NODE_ENV === 'development')
        ? applyMiddleware(thunk, promiseMiddleware, logger): applyMiddleware(thunk, promiseMiddleware);

    const store = createStore(
        rootReducer,
        initialState,
        compose( middleware() )
    );

    store.subscribe(() => {
        const state = store.getState();
        const persist = {
            catalog: state.catalog
        };

        window.localStorage.setItem('state',
            JSON.stringify(persist));
    });

    return store;
};
