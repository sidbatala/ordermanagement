document.addEventListener("DOMContentLoaded", function() {
    // Sample products
    const products = [
        { id: 1, name: 'Product 1', price: 50, stock: 10 },
        { id: 2, name: 'Product 2', price: 30, stock: 20 }
    ];

    // Function to render products
    function renderProducts() {
        const productList = document.getElementById("productList");
        productList.innerHTML = "";
        products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.stock}</td>
                <td><button onclick="editProduct(${product.id})">Edit</button></td>
            `;
            productList.appendChild(row);
        });
    }

    // Add Product Button
    document.getElementById("addProductBtn").addEventListener("click", function() {
        const newProduct = { id: products.length + 1, name: 'New Product', price: 60, stock: 5 };
        products.push(newProduct);
        renderProducts();
    });

    // Render initial products
    renderProducts();
});

// Edit Product (just a simulation)
function editProduct(id) {
    alert('Editing product with ID: ' + id);
}
