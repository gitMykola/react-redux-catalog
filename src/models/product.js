export class Product {
    id = null;
    name = null;
    price = null;
    constructor(data) {
        this.id = !!data.id ? data.id : null;
        this.name = !!data.name ? data.name : null;
        this.price = !!data.price ? data.price : null;
    }
};