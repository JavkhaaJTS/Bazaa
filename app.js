function prodCart(product) {
    let badgeHTML = '';
    if (product.discount !== null) {
        badgeHTML = `<span class="sale-badge">${product.discount}</span>`;
    } else {
        badgeHTML = '';
}

    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            ${badgeHTML}
            <button class="like-btn">
                <i class="fa-regular fa-heart"></i>
            </button>
            <div class="cart-img" style="background-image: url('${product.image}')"></div>
            <h3 class="name"><a href="${product.link}">${product.name}</a></h3>
            <h4 class="price">${product.price}</h4>
        </div>
    `;
}

function loadAndRenderShop() {
    // 1. Fetch the JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const allProducts = data.products;

            let crazySalesHTML = '';
            let featuredHTML = '';

            for (let i = 0; i < allProducts.length; i++) {
                const currentProduct = allProducts[i];

                if (currentProduct.discount !== null) {
                    crazySalesHTML += prodCart(currentProduct);
                } 
                else {
                    featuredHTML += prodCart(currentProduct);
                }
            }

            document.getElementById('crazy-sales').innerHTML = crazySalesHTML;
            document.getElementById('featured-products').innerHTML = featuredHTML;
        });
}

document.addEventListener('DOMContentLoaded', loadAndRenderShop);


