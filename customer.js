document.addEventListener("DOMContentLoaded", function() {
    // Sample customers
    const customers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
    ];

    // Function to render customers
    function renderCustomers() {
        const customerList = document.getElementById("customerList");
        customerList.innerHTML = "";
        customers.forEach(customer => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td><button onclick="editCustomer(${customer.id})">Edit</button></td>
            `;
            customerList.appendChild(row);
        });
    }

    // Add Customer Button
    document.getElementById("addCustomerBtn").addEventListener("click", function() {
        const newCustomer = { id: customers.length + 1, name: 'New Customer', email: 'new@example.com', phone: '000-000-0000' };
        customers.push(newCustomer);
        renderCustomers();
    });

    // Render initial customers
    renderCustomers();
});

// Edit Customer (just a simulation)
function editCustomer(id) {
    alert('Editing customer with ID: ' + id);
}
