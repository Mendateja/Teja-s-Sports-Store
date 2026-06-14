// ===== ALL PRODUCTS DATA =====
const products = [
  // CRICKET
  { id: 1,  name: "MRF Cricket Bat",              category: "cricket",    price: 1299, oldPrice: 1799, image: "MRF Cricket Bat.jpg",                  badge: "Best Seller" },
  { id: 2,  name: "Cricket Ball (Red)",            category: "cricket",    price: 349,  oldPrice: 499,  image: "cricket red ball.jpg",                 badge: "Sale" },
  { id: 3,  name: "Cricket Bats",                  category: "cricket",    price: 999,  oldPrice: 1399, image: "cricket bats.jpg",                     badge: "" },
  { id: 4,  name: "Cricket CVV Bat",               category: "cricket",    price: 1599, oldPrice: 2099, image: "Cricket cvv bat.jpg",                  badge: "New" },
  { id: 5,  name: "Cricket Gloves",                category: "cricket",    price: 499,  oldPrice: 699,  image: "Cricket.gloves.jpg",                   badge: "" },
  { id: 6,  name: "Cricket Ball",                  category: "cricket",    price: 299,  oldPrice: 399,  image: "cricket ball.jpg",                     badge: "" },
  { id: 7,  name: "Cricket Jersey",                category: "cricket",    price: 799,  oldPrice: 999,  image: "cricket jersey.jpg",                   badge: "" },

  // FOOTBALL
  { id: 8,  name: "Football",                      category: "football",   price: 699,  oldPrice: 999,  image: "football.jpg",                         badge: "Hot" },
  { id: 9,  name: "Football Gloves",               category: "football",   price: 549,  oldPrice: 799,  image: "football gloves.jpg",                  badge: "" },
  { id: 10, name: "Football Net",                  category: "football",   price: 1299, oldPrice: 1799, image: "football net.jpg",                     badge: "" },
  { id: 11, name: "Football Shoes",                category: "football",   price: 1499, oldPrice: 1999, image: "football shoes.jpg",                   badge: "Sale" },

  // BADMINTON
  { id: 12, name: "Badminton Rackets & Shuttles",  category: "badminton",  price: 899,  oldPrice: 1299, image: "badminton rackets & shuttle cocks.jpg", badge: "Combo" },
  { id: 13, name: "Badminton 2 Rackets Set",       category: "badminton",  price: 1199, oldPrice: 1599, image: "badminton 2 rackets & cock.jpg",        badge: "" },
  { id: 14, name: "Shuttle Cock",                  category: "badminton",  price: 199,  oldPrice: 299,  image: "shuttle cock.jpg",                     badge: "" },

  // TENNIS
  { id: 15, name: "Tennis Rackets",                category: "tennis",     price: 1099, oldPrice: 1499, image: "tennis bats.jpg",                      badge: "" },
  { id: 16, name: "Tennis Ball",                   category: "tennis",     price: 249,  oldPrice: 349,  image: "tennis ball.jpg",                      badge: "" },
  { id: 17, name: "Tennis Net",                    category: "tennis",     price: 999,  oldPrice: 1399, image: "tennis net.jpg",                       badge: "" },

  // BASKETBALL
  { id: 18, name: "Basketball",                    category: "basketball", price: 799,  oldPrice: 1099, image: "Basket ball.jpg",                      badge: "" },
  { id: 19, name: "Basketball Shoe",               category: "basketball", price: 1899, oldPrice: 2499, image: "basketball shoe.jpg",                  badge: "New" },

  // HOCKEY
  { id: 20, name: "Hockey Bat & Ball",             category: "hockey",     price: 1199, oldPrice: 1599, image: "hockey bat & ball.jpg",                badge: "" },
  { id: 21, name: "Hockey Goalkeeper Kit",         category: "hockey",     price: 2499, oldPrice: 3299, image: "hockey goalkeeper kit.jpg",            badge: "Pro" },
  { id: 22, name: "Ice Hockey Bat",                category: "hockey",     price: 1799, oldPrice: 2299, image: "Ice Hockey bat.jpg",                   badge: "" },

  // VOLLEYBALL
  { id: 23, name: "Volleyball",                    category: "volleyball", price: 599,  oldPrice: 799,  image: "volley ball.jpg",                      badge: "" },
  { id: 24, name: "Volleyball Net",                category: "volleyball", price: 999,  oldPrice: 1299, image: "volley ball net.jpg",                  badge: "" },

  // GOLF
  { id: 25, name: "Golf Balls",                    category: "golf",       price: 499,  oldPrice: 699,  image: "golf balls.jpg",                       badge: "" },
  { id: 26, name: "Golf Bats",                     category: "golf",       price: 2999, oldPrice: 3999, image: "golf bats.jpg",                        badge: "" },

  // SHOES
  { id: 27, name: "Running Shoe",                  category: "shoes",      price: 1299, oldPrice: 1799, image: "Running shoe.jpg",                     badge: "Popular" },
  { id: 28, name: "Gym Shoe",                      category: "shoes",      price: 1499, oldPrice: 1999, image: "gym shoe.jpg",                         badge: "" },
  { id: 29, name: "Sports Shoes",                  category: "shoes",      price: 999,  oldPrice: 1399, image: "shoes.jpg",                            badge: "" },
  { id: 30, name: "Daily Wear Shoe",               category: "shoes",      price: 799,  oldPrice: 999,  image: "Daily wear shoe.jpg",                  badge: "" },

  // FITNESS
  { id: 31, name: "Skipping Rope & Dumbbells",     category: "fitness",    price: 699,  oldPrice: 999,  image: "skipping rope& dubbulls.jpg",          badge: "Combo" },

  // BASEBALL
  { id: 32, name: "Baseball Bat",                  category: "baseball",   price: 899,  oldPrice: 1199, image: "Base ball bat.jpg",                    badge: "" },
  { id: 33, name: "Baseball Helmet",               category: "baseball",   price: 799,  oldPrice: 999,  image: "Base ball helmet.jpg",                 badge: "" },
  { id: 34, name: "Baseball Batting Helmet",       category: "baseball",   price: 999,  oldPrice: 1299, image: "Baseball batting helmet.jpg",          badge: "" },

  // OTHER
  { id: 35, name: "Rugby Ball",                    category: "other",      price: 799,  oldPrice: 999,  image: "Rugby ball.jpg",                       badge: "" },
  { id: 36, name: "Different Sport Jerseys",       category: "other",      price: 599,  oldPrice: 799,  image: "different sport jerseys.jpg",          badge: "" },
  { id: 37, name: "Carrom Board",                  category: "other",      price: 1499, oldPrice: 1999, image: "carrom board.jpg",                     badge: "" },
  { id: 38, name: "Chess Board",                   category: "other",      price: 599,  oldPrice: 799,  image: "Chess board.jpg",                      badge: "" },
  { id: 39, name: "Cycling Helmet",                category: "other",      price: 1199, oldPrice: 1599, image: "cycling helmet.jpg",                   badge: "" },
];

