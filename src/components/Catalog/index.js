import React, { Component } from 'react';
import { connect } from 'react-redux';
import Top from '../Top';
import { getProducts } from '../../services/Catalog/actions';

import PropTypes from 'prop-types';

export class Catalog extends Component {
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired
    };
    componentDidMount() {
        this.props.getProducts(null, null);
    }
    componentWillReceiveProps(nextProps) {
        //console.log('NextProp');
        //this.props.getProducts(null, null);
    };
    render() {
        const { products } = this.props;
        return (
            <div className="base-block">
                <Top />
                <ProductList products={products} />
            </div>
            );
    }
}
const ProductList = ({ products }) => {
    return products.map(p => {
        return <div className="product" key={p.id}>
            <p>{p.id}</p>
            <p>{p.name}</p>
            <p>{p.price}</p>
        </div>
    })
};
const mapStateToProps = state => ({
    products: state.catalog.products
});
export default connect(
    mapStateToProps,
    { getProducts }
)(Catalog);