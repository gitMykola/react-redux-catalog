import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';

class Catalog extends Component{
    componentDidMount(){ }
    render(){
        const { products } = this.props;
        return (
            <div>{products.length > 0 && (
                products.map(product => (
                    <div key={product.id}>{product.title}</div>
                ))                
            )}</div>
        );
    }
}
Catalog.propTypes = {
    products: PropTypes.array.isRequired
};
function mapStateToProps(state){
    return {
        products: state.catalog.products
    };
}
export default connect(mapStateToProps)(Catalog);