// ===== CART =====
let cart = [];

// ===== RENDER PRODUCTS =====
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  if (!list || list.length === 0) {
    grid.innerHTML = `
      <div style="color:var(--gray);grid-column:1/-1;text-align:center;padding:60px 0;font-size:1rem;">
        <i class="fas fa-search" style="font-size:2rem;display:block;margin-bottom:15px;"></i>
        No products found.
      </div>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200/0f1a2e/1976d2?text=${encodeURIComponent(p.name)}'"/>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price-row">
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          <span class="product-old-price">₹${p.oldPrice.toLocaleString()}</span>
        </div>
        <button class="add-to-cart" onclick="addToCart(${p.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== FILTER PRODUCTS (Filter Buttons) =====
function filterProducts(category, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  renderProducts(filtered);
}

// ===== FILTER BY CATEGORY (Category Cards & Offers) =====
function filterByCategory(category) {
  // Scroll to products
  scrollToSection('products');

  // Update filter buttons
  setTimeout(() => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      if (b.textContent.toLowerCase() === category.toLowerCase()) {
        b.classList.add('active');
      }
    });
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }, 500);
}

// ===== ADD TO CART =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showNotification(`"${product.name}" added to cart!`);
}

// ===== UPDATE CART UI =====
function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty!</p>
        <span>Add some products first</span>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/70x70/0f1a2e/1976d2?text=IMG'"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  cartTotal.textContent = '₹' + total.toLocaleString();
}

// ===== CHANGE QTY =====
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

// ===== REMOVE FROM CART =====
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

// ===== CLEAR CART =====
function clearCart() {
  cart = [];
  updateCartUI();
  showNotification('Cart cleared!');
}

// ===== CHECKOUT =====
function checkout() {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  showNotification(`Order placed! Total: ₹${total.toLocaleString()} 🎉`);
  cart = [];
  updateCartUI();
  toggleCart();
}

// ===== TOGGLE CART =====
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('active');
  document.getElementById('cartOverlay').classList.toggle('active');
}

// ===== HAMBURGER MENU =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('active');
}

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== SEARCH =====
function doSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();

  // Reset filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn').classList.add('active');

  if (!query) {
    renderProducts(products);
    scrollToSection('products');
    return;
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  renderProducts(filtered);
  scrollToSection('products');
}

// ===== NEWSLETTER =====
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !email.includes('@')) {
    showNotification('Please enter a valid email!');
    return;
  }
  showNotification('Subscribed! 10% OFF coupon sent to your email! 🎉');
  document.getElementById('newsletterEmail').value = '';
}

// ===== CONTACT FORM =====
function sendMessage() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    showNotification('Please fill all required fields!');
    return;
  }

  showNotification(`Message sent! We will contact you soon, ${name}! 📧`);
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactSubject').value = '';
  document.getElementById('contactMessage').value = '';
}

// ===== SHOW NOTIFICATION =====
function showNotification(message) {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

// ===== STICKY HEADER =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== SEARCH EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Search button click
  document.getElementById('searchBtn').addEventListener('click', doSearch);

  // Search on Enter key
  document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') doSearch();
  });

  // Scroll Reveal Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.category-card, .testimonial-card, .offer-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
  });

  // Load all products on start
  renderProducts(products);
});
// ===== GST & ORDER =====
const GST_RATE = 0.18;

function checkout() {
  if (cart.length === 0) {
    showNotification('Cart is empty! Add products first.');
    return;
  }
  showOrderModal();
}

function showOrderModal() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;

  const modal = document.createElement('div');
  modal.id = 'orderModal';
  modal.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.85);
    z-index:9999; display:flex; align-items:center;
    justify-content:center; padding:20px;
  `;

  modal.innerHTML = `
    <div style="background:#0d1526; border:1px solid #1e2d4a;
    border-radius:16px; width:100%; max-width:500px;
    max-height:90vh; overflow-y:auto; padding:30px;">

      <div style="display:flex; justify-content:space-between;
      align-items:center; margin-bottom:25px;">
        <h2 style="font-family:'Bebas Neue',sans-serif;
        font-size:1.8rem; color:white; letter-spacing:1px;">
          Place Order
        </h2>
        <button onclick="closeOrderModal()"
        style="background:none; border:none; color:#7a8aaa;
        font-size:1.5rem; cursor:pointer;">✕</button>
      </div>

      <!-- Order Summary -->
      <div style="background:#0f1a2e; border:1px solid #1e2d4a;
      border-radius:10px; padding:15px; margin-bottom:20px;">
        <h4 style="color:#1976d2; font-size:0.85rem;
        letter-spacing:2px; text-transform:uppercase;
        margin-bottom:12px;">Order Summary</h4>

        ${cart.map(item => `
          <div style="display:flex; justify-content:space-between;
          padding:6px 0; border-bottom:1px solid #1e2d4a;
          font-size:0.85rem; color:#e8f0fe;">
            <span>${item.name} × ${item.qty}</span>
            <span>₹${(item.price * item.qty).toLocaleString()}</span>
          </div>
        `).join('')}

        <div style="display:flex; justify-content:space-between;
        padding:8px 0; font-size:0.85rem; color:#7a8aaa; margin-top:8px;">
          <span>Subtotal</span>
          <span>₹${subtotal.toLocaleString()}</span>
        </div>
        <div style="display:flex; justify-content:space-between;
        padding:4px 0; font-size:0.85rem; color:#7a8aaa;">
          <span>GST (18%)</span>
          <span>₹${gst.toLocaleString()}</span>
        </div>
        <div style="display:flex; justify-content:space-between;
        padding:10px 0 0; font-size:1.1rem; font-weight:700;
        color:#1976d2; border-top:1px solid #1e2d4a; margin-top:5px;">
          <span>Total Amount</span>
          <span>₹${total.toLocaleString()}</span>
        </div>
      </div>

      <!-- Address Form -->
      <h4 style="color:#1976d2; font-size:0.85rem;
      letter-spacing:2px; text-transform:uppercase;
      margin-bottom:12px;">Delivery Address</h4>

      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
        <input id="orderName" type="text" placeholder="Full Name *"
        style="background:#0f1a2e; border:1px solid #1e2d4a;
        border-radius:8px; padding:12px 15px; color:white;
        font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>

        <input id="orderPhone" type="tel" placeholder="Phone Number *"
        style="background:#0f1a2e; border:1px solid #1e2d4a;
        border-radius:8px; padding:12px 15px; color:white;
        font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>

        <input id="orderEmail" type="email" placeholder="Email Address *"
        style="background:#0f1a2e; border:1px solid #1e2d4a;
        border-radius:8px; padding:12px 15px; color:white;
        font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>

        <input id="orderAddress" type="text" placeholder="House No, Street, Area *"
        style="background:#0f1a2e; border:1px solid #1e2d4a;
        border-radius:8px; padding:12px 15px; color:white;
        font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <input id="orderCity" type="text" placeholder="City *"
          style="background:#0f1a2e; border:1px solid #1e2d4a;
          border-radius:8px; padding:12px 15px; color:white;
          font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>

          <input id="orderState" type="text" placeholder="State *"
          style="background:#0f1a2e; border:1px solid #1e2d4a;
          border-radius:8px; padding:12px 15px; color:white;
          font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>
        </div>

        <input id="orderPincode" type="text" placeholder="Pincode *"
        style="background:#0f1a2e; border:1px solid #1e2d4a;
        border-radius:8px; padding:12px 15px; color:white;
        font-family:'Poppins',sans-serif; font-size:0.88rem; outline:none;"/>
      </div>

      <!-- Send Via -->
      <h4 style="color:#1976d2; font-size:0.85rem;
      letter-spacing:2px; text-transform:uppercase;
      margin-bottom:12px;">Send Order Details Via</h4>

      <div style="display:grid; grid-template-columns:1fr 1fr;
      gap:10px; margin-bottom:20px;">
        <button onclick="placeOrder('whatsapp')"
        style="padding:12px; background:#25D366; color:white;
        border:none; border-radius:8px; font-family:'Poppins',sans-serif;
        font-size:0.88rem; font-weight:600; cursor:pointer;
        display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fab fa-whatsapp" style="font-size:1.1rem;"></i> WhatsApp
        </button>

        <button onclick="placeOrder('email')"
        style="padding:12px; background:#1976d2; color:white;
        border:none; border-radius:8px; font-family:'Poppins',sans-serif;
        font-size:0.88rem; font-weight:600; cursor:pointer;
        display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fas fa-envelope" style="font-size:1.1rem;"></i> Email
        </button>
      </div>

    </div>
  `;

  document.body.appendChild(modal);
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.remove();
}

