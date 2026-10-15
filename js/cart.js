// ============================================
// DIGIMART CART MANAGEMENT
// ============================================

const Cart = (() => {
  const STORAGE_KEY = 'digimart_cart';
  let items = [];
  let listeners = [];

  // Initialize cart from localStorage
  function init() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      items = stored ? JSON.parse(stored) : [];
    } catch (e) {
      items = [];
    }
    return items;
  }

  // Save cart to localStorage
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
    notifyListeners();
  }

  // Subscribe to cart changes
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners
  function notifyListeners() {
    listeners.forEach(listener => listener(items));
  }

  // Get all items
  function getItems() {
    return [...items];
  }

  // Get item count
  function getCount() {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Get total price
  function getTotal() {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Add item to cart
  function addItem(product, quantity = 1) {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ ...product, quantity });
    }
    save();
  }

  // Remove item from cart
  function removeItem(productId) {
    items = items.filter(item => item.id !== productId);
    save();
  }

  // Update item quantity
  function updateQuantity(productId, quantity) {
    const item = items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        removeItem(productId);
      } else {
        item.quantity = quantity;
        save();
      }
    }
  }

  // Clear cart
  function clear() {
    items = [];
    save();
  }

  // Check if product is in cart
  function hasItem(productId) {
    return items.some(item => item.id === productId);
  }

  // Get quantity of specific item
  function getQuantity(productId) {
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }

  return {
    init,
    subscribe,
    getItems,
    getCount,
    getTotal,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    hasItem,
    getQuantity
  };
})();

// Initialize cart on load
document.addEventListener('DOMContentLoaded', () => Cart.init());
