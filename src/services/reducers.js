import { combineReducers } from 'redux';
import catalogReducer from './Catalog/reducer';

export default combineReducers({
    catalog: catalogReducer
});