console.log("from crud.js");
class ProductService{
    constructor(){
        this.products=[];
    }
 
    getAll(){
        return this.products;
    }
 
    getById(productId){
       const product= this.products.find(p=>p.id === productId)
       return product;
    }
 
    create(product){
        this.products.push(product);
    }
 
    update(product){
 
         const prod = this.products.find(p=> p.id === product.id);
        if(prod ==true)
        {
           this.products[prod] = product;
        } 
           else {
            console.log("Product not found with id " + product.id);
        }
        
 
    }
 
    remove(productId){
        const productIndex=this.products.findIndex(p=>p.id ==productId);
        if(productIndex === -1){
            console.log("Product not found with id "+ productId)
        }
        //remove the product from the array
        const deletedProduct=this.products.slice(productIndex,1)[0];
        return deletedProduct;
    }
}
 
document.getElementById('update').addEventListener('click', () => {
    const product = {
        id: parseInt(document.getElementById('id').value),
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        unitPrice: parseFloat(document.getElementById('unitprice').value),
        stockAvailable: parseInt(document.getElementById('stockavailable').value)
    };
    productService.update(product);
    console.log("Product updated", product);
});