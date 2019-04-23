import * as Products from '../assets/products.json';
import { Product } from '../models/product';

export const ProductService = {
    getProducts() {
        return Products.default.map(p => new Product(p));
    }
};