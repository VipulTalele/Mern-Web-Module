const productArr = [
    { pid: 1001, prodName: "Gaming headset", price: 3000, category: "Headset" },
    { pid: 1002, prodName: "Toy Car", price: 1500, category: "Toys" },
    { pid: 1003, prodName: "Laptop Stand", price: 1200, category: "Accessories" }
];

function displayProducts() {
    let table = "<table border='1' cellpadding='5'><tr><th>ID</th><th>Name</th><th>Price</th><th>Category</th></tr>";

    productArr.forEach(product => {
        table += `<tr>
                    <td>${product.pid}</td>
                    <td>${product.prodName}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                  </tr>`;
    });

    table += "</table>";

    document.getElementById("output").innerHTML = table;
}

displayProducts();
