document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: 'Product 1', price: 50, stock: 10 },
        { id: 2, name: 'Product 2', price: 30, stock: 20 }
    ];

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

    document.getElementById("addProductBtn").addEventListener("click", function() {
        const newProduct = { id: products.length + 1, name: 'New Product', price: 60, stock: 5 };
        products.push(newProduct);
        renderProducts();
    });

    renderProducts();
});

function editProduct(id) {
    alert('Editing product with ID: ' + id);
}
