import React, { Component } from 'react';
import logo from '../../../../src/logo.svg';
import './App.css';
import Catalog from '../Catalog';
import NewProduct from '../NewProduct';
import NoMatch404 from '../NoMatch404';
import PageWrapper from '../PageWrapper';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={()=> <PageWrapper child={Catalog}/>} />
          <Route path="/newProduct" render={()=> <PageWrapper child={NewProduct}/>} />
          <Route component={NoMatch404} />
        </Switch>      
      </Router>
    );
  }
}

export default App;