function placeOrder(via) {
  // Validate fields
  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const email = document.getElementById('orderEmail').value.trim();
  const address = document.getElementById('orderAddress').value.trim();
  const city = document.getElementById('orderCity').value.trim();
  const state = document.getElementById('orderState').value.trim();
  const pincode = document.getElementById('orderPincode').value.trim();

  if (!name || !phone || !email || !address || !city || !state || !pincode) {
    showNotification('Please fill all required fields!');
    return;
  }

  // Build order message
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;

  const orderItems = cart.map(i =>
    `• ${i.name} × ${i.qty} = ₹${(i.price * i.qty).toLocaleString()}`
  ).join('\n');

  const message = `
🏆 NEW ORDER - Teja's Sports Store

👤 Customer Details:
Name: ${name}
Phone: ${phone}
Email: ${email}

📦 Order Items:
${orderItems}

💰 Price Details:
Subtotal: ₹${subtotal.toLocaleString()}
GST (18%): ₹${gst.toLocaleString()}
Total: ₹${total.toLocaleString()}

🏠 Delivery Address:
${address}, ${city},
${state} - ${pincode}

📅 Order Date: ${new Date().toLocaleString('en-IN')}
  `.trim();

  if (via === 'whatsapp') {
    const waNumber = '7013134865';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  } else {
    const subject = `New Order from ${name} - Teja's Sports Store`;
    const mailUrl = `mailto:mendateja09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailUrl, '_blank');
  }

  // Clear cart
  cart = [];
  updateCartUI();
  closeOrderModal();
  toggleCart();
  showNotification(`Order placed! Details sent via ${via === 'whatsapp' ? 'WhatsApp' : 'Email'}! 🎉`);
}
// ===== CONTACT FORM - WHATSAPP & EMAIL =====
function sendMessage() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    showNotification('Please fill all required fields!');
    return;
  }

  const fullMessage = `
📩 NEW MESSAGE - Teja's Sports Store

👤 From: ${name}
📧 Email: ${email}
📌 Subject: ${subject || 'General Enquiry'}

💬 Message:
${message}

📅 Date: ${new Date().toLocaleString('en-IN')}
  `.trim();

  // Show options modal
  showContactOptionsModal(fullMessage, name);
}

function showContactOptionsModal(fullMessage, name) {
  const modal = document.createElement('div');
  modal.id = 'contactModal';
  modal.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.85);
    z-index:9999; display:flex; align-items:center;
    justify-content:center; padding:20px;
  `;

  modal.innerHTML = `
    <div style="background:#0d1526; border:1px solid #1e2d4a;
    border-radius:16px; width:100%; max-width:400px;
    padding:30px; text-align:center;">

      <i class="fas fa-paper-plane"
      style="font-size:2.5rem; color:#1976d2; margin-bottom:15px; display:block;"></i>

      <h2 style="font-family:'Bebas Neue',sans-serif;
      font-size:1.8rem; color:white; letter-spacing:1px; margin-bottom:8px;">
        Send Message
      </h2>

      <p style="color:#7a8aaa; font-size:0.88rem; margin-bottom:25px;">
        Choose how to send your message to Teja's Sports Store
      </p>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:15px;">
        <button onclick="sendContactVia('whatsapp', \`${fullMessage.replace(/`/g, "'")}\`)"
        style="padding:14px; background:#25D366; color:white;
        border:none; border-radius:8px; font-family:'Poppins',sans-serif;
        font-size:0.88rem; font-weight:600; cursor:pointer;
        display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fab fa-whatsapp" style="font-size:1.1rem;"></i> WhatsApp
        </button>

        <button onclick="sendContactVia('email', \`${fullMessage.replace(/`/g, "'")}\`)"
        style="padding:14px; background:#1976d2; color:white;
        border:none; border-radius:8px; font-family:'Poppins',sans-serif;
        font-size:0.88rem; font-weight:600; cursor:pointer;
        display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fas fa-envelope" style="font-size:1.1rem;"></i> Email
        </button>
      </div>

      <button onclick="closeContactModal()"
      style="width:100%; padding:12px; background:transparent;
      border:1px solid #1e2d4a; border-radius:8px; color:#7a8aaa;
      font-family:'Poppins',sans-serif; font-size:0.88rem;
      cursor:pointer;">Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);
}

function sendContactVia(via, message) {
  if (via === 'whatsapp') {
    const waUrl = `https://wa.me/917013134865?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  } else {
    const subject = encodeURIComponent("New Message - Teja's Sports Store");
    const mailUrl = `mailto:mendateja09@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`;
    window.open(mailUrl, '_blank');
  }

  closeContactModal();

  // Clear form
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactSubject').value = '';
  document.getElementById('contactMessage').value = '';

  showNotification(`Message sent via ${via === 'whatsapp' ? 'WhatsApp' : 'Email'}! 📧`);
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) modal.remove();
}
// ===== SOCIAL MEDIA LINKS =====
document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = document.querySelectorAll('.social-links a');

  socialLinks.forEach(link => {
    const icon = link.querySelector('i');
    if (!icon) return;

    if (icon.classList.contains('fa-whatsapp')) {
      link.href = 'https://wa.me/917013134865';
      link.target = '_blank';
    }
    if (icon.classList.contains('fa-instagram')) {
      link.href = 'https://www.instagram.com/menda_teja';
      link.target = '_blank';
    }
    if (icon.classList.contains('fa-facebook')) {
      link.href = 'https://www.facebook.com/menda_teja';
      link.target = '_blank';
    }
    if (icon.classList.contains('fa-twitter')) {
      link.href = 'https://twitter.com';
      link.target = '_blank';
    }
    if (icon.classList.contains('fa-youtube')) {
      link.href = 'https://youtube.com';
      link.target = '_blank';
    }
  });
});
// ===== SUPPORT LINKS MODALS =====
document.addEventListener('DOMContentLoaded', () => {
  const supportLinks = document.querySelectorAll('.footer-links a');

  supportLinks.forEach(link => {
    const text = link.textContent.trim();

    if (text === 'Track Order') {
      link.onclick = () => showSupportModal('track');
    }
    if (text === 'Returns') {
      link.onclick = () => showSupportModal('returns');
    }
    if (text === 'Size Guide') {
      link.onclick = () => showSupportModal('size');
    }
    if (text === 'FAQ') {
      link.onclick = () => showSupportModal('faq');
    }
    if (text === 'Privacy Policy') {
      link.onclick = () => showSupportModal('privacy');
    }
  });
});

