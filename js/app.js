// ============================================
// DIGIMART MAIN APPLICATION — DEMO MODE
// ============================================

// Toast notifications
const Toast = {
  container: null,

  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  },

  show(message, type = 'success') {
    if (!this.container) this.init();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success'
          ? '<path d="M20 6L9 17l-5-5"/>'
          : '<circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>'}
      </svg>
      <span>${message}</span>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  success(message) {
    this.show(message, 'success');
  },

  error(message) {
    this.show(message, 'error');
  }
};

// Demo Mode Banner
const DemoBanner = {
  init() {
    // Check if already exists
    if (document.querySelector('.demo-mode-banner')) return;

    const banner = document.createElement('div');
    banner.className = 'demo-mode-banner';
    banner.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
      <span>DEMO PREVIEW — Sample products and prices. No real purchases are available.</span>
    `;
    document.body.appendChild(banner);

    // Add padding to body so banner doesn't cover content
    document.body.style.paddingBottom = '40px';
  }
};

// Cart Sidebar
const CartSidebar = {
  sidebar: null,
  overlay: null,

  init() {
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'cart-overlay';
    this.overlay.addEventListener('click', () => this.close());
    document.body.appendChild(this.overlay);

    // Create sidebar
    this.sidebar = document.createElement('aside');
    this.sidebar.className = 'cart-sidebar';
    this.sidebar.innerHTML = `
      <div class="cart-header">
        <h2>Shopping Cart (Demo)</h2>
        <button class="cart-close" aria-label="Close cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="cart-items"></div>
      <div class="cart-footer">
        <div class="cart-summary">
          <div class="cart-summary-row">
            <span>Subtotal (Demo)</span>
            <span id="cart-subtotal">₹0</span>
          </div>
          <div class="cart-summary-row total">
            <span>Total (Demo)</span>
            <span class="amount" id="cart-total">₹0</span>
          </div>
        </div>
        <button class="cart-checkout-btn" id="checkout-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <path d="M12 18h.01"/>
          </svg>
          Demo Checkout
        </button>
        <div class="cart-payment-methods">
          <p>Demo mode — no payments are processed</p>
          <div class="cart-payment-badges">
            <span class="cart-payment-badge" style="opacity: 0.6;">No gateway connected (demo)</span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(this.sidebar);

    // Event listeners
    this.sidebar.querySelector('.cart-close').addEventListener('click', () => this.close());
    this.sidebar.querySelector('#checkout-btn').addEventListener('click', () => this.handleCheckout());

    // Subscribe to cart changes
    Cart.subscribe(() => this.render());

    // Initial render
    this.render();
  },

  open() {
    if (!this.sidebar) this.init();
    this.overlay.classList.add('open');
    this.sidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    if (!this.sidebar) return;
    this.overlay.classList.remove('open');
    this.sidebar.classList.remove('open');
    document.body.style.overflow = '';
  },

  render() {
    if (!this.sidebar) return;

    const itemsContainer = this.sidebar.querySelector('.cart-items');
    const items = Cart.getItems();
    const count = Cart.getCount();
    const total = Cart.getTotal();

    // Update header count
    this.sidebar.querySelector('.cart-header h2').innerHTML = `Shopping Cart (Demo) <span style="color: var(--gray-400); font-size: 0.875rem;">(${count})</span>`;

    // Update totals
    this.sidebar.querySelector('#cart-subtotal').textContent = `₹${total.toLocaleString('en-IN')}`;
    this.sidebar.querySelector('#cart-total').textContent = `₹${total.toLocaleString('en-IN')}`;

    // Render items
    if (items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h3>Your cart is empty</h3>
          <p>Browse our sample products and add items to your cart</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} <span style="color: var(--accent-amber); font-size: 0.7rem;">(Demo)</span></div>
            <div class="cart-item-qty">
              <button class="qty-decrease" aria-label="Decrease quantity">−</button>
              <span>${item.quantity}</span>
              <button class="qty-increase" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove" aria-label="Remove item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      `).join('');

      // Add event listeners to cart items
      itemsContainer.querySelectorAll('.cart-item').forEach(itemEl => {
        const id = parseInt(itemEl.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);

        itemEl.querySelector('.qty-decrease').addEventListener('click', () => {
          Cart.updateQuantity(id, Cart.getQuantity(id) - 1);
        });

        itemEl.querySelector('.qty-increase').addEventListener('click', () => {
          Cart.updateQuantity(id, Cart.getQuantity(id) + 1);
        });

        itemEl.querySelector('.cart-item-remove').addEventListener('click', () => {
          Cart.removeItem(id);
          Toast.success('Item removed from cart');
        });
      });
    }
  },

  handleCheckout() {
    const items = Cart.getItems();
    if (items.length === 0) {
      Toast.error('Your cart is empty');
      return;
    }

    const total = Cart.getTotal();
    const itemCount = items.length;

    // DEMO CHECKOUT — No real payment processing
    const orderSummary = items.map(item => 
      `• ${item.name} — ₹${item.price.toLocaleString('en-IN')} x${item.quantity}`
    ).join('\n');

    alert(
      `=== DEMO CHECKOUT ===\n\n` +
      `This is a demonstration only. No real payment will be processed.\n\n` +
      `Order Summary:\n${orderSummary}\n\n` +
      `Total: ₹${total.toLocaleString('en-IN')}\n\n` +
      `In production, you would be redirected to Razorpay for secure payment.\n` +
      `After successful payment, digital products would be delivered to your email.`
    );

    // Clear cart after demo checkout
    Cart.clear();
    this.close();
    Toast.success('Demo order completed! (No real purchase was made)');
  }
};

// Product rendering
const ProductRenderer = {
  grid: null,

  init() {
    this.grid = document.getElementById('productsGrid');
    if (this.grid) {
      this.render(PRODUCTS);
      this.setupFilters();
    }
  },

  render(products) {
    if (!this.grid) return;

    if (products.length === 0) {
      this.grid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
          <h3 style="font-size: 1.25rem; color: var(--gray-600); margin-bottom: 0.5rem;">No products found</h3>
          <p style="color: var(--gray-500);">Try adjusting your search or filter criteria</p>
        </div>
      `;
      return;
    }

    this.grid.innerHTML = products.map(product => this.createCard(product)).join('');
    this.attachEventListeners();
  },

  createCard(product) {
    const discount = product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

    const ratingDisplay = product.rating > 0
      ? `<span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
         <span class="rating-value">${product.rating}</span>
         <span class="review-count">(${product.reviews.toLocaleString()})</span>`
      : `<span style="color: var(--gray-600); font-size: 0.8rem;">No reviews yet — sample product</span>`;

    const alt = product.imageAlt || `${product.name} sample product mockup`;

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src=generateFallback('${product.category}', '${product.name.replace(/'/g, "\\'")}');">
          <span class="demo-product-badge">DEMO PRODUCT</span>
          ${product.badge && product.badge !== 'sample' ? `<span class="product-badge ${product.badge}">${product.badge === 'bestseller' ? 'Bestseller' : product.badge === 'new' ? 'New' : 'Sale'}</span>` : ''}
          <div class="product-actions">
            <button class="product-action-btn" onclick="window.location.href='product.html?id=${product.id}'" aria-label="View details">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button class="product-action-btn quick-add" data-id="${product.id}" aria-label="Add to cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.shortDescription}</p>
          <div class="product-rating">${ratingDisplay}</div>
          <div class="product-footer">
            <div class="product-price">
              <span class="current">₹${product.price.toLocaleString('en-IN')}</span>
              <span class="demo-price-tag">Demo</span>
              ${product.originalPrice ? `<span class="original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
              ${discount ? `<span class="discount">${discount}% off</span>` : ''}
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  },

  attachEventListeners() {
    // Add to cart buttons
    this.grid.querySelectorAll('.add-to-cart-btn, .quick-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);
        if (product) {
          Cart.addItem(product);
          Toast.success(`${product.name} added to cart (Demo)`);
        }
      });
    });

    // Card click to view details
    this.grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn, .quick-add, .product-action-btn')) return;
        const id = card.dataset.id;
        window.location.href = `product.html?id=${id}`;
      });
    });
  },

  setupFilters() {
    // Category filters
    document.querySelectorAll('.category-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.category-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const category = link.dataset.category;
        const filtered = category === 'all'
          ? PRODUCTS
          : PRODUCTS.filter(p => p.category === category);
        this.render(filtered);
      });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const query = e.target.value.toLowerCase().trim();
          const filtered = query
            ? PRODUCTS.filter(p => {
                const hay = [p.name, p.shortDescription, p.description, p.categoryLabel, p.format || '', p.keywords || '']
                  .join(' ')
                  .toLowerCase();
                return hay.includes(query);
              })
            : PRODUCTS;
          this.render(filtered);
        }, 300);
      });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        let sorted = [...PRODUCTS];

        switch (sortBy) {
          case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
          case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
          case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'category':
            sorted.sort((a, b) => a.categoryLabel.localeCompare(b.categoryLabel) || a.name.localeCompare(b.name));
            break;
          case 'newest':
            sorted.sort((a, b) => b.id - a.id);
            break;
          default:
            sorted = PRODUCTS;
        }

        this.render(sorted);
      });
    }
  }
};

// FAQ Accordion
const FAQ = {
  init() {
    document.querySelectorAll('.faq-question').forEach(question => {
      const item = question.parentElement;
      const answer = question.nextElementSibling;
      if (!answer || !answer.classList.contains('faq-answer')) return;

      // Wire up disclosure ARIA so assistive tech can follow the accordion.
      if (!answer.id) answer.id = 'faq-answer-' + Math.random().toString(36).slice(2, 9);
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', answer.id);

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all items
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });

        // Open clicked item if it was closed
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  DemoBanner.init();
  Toast.init();
  CartSidebar.init();
  ProductRenderer.init();
  FAQ.init();

  // Update cart count in header
  const updateCartCount = () => {
    const count = Cart.getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  };

  Cart.subscribe(updateCartCount);
  updateCartCount();
});
