import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../services/catalog/actions';

class Catalog extends Component{
    componentDidMount(){
        this.props.getProducts();
     }
    render(){
        const { products } = this.props;
        return (
            <div className="catalog-product">{products.length > 0 && (
                products.map(product => (
                    <div key={product.id}>{product.title}</div>
                ))                
            )}
            </div>
        );
    }
}
Catalog.propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    products: state.catalog.products
});
export default connect(mapStateToProps, {
    getProducts
 })(Catalog);
