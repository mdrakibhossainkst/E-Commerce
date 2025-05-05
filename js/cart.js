// Cart functions
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
  
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function addToCart(item) {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      // Item already exists, update quantity
      cart[existingItemIndex].quantity += item.quantity;
    } else {
      // Item doesn't exist, add it
      cart.push(item);
    }
    
    saveCart(cart);
    updateCartCount();
  }
  
  function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
  }
  
  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
  
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
      element.textContent = count;
    });
  }
  
  function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
  }