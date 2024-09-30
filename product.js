function addToCart(productName, price) {
    // Get existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product is already in the cart
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if already in the cart
    } else {
        cart.push({ name: productName, price: price, quantity: 1 }); // Add new product
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}
