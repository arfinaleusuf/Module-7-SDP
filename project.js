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
        div.classList.add("card")

        div.innerHTML = `
        <img class="card-img" src = "${product.image}"/>
        <h5>${product.title.slice(0, 50)}</h5>
        <h3>${product.price}</h3>
        <p>${product.description.slice(0, 50)}</p>
        <button>details</button>
        <button>add to card</button>
        `;
        productContainer.appendChild(div)
    });
}





loadAllProduct()