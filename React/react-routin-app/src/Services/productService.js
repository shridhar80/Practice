var products = [
    {di:1, title: 'Gerbera', description:'weding flower', imageUrl:"/flowers/gerbera.jpg", unitPrice:10, quantity: 1000, likes: 1254},
    {di:2, title: 'lily', description:'delicate flower', imageUrl:"../flowers/lily.jpg", unitPrice:10, quantity: 4521, likes: 3654},
    {di:3, title: 'jasmin', description:'Fregrance flower', imageUrl:"../../flowers/jasmine.jpg", unitPrice:10, quantity: 2015, likes: 9658},
    {di:4, title: 'rose', description:'Valentine flower', imageUrl:"../flowers/rose.jpg", unitPrice:10, quantity: 1475, likes: 1596}
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
        products = products.filter(prod => prod.id !== theProduct.id);
        products.push(theProduct);
    },
    
    remove(id){
        products=products.filter(product=>product.id !==id);
    }

    
}
export default ProductsService;