var products = [
    {di:1, title: 'Gerbera', description:'weding flower', imageUrl:"", unitPrice:10, quantity: 1000, likes: 1254},
    {di:2, title: 'lily', description:'delicate flower', imageUrl:"", unitPrice:10, quantity: 1000, likes: 1254},
    {di:3, title: 'jasmin', description:'Fregrance flower', imageUrl:"", unitPrice:10, quantity: 1000, likes: 1254},
    {di:4, title: 'rose', description:'Valentine flower', imageUrl:"", unitPrice:10, quantity: 1000, likes: 1254}
];

const ProductsService = {
    getAll(){
        return products;
    },

    getById(id){
        let product= products.find((product)=>(product.id === id));
        return product;
    },

    insert(theProduct){
        products.push(theProduct);
    },

    update(theProduct){
        product = products.filter(prod => prod.id !== theProduct.id);
        product.push(theProduct);
    }

    
}