function showSupportModal(type) {
  const content = {
    track: {
      title: '📦 Track Your Order',
      body: `
        <p style="color:#7a8aaa;margin-bottom:20px;">Enter your order details to track your delivery.</p>
        <input type="text" placeholder="Enter Order ID" id="trackId"
        style="width:100%;background:#0f1a2e;border:1px solid #1e2d4a;
        border-radius:8px;padding:12px 15px;color:white;
        font-family:'Poppins',sans-serif;font-size:0.88rem;
        outline:none;margin-bottom:10px;"/>
        <input type="tel" placeholder="Enter Phone Number" id="trackPhone"
        style="width:100%;background:#0f1a2e;border:1px solid #1e2d4a;
        border-radius:8px;padding:12px 15px;color:white;
        font-family:'Poppins',sans-serif;font-size:0.88rem;
        outline:none;margin-bottom:15px;"/>
        <button onclick="trackOrder()"
        style="width:100%;padding:12px;background:#1976d2;color:white;
        border:none;border-radius:8px;font-family:'Poppins',sans-serif;
        font-size:0.88rem;font-weight:600;cursor:pointer;">
          <i class="fas fa-search"></i> Track Order
        </button>
      `
    },
    returns: {
      title: '🔄 Returns & Refunds',
      body: `
        <div style="color:#7a8aaa;font-size:0.88rem;line-height:1.8;">
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;
          border-radius:8px;padding:15px;margin-bottom:12px;">
            <strong style="color:#1976d2;">📅 Return Window</strong><br/>
            Products can be returned within <strong style="color:white;">7 days</strong> of delivery.
          </div>
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;
          border-radius:8px;padding:15px;margin-bottom:12px;">
            <strong style="color:#1976d2;">✅ Eligible Items</strong><br/>
            Unused products in original packaging only.
          </div>
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;
          border-radius:8px;padding:15px;margin-bottom:12px;">
            <strong style="color:#1976d2;">💰 Refund Process</strong><br/>
            Refunds processed within <strong style="color:white;">5-7 business days</strong>.
          </div>
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;
          border-radius:8px;padding:15px;">
            <strong style="color:#1976d2;">📞 Contact Us</strong><br/>
            Call: +91 70131 34865<br/>
            Email: mendateja09@gmail.com
          </div>
        </div>
      `
    },
    size: {
      title: '📏 Size Guide',
      body: `
        <div style="color:#7a8aaa;font-size:0.85rem;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:15px;">
            <tr style="background:#1976d2;color:white;">
              <th style="padding:10px;text-align:left;border-radius:4px 0 0 0;">Size</th>
              <th style="padding:10px;text-align:left;">Chest (inches)</th>
              <th style="padding:10px;text-align:left;border-radius:0 4px 0 0;">Best For</th>
            </tr>
            <tr style="background:#0f1a2e;border-bottom:1px solid #1e2d4a;">
              <td style="padding:10px;color:white;">S</td>
              <td style="padding:10px;">34-36</td>
              <td style="padding:10px;">Kids 12-14 yrs</td>
            </tr>
            <tr style="background:#111d35;border-bottom:1px solid #1e2d4a;">
              <td style="padding:10px;color:white;">M</td>
              <td style="padding:10px;">38-40</td>
              <td style="padding:10px;">Adults Small</td>
            </tr>
            <tr style="background:#0f1a2e;border-bottom:1px solid #1e2d4a;">
              <td style="padding:10px;color:white;">L</td>
              <td style="padding:10px;">42-44</td>
              <td style="padding:10px;">Adults Medium</td>
            </tr>
            <tr style="background:#111d35;border-bottom:1px solid #1e2d4a;">
              <td style="padding:10px;color:white;">XL</td>
              <td style="padding:10px;">46-48</td>
              <td style="padding:10px;">Adults Large</td>
            </tr>
            <tr style="background:#0f1a2e;">
              <td style="padding:10px;color:white;">XXL</td>
              <td style="padding:10px;">50-52</td>
              <td style="padding:10px;">Adults XLarge</td>
            </tr>
          </table>
          <p style="font-size:0.8rem;color:#7a8aaa;">
            * Sizes may vary by brand. Contact us for specific product sizing.
          </p>
        </div>
      `
    },
    faq: {
      title: '❓ Frequently Asked Questions',
      body: `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${[
            ['How long does delivery take?', 'Delivery takes 3-7 business days depending on your location.'],
            ['Do you offer Cash on Delivery?', 'Yes! COD is available for orders above ₹500.'],
            ['Can I cancel my order?', 'Orders can be cancelled within 24 hours of placing.'],
            ['Are products genuine?', 'Yes! All products are 100% genuine and quality checked.'],
            ['How to contact support?', 'Call +91 70131 34865 or email mendateja09@gmail.com'],
            ['Do you ship across India?', 'Yes! We ship to all major cities and towns across India.'],
          ].map(([q, a]) => `
            <div style="background:#0f1a2e;border:1px solid #1e2d4a;
            border-radius:8px;padding:15px;">
              <strong style="color:#1976d2;font-size:0.88rem;display:block;margin-bottom:6px;">
                ${q}
              </strong>
              <span style="color:#7a8aaa;font-size:0.83rem;">${a}</span>
            </div>
          `).join('')}
        </div>
      `
    },
    privacy: {
      title: '🔒 Privacy Policy',
      body: `
        <div style="color:#7a8aaa;font-size:0.85rem;line-height:1.8;
        display:flex;flex-direction:column;gap:12px;">
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;border-radius:8px;padding:15px;">
            <strong style="color:#1976d2;">📋 Data Collection</strong><br/>
            We collect only necessary information like name, phone, email and address for order processing.
          </div>
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;border-radius:8px;padding:15px;">
            <strong style="color:#1976d2;">🔐 Data Security</strong><br/>
            Your personal information is kept safe and never shared with third parties.
          </div>
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;border-radius:8px;padding:15px;">
            <strong style="color:#1976d2;">🍪 Cookies</strong><br/>
            We use cookies to improve your browsing experience on our website.
          </div>
          <div style="background:#0f1a2e;border:1px solid #1e2d4a;border-radius:8px;padding:15px;">
            <strong style="color:#1976d2;">📞 Contact</strong><br/>
            For privacy concerns: mendateja09@gmail.com
          </div>
        </div>
      `
    }
  };

  const modal = document.createElement('div');
  modal.id = 'supportModal';
  modal.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.85);
    z-index:9999;display:flex;align-items:center;
    justify-content:center;padding:20px;
  `;

  modal.innerHTML = `
    <div style="background:#0d1526;border:1px solid #1e2d4a;
    border-radius:16px;width:100%;max-width:500px;
    max-height:85vh;overflow-y:auto;padding:30px;">

      <div style="display:flex;justify-content:space-between;
      align-items:center;margin-bottom:20px;">
        <h2 style="font-family:'Bebas Neue',sans-serif;
        font-size:1.6rem;color:white;letter-spacing:1px;">
          ${content[type].title}
        </h2>
        <button onclick="closeSupportModal()"
        style="background:none;border:none;color:#7a8aaa;
        font-size:1.5rem;cursor:pointer;">✕</button>
      </div>

      ${content[type].body}

    </div>
  `;

  document.body.appendChild(modal);
}

function closeSupportModal() {
  const modal = document.getElementById('supportModal');
  if (modal) modal.remove();
}

function trackOrder() {
  const id = document.getElementById('trackId').value.trim();
  const phone = document.getElementById('trackPhone').value.trim();

  if (!id || !phone) {
    showNotification('Please enter Order ID and Phone number!');
    return;
  }

  closeSupportModal();
  showNotification(`Tracking order ${id}... We will update you on ${phone} soon! 📦`);
}