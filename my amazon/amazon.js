genProducts = '';
products.forEach(product => {
    let html = `
        <section class="product">
            <div class="product-image">
                <img src="${product.image}" alt="" class="product-img">
            </div>
            <div class="product-details">
                <div class="product-name">
                    ${product.name}
                </div>
                <div class="ratings">
                    <img src="images/ratings/rating-${(product.ratings.stars) * 10}.png" alt="" class="rating-img">
                    <div class="rating-count">${product.ratings.count}</div>
                </div>
                <div class="price">$${((product.priceCents) / 100).toFixed(2)}</div>
                <select class="counts">
                    <option selected value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <button class="add-to-cart-button js-cart-button"
                data-product-id="${product.id}">Add to cart</button>
            </div>
        </section>
    `
    genProducts += html
});
document.querySelector('.grid-body').innerHTML = genProducts;
let cartQuantity = 0;
let cart = [];
let sameId;

document.querySelectorAll('.js-cart-button').forEach(button => {
    const productId = button.dataset.productId;
    button.addEventListener('click', () => {
        cartQuantity ++;
        document.querySelector('.count').innerHTML = cartQuantity;
        let matchingItem;

        cart.forEach(item => {
            if (item.product === productId) {
                matchingItem = item;
            }
        })
        if(matchingItem) {
            matchingItem.quantity ++;
        }
        else {
            cart.push({
                product:  productId,
                quantity: 1
    
           });
        }

        
       console.log(cart)
        

    })
    
})

