// In cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-container');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<h2>Your cart is empty!</h2>';
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img class="product-image" src="src/${item.name.toLowerCase().replace(/ /g, '-')}.jpg" alt="${item.name}">
            <div class="product-details">
                <h2 class="product-title">${item.name}</h2>
                <p class="product-price">&#8377;${item.price} x ${item.quantity} = &#8377;${itemTotal}</p>
                <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    const cartSummary = document.createElement('div');
    cartSummary.className = 'cart-summary';
    cartSummary.innerHTML = `<h2>Total: &#8377;${totalPrice}</h2><button class="checkout-btn">Proceed to Checkout</button>`;
    cartContainer.appendChild(cartSummary);
});

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Refresh the page to update cart view
}
