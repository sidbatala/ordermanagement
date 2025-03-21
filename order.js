document.addEventListener("DOMContentLoaded", function() {
    const orders = [
        { id: 1, customer: 'John Doe', status: 'Shipped', total: 200 },
        { id: 2, customer: 'Jane Smith', status: 'Pending', total: 150 }
    ];

    function renderOrders() {
        const orderList = document.getElementById("orderList");
        orderList.innerHTML = "";
        orders.forEach(order => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.status}</td>
                <td>$${order.total}</td>
                <td><button onclick="editOrder(${order.id})">Edit</button></td>
            `;
            orderList.appendChild(row);
        });
    }

    document.getElementById("addOrderBtn").addEventListener("click", function() {
        const newOrder = { id: orders.length + 1, customer: 'New Customer', status: 'Pending', total: 100 };
        orders.push(newOrder);
        renderOrders();
    });

    renderOrders();
});

function editOrder(id) {
    alert('Editing order with ID: ' + id);
}
