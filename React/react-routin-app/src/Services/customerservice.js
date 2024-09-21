/* var customers = [
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
        customers.push(customers);
    },

    update(theCustomer){
        customers= customers.filter(Customer=> Customer.id !== theCustomer.id);
        customers.push(theCustomer);
    }
}

export default customerService; */

// Initial data setup
const initialCustomers = [
    { id: 1, email: 'ravi.tambade@transflower.in', password: 'seed', firstname: "Ravi", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password: 'transflower', firstname: "Shubhangi", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password: 'pvg', firstname: "Sanika", lastname: "Bhor", contactnumber: "9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com', password: 'seed', firstname: "Nikhil", lastname: "Navale", contactnumber: "9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password: 'seed', firstname: "Shreedhar", lastname: "Patil", contactnumber: "9881735801" },
    { id: 6, email: 'sharan.kulkarni@gmail.com', password: 'seed', firstname: "Sharan", lastname: "Kulkarni", contactnumber: "9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password: 'seed', firstname: "Kartik", lastname: "Kale", contactnumber: "9881735801" },
    { id: 8, email: 'seema.patil@gmail.com', password: 'seed', firstname: "Seema", lastname: "Patil", contactnumber: "9881735801" },
];

// Save initial data to localStorage if not already present
if (!localStorage.getItem('customers')) {
    localStorage.setItem('customers', JSON.stringify(initialCustomers));
}

const customerService = {
    // Retrieve customers from localStorage
    _getCustomers() {
        return JSON.parse(localStorage.getItem('customers')) || [];
    },

    // Save customers to localStorage
    _saveCustomers(customers) {
        localStorage.setItem('customers', JSON.stringify(customers));
    },

    // Get all customers
    getAllCustomers() {
        return this._getCustomers();
    },

    // Get customer by ID
    getCustomerById(id) {
        const customers = this._getCustomers();
        return customers.find(user => user.id === id);
    },

    // Register a new customer
    register(theUser) {
        const customers = this._getCustomers();
        customers.push(theUser);
        this._saveCustomers(customers);
    },

    // Remove a customer by ID
    remove(id) {
        let customers = this._getCustomers();
        customers = customers.filter(user => user.id !== id);
        this._saveCustomers(customers);
    },

    // Update an existing customer
    update(theCustomer) {
        let customers = this._getCustomers();
        customers = customers.map(customer => 
            customer.id === theCustomer.id ? theCustomer : customer
        );
        this._saveCustomers(customers);
    }
};

export default customerService;
