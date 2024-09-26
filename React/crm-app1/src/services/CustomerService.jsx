// src/services/CustomerService.js
const initialCustomers = [
    { id: 1, email: 'ravi.tambade@transflower.in',  firstName: "Ravi", lastName: "Tambade", contactNumber: "9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in',  firstName: "Shubhangi", lastName: "Tambade", contactNumber: "9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', firstName: "Sanika", lastName: "Bhor", contactNumber: "9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com', firstName: "Nikhil", lastName: "Navale", contactNumber: "9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com', firstName: "Shreedhar", lastName: "Patil", contactNumber: "9881735801" },
    { id: 6, email: 'sharan.kulkarni@gmail.com', firstName: "Sharan", lastName: "Kulkarni", contactNumber: "9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', firstName: "Kartik", lastName: "Kale", contactNumber: "9881735801" },
    { id: 8, email: 'seema.patil@gmail.com', firstName: "Seema", lastName: "Patil", contactNumber: "9881735801" },
];


if (!localStorage.getItem('customers')) {
    localStorage.setItem('customers', JSON.stringify(initialCustomers));
}


class CustomerService {
    static getAllCustomers() {
        return JSON.parse(localStorage.getItem('customers')) || [];
    }

    static getCustomerById(id) {
        const customers = this.getAllCustomers();
        return customers.find(customer => customer.id === id);
    }

    static addCustomer(customer) {
        const customers = this.getAllCustomers();
        const maxId = customers.reduce((max, curr) => (curr.id > max ? curr.id : max), 0);
        customer.id = maxId + 1;
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
    }

    static updateCustomer(updatedCustomer) {
        const customers = this.getAllCustomers();
        const index = customers.findIndex(customer => customer.id === updatedCustomer.id);
        if (index !== -1) {
            customers[index] = updatedCustomer;
            localStorage.setItem('customers', JSON.stringify(customers));
        }
    }

    static deleteCustomer(id) {
        let customers = this.getAllCustomers();
        console.log(id);
        customers = customers.filter(customer => customer.id !== Number(id));
        console.log(customers);
        localStorage.setItem('customers', JSON.stringify(customers));
        console.log("delelted for service..");
    }
}

export default CustomerService;
