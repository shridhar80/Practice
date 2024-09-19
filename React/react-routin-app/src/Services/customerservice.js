var customers = [
    { id: 1, email: 'ravi.tambade@transflower.in', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password:' transflower', firstname:"shubhangi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password:'pvg', firstname:"Sankia", lastname:"Bhor",contactnumber:"9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com', password:'seed', firstname:"nikhil", lastname:"navale",contactnumber:"9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password:'seed', firstname:"shreedhar", lastname:"patil",contactnumber:"9881735801" },
    { id: 6, email: 'Sharan.kulkarni@gmail.com', password:'seed', firstname:"Sharan", lastname:"kulkarni",contactnumber:"9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password:'seed', firstname:"kartik", lastname:"kale",contactnumber:"9881735801" },    
    { id: 8, email: 'seema.patil@gmail.com', password:'seed', firstname:"Rseema", lastname:"patil",contactnumber:"9881735801" },
];

const customerService = {
 
    

    getAllCustomers(){
        return customers;
    },

    getCustomerById(id){
        let user= customers.find((theUser)=>(theUser.id===id));
        return user;
    },

    register(theUser){
        customers.push(theUser);
    },

    remove(id){
        customers=customers.filter(user=> user.id !== id);
        customers.push(theUser);
    },

    update(id){
        customers= customers.filter((theUser)=>theUser.id !== id);
    }
}

export default customerService;