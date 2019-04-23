export class Product{
    constructor(data){
        this.id = !!data.id ? data.id : null;
        this.title = !!data.title ? data.title : null;
        this.category = !!data.category ? data.category: null;
        this.description = !!data.description ? data.description : null;
        this.price = !!data.price ? data.price : null;
        this.imageUrl = !!data.imageUrl ? data.imageUrl : null;
    }
}