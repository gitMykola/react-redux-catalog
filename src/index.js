import React from 'react';
import ReactDOM from 'react-dom';
// TODO check why App don't render without full import path
import App from './app/components/App/App';
import './index.css';
import createStore from 'redux';
import rootReducer from './app/services/catalog/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
