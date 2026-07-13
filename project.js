const loadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            displayProduct(data)
        });
}

const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container")
    products.forEach(product => {
        const div = document.createElement("div");

        div.innerHTML = `
        <img src = ""/>
        <h5>h</h5>
        <p></p>
        <button>details</button>
        <button>add to cart</button>
        `;
        productContainer.appendChild(div)
    });
}





loadAllProduct()