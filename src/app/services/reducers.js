import { combineReducers } from 'redux';
import catalog from './catalog';
import user from './user';

export default combineReducers({
    catalog,
    user
});
