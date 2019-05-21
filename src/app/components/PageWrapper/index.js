import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

class PageWrapper extends Component{
    render(){
        return (
        <React.Fragment>
            <Header />
            <this.props.child />
            <Footer />
        </React.Fragment>);
    }
}
export default PageWrapper;