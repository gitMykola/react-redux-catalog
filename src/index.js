import React from 'react';
import ReactDOM from 'react-dom';
// TODO check why App don't render without full import path
import App from './app/components/App/App';
//import './index.css';
import { Provider } from 'react-redux';
import store from './app/services/store';
//const store = createStore(rootReducer);
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#663388',
    },
    secondary: {
      main: '#ff33cc',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <Provider store={store({})}>
  <App />
  </Provider></MuiThemeProvider>,
  document.getElementById('root')
